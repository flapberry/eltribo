import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GreenButtonSend } from '../common/greenButton';
import ImageC from '../utils/ImageC';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProdEnqSchema } from '@/utils/schema/InputS';
import DropDownC from '../common/DropDownC';
import { EnqSet } from '@/redux/slice/form/EnqSlice';
import { bkend } from '../../../axios/axiosInstance';

export default function InquireForm({ disp, toggleInq, quantity, setThankyou }) {

	const Dopt = {
		main: {
			tw: 'relative'
		},
		heading: {
			text: 'Select Size',
			tw: 'InpEnq flex justify-between items-center',
			click: null
		},
		body: {
			items: {
				itm1: {
					text: 'Large',
					click: null
				},
				itm2: {
					text: 'Medium',
					click: null
				},
				itm3: {
					text: 'Small',
					click: null
				}
			},
			tw: 'bg-white absolute w-full shadow-lg',
			itemstw: 'Filters'
		}
	}
	const { prod } = useSelector((store) => store.ProdS);
	const items = useRef(null);
	const [headingText, setHeadingText] = useState(Dopt.heading.text);
	const [dispD, setDispD] = useState(false);
	const dispatch = useDispatch();
	let pEle = items.current?.parentElement.firstChild;

	useEffect(() => {
		disp ? document.body.style.overflow = 'hidden' : document.body.style.overflow = ''
	}, [disp]);

	const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({
		resolver: zodResolver(ProdEnqSchema),
		defaultValues: {
			name: 'Person1',
			mail: 'person1@gmai.com',
			phno: 1234567890,
			message: 'Apple Inc. is an American multinational corporation and technology company headquartered and incorporated in Cupertino, California, in Silicon Valley. It is best known for its consumer electronics, software, and services. Founded in 1976, the company was incorporated as Apple Computer, Inc. by Steve Wozniak and Steve Jobs the following year. It was renamed Apple Inc. in 2007 as the company had expanded its focus from computers to consumer electronics. Apple is the largest technology company by revenue, with US$383.29 billion in 2023.',
	} });

	const timeout = () => setTimeout(() => {
		setThankyou(false);
	}, 3000);

	async function SendEnq(data) {
		data.phno = String(data.phno);
		data.quantity = quantity;
		delete data.size;
		const f = await bkend.post(`/enquiry/${prod._id}`, data);
		console.log("🚀 ~ SendEnq ~ f:", f)
	}

	function FormData(data) {
		toggleInq();
		setThankyou(true);
		timeout();
		SendEnq(data);
	}
	
	useEffect(() => {
		return () => {
			clearTimeout(timeout); 
		};
	}, [timeout]);

	useEffect(() => {
		Object.keys(errors).map((i, j) => {
			errors[i].ref?.classList?.add('!border-red-500')
		})
		const { unsubscribe } = watch((_, { name }) => {
			errors[name]?.ref?.classList?.remove('!border-red-500')
		})
		if (errors?.size && headingText === Dopt.heading.text) {
			pEle.classList.add('!border-red-500')
		}
		return () => unsubscribe()
	}, [errors, watch]);

	useEffect(() => {
		if (headingText !== Dopt.heading.text) pEle.classList.remove('!border-red-500')
	}, [headingText])

	if (prod) {
		return (
			<main className={`${disp ? 'block' : 'hidden'} font-pRegular z-10`}>
				<aside className={`fixed bg-black opacity-50 FullCover`} onClick={toggleInq}></aside>
				<section className="absoluteC w-[40%] rounded-xl bg-white">
					<div className="flex justify-end pt-3 pr-3">
						<ImageC src='lines/add.svg' onclick = {toggleInq} styles={'h-[3.5rem] w-[3.5rem] hvrPointer'} />
					</div>
					<form className='FCol gap-5 px-[5rem] pb-[3rem]' onSubmit={handleSubmit(FormData)}>
						<h1 className='text-[1.5rem]'>{prod.name}</h1>
						<input type="text" placeholder='Name' className='InpEnq' {...register('name')}
						/>
						<input type="email" className='InpEnq' placeholder='Email' {...register('mail')}
						/>
						<input type="number" className='InpEnq' placeholder='Phone Num' {...register('phno', {valueAsNumber: true})}
						/>
						<DropDownC options={Dopt} setValue={setValue} items={items} headingText={headingText} setHeadingText={setHeadingText} disp={dispD} setDisp={setDispD} validate={'check'} />
						<textarea type="text" className='InpEnq h-[6rem] resize-none' placeholder='Message' {...register('message')}
						/>
						<p className='text-center text-red-500'>{errors.name?.message || errors.phno?.message || errors.mail?.message || errors.size?.message || errors.message?.message}</p>
						<GreenButtonSend text='Send' type={'submit'} />
					</form>
				</section>
			</main>
		)
	}
}
