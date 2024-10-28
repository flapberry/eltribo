import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function ProdFooter() {

	const { prod } = useSelector((store) => store.ProdS);
	const [content, setContent] = useState();

	const additional = { Product_Descriptions: `Recycle polyester Eco-Friendly Fancy Multicolour bag with beautiful multicolor, rectangular paper bag that is designed for eco-conscious consumers who want to reduce their impact on the environment. The bag is made from environmentally friendly materials and features a colorful African Flow design. Material: Made of high-quality Polyester fabric Delivery Timing - 7 to 10 days`, Additional_Information: 'ADDITIONAL INFORMATION Recycle polyester Eco-Friendly Fancy Multicolour bag with beautiful multicolor, rectangular paper bag that is designed for eco-conscious consumers who want to reduce their impact on the environment. The bag is made from environmentally friendly materials and features a colorful African Flow design.Material: Made of high-quality  Polyester fabric Delivery Timing - 7 to 10 days additional information', Reviews: 'Review ADDITIONAL INFORMATION Recycle polyester Eco-Friendly Fancy Multicolour bag with beautiful multicolor, rectangular paper bag that is designed for eco-conscious consumers who want to reduce their impact on the environment. The bag is made from environmentally friendly materials and features a colorful African Flow design.Material: Made of high-quality  Polyester fabric Delivery Timing - 7 to 10 days additional information' };
	
	useEffect(() => {
		const c = { ...prod };
		setContent(additional?.Product_Descriptions);
	}, [prod]);

	if (additional) {
		return (
 			<main className='bg-[#F5F5F5] space-y-[2rem] px-[3rem] py-[3rem]'>
				<header className='flex justify-center gap-[2rem] text-[#938F96] font-pRegular'>
					{Object.keys(additional).map((i, j) => (
						<li key={j} onClick={() => setContent(additional[i])}
							className={`hvrPointer border-[1px] w-fit py-[1rem] px-[2rem] flex items-center text-center rounded-full max-md:py-[0.8rem] max-md:px-[0.6rem] ${additional[i] === content ? 'text-greenB border-greenB' : 'border-[#938F96]'}`}
						>{i.replace('_', ' ')}</li>
					))}
				</header>
				<section className='text-[#79767D] font-pRegular'>{JSON.stringify(content)}</section>
			</main>
		)
	}
}
