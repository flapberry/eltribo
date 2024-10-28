'use client';

import { ContactEnqSchema } from '@/utils/schema/ContactS';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import GreenButton from '../common/greenButton';
import { bkend } from '../../../axios/axiosInstance';

export default function ContactForm() {

	const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({
		resolver: zodResolver(ContactEnqSchema),
		defaultValues: {
			name: 'Person1',
			mail: 'person1@gmai.com',
			phno: 1234567890,
			message: 'Apple Inc. is an American multinational corporation and technology company headquartered and incorporated in Cupertino, California, in Silicon Valley. It is best known for its consumer electronics, software, and services. Founded in 1976, the company was incorporated as Apple Computer, Inc. by Steve Wozniak and Steve Jobs the following year. It was renamed Apple Inc. in 2007 as the company had expanded its focus from computers to consumer electronics. Apple is the largest technology company by revenue, with US$383.29 billion in 2023.',
	} });

	async function SendConEnq(data) {
		const f = await bkend.post('/contact', data);
		console.log("🚀 ~ SendConEnq ~ f:", f)
	}

	function Submit(formD) {
		delete formD.save;
		console.log("🚀 ~ Submit ~ formD:", formD);
		SendConEnq();
	}

	return (
		<main className="!px-[5rem] evenPadding">
			<section className="evenPadding bg-[#D6EFD8] rounded-xl">
				<h1 className='text-center text-[2.1rem] mb-[2rem]'>Get In Touch</h1>
				<form onSubmit={handleSubmit(Submit)}>
					<div className="flex justify-between">
						<input {...register('name')} type="text" placeholder='Name' className="inpContact" />
						<input {...register('mail')} type="email" placeholder='Email' className="inpContact" />
						<input {...register('phno')} type="number" placeholder='Phone' className="inpContact" />
					</div>
					<div className="mt-[2rem]">
						<textarea {...register('message')} type="text" placeholder='Message' className='inpContact !w-full h-[15rem] resize-none' />
						<footer className="flex items-center gap-3 h-6">
							<input type="checkbox" {...register('save')} className='border-[1px] border-[#605D64] h-5 w-5 rounded-md' />
							<label className='text-[#605D64]'>Save my name, email, and website in this browser for the next time I comment.</label>
						</footer>
						<p className='text-Red text-center'>{errors?.name?.message || errors?.mail?.message || errors?.phno?.message || errors?.message?.message}</p>
						<div className="flex justify-center mt-5">
							<GreenButton text='Send Message' />
						</div>
					</div>
				</form>
			</section>
		</main>
	)
}
