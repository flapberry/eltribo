'use client';

import { useSelector } from 'react-redux';
import ImageC from '../utils/ImageC';
import ProductItem from '../products/ProductItem';
import { GreenButtonSend } from '../common/greenButton';

export default function ProdDisp({ heading, img, text, Static }) {
	
	const { product } = useSelector((store) => store.ProdsS);
	const s = [{
		name: 'Buscuit TCups',
		description: 'Charming, artisan tea cups designed to enhance your tea-time experience',
		img: ['social/ProdShow1.svg']
	}, {
		name: 'Buscuit TCups',
		description: 'Charming, artisan tea cups designed to enhance your tea-time experience',
		img: ['social/ProdShow2.svg']
	}, {
		name: 'Buscuit TCups',
		description: 'Charming, artisan tea cups designed to enhance your tea-time experience',
		img: ['social/ProdShow3.svg']
	}];



	const data = Static ? s : product
	
	if (data) {
		return (
		<main className="bg-[#F1FFF9] px-[1rem]">
			<h1 className="FColC gap-5 font-pMedium text-[2rem] mb-[1rem]">{heading}</h1>
			<section className="flex justify-center">
				{img ? 
					<ImageC src={img} styles={'w-[85%] h-[13rem]'} />
				:''}
			</section>
			<div className="flex justify-center gap-3">
				{
					data.slice(0, 3).map((i, j) => (
						<ProductItem data={i} key={j} />
					))
				}
			</div>
			<div className='w-full flex justify-center my-[3.5rem]'>
				<GreenButtonSend text={text ? 'Explore Our Products' : 'View More'} />
			</div>
		</main>
		)
	}
}
