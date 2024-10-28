import ClientProvider from '@/components/utils/ClientProvider';
import SpecificProduct from './_SpecificProduct';

export default function Page() {

	const prod = { name: 'Madame - Black - Plain Paper Shopping Bags', img: [1, 2, 3, 4, 5], des: 'Eye-catching design. Bags come with thank you printed on two sides.', cost: 59, prodSpe: { Size: '15x11x4', Paper: 'Importated Board', Print: 'Plain', Eyelet: 'Yes', Extra: 'Price Inclusive of GST Free Shipping' }, additional: { Product_Descriptions: `Recycle polyester Eco-Friendly Fancy Multicolour bag with beautiful multicolor, rectangular paper bag that is designed for eco-conscious consumers who want to reduce their impact on the environment. The bag is made from environmentally friendly materials and features a colorful African Flow design. Material: Made of high-quality Polyester fabric Delivery Timing - 7 to 10 days`, Additional_Information: 'ADDITIONAL INFORMATION Recycle polyester Eco-Friendly Fancy Multicolour bag with beautiful multicolor, rectangular paper bag that is designed for eco-conscious consumers who want to reduce their impact on the environment. The bag is made from environmentally friendly materials and features a colorful African Flow design.Material: Made of high-quality  Polyester fabric Delivery Timing - 7 to 10 days additional information', Reviews: 'Review ADDITIONAL INFORMATION Recycle polyester Eco-Friendly Fancy Multicolour bag with beautiful multicolor, rectangular paper bag that is designed for eco-conscious consumers who want to reduce their impact on the environment. The bag is made from environmentally friendly materials and features a colorful African Flow design.Material: Made of high-quality  Polyester fabric Delivery Timing - 7 to 10 days additional information' } };
	
	return (
		<main className='bg-baseBg'>
			<ClientProvider>
				<SpecificProduct prod={prod} />
			</ClientProvider>
		</main>
	)
}
