import Link from 'next/link';
import GreenButton, { GreenBorder } from '../common/greenButton';
import ImageC from '../utils/ImageC';
import { prodSet } from '@/redux/slice/ProductSlice';
import { useDispatch } from 'react-redux';

export default function ProductItem({ data }) {

	const dispatch = useDispatch();
	
	return (
		<section className={`FCol justify-between ${data.cost ? 'h-[31rem]' : 'h-[25rem]'} w-[22rem] mx-3 font-pRegular`}>
			<ImageC src={`${data.img ? data.img[0] : ''}`} styles='h-[19rem] w-[21rem] rounded-xl' />
			<h1 className='text-[1.3rem] text-[#1D1B20]'>{data.name}
				{data?.suffix && <span>&nbsp; {data.suffix}</span>}
			</h1>
			<h2 className='text-[#938F96] text-[0.99rem]'>{data.description.slice(0, 30)}</h2>
			{data.cost ? <>
				<h3 className='text-[#322F35] text-[1.2rem]'>
					Rs.{data.cost}
				</h3>
				<div className="flex justify-between">
					<Link href={`/products/${data.name}`} onClick={() => dispatch(prodSet(data))}>
						<GreenButton text='Inquire Now' />
					</Link>
					<GreenBorder text='Request A Sample' />
				</div>
			</> : ''}
		</section>
	)
}
