

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import GreenButton, { Quantity } from '../common/greenButton';
import InquireForm from '../forms/InquireForm';
import ThankYou from './ThankYou';

export default function ProdMain() {

	const prodd = {
		name: 'Madame - Black - Plain Paper Shopping Bags', img: [1, 2, 3, 4, 5], des: 'Eye-catching design. Bags come with thank you printed on two sides.', cost: 59,
		prodSpe: { Size: '15x11x4', Paper: 'Importated Board', Print: 'Plain', Eyelet: 'Yes', Extra: 'Price Inclusive of GST Free Shipping' },
	};

	const { prod } = useSelector((store) => store.ProdS);
	
	const [info, setInfo] = useState();
	const [quantity, setQuantity] = useState(1);
	const [inqDisp, setInqDisp] = useState(false);
	const [thankyou, setThankyou] = useState(false);
	const toggleInq = () => setInqDisp((l) => !l);

	useEffect(() => {
		// Object.entries(prodd?.additional.Additional_Information).map((i, j) => {
		// 	console.log('🦸‍♂️', i);

		// })
		info?.map((i, j) => {
			console.log('🙆‍♂️', i);
		})
	
	}, [])
	

	useEffect(() => {
		const c = { ...prod };
		delete c.additional;
		setInfo(c);
	}, [prod]);

	useEffect(() => {
		window.scroll({ top: 0, behavior: 'smooth' });
	}, [inqDisp, thankyou]);

	if (info) {
		return (
			<main className='FCol gap-[0.8rem] font-pRegular w-[42rem]'>
				<h1 className='text-[1.7rem] text-[#1D1B20]'>{info.name}</h1>
				<h2 className='text-[1rem] text-[#938F96]'>{info.des}</h2>
				<h2 className='text-[1.5rem]'>Rs.{info.cost}</h2>
				<h2 className='text-[1.2rem] text-[#48464C]'>Quantity</h2>
				<section className='flex flex-wrap gap-[1rem]'>
					<Quantity quantity={quantity} minus={() => quantity > 1 && setQuantity((l) => --l)} plus={() => setQuantity((l) => ++l)} />
					<GreenButton text = 'Inquire Now' click = {toggleInq} />
					<InquireForm disp = {inqDisp} toggleInq = {toggleInq} setThankyou = {setThankyou} quantity = {quantity} />
				</section>
				<h3>Product Specification</h3>
				<ul className='text-[#79767D] FCol gap-[0.5rem]'>
					{Object.entries(prodd.prodSpe).map((i, j) => (
						<li className="">{i[0]}: {i[1]}</li>
					))}
				</ul>
				<aside>
					<ThankYou thankyou={thankyou} />
				</aside>
			</main>
		)
	}
}
