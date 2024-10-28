import ImageC from '../utils/ImageC';

export default function Support() {

	const values = [{img: 'truck.svg', head: 'Free Delivery', body: 'Free shipping on all US order or order above ₹500'}, {img: 'Support.svg', head: 'Support 24/7', body: 'Contact us 24 hours a day, 7 days a week'}, {img: 'Protect.svg', head: '100% Payment Secure', body: 'We ensure secure payment with PEV'}, {img: 'Deals.svg', head: 'Best Deal Offer', body: 'Grab Your Gear And Go'}, {img: 'Return.svg', head: '100% Return Policy', body: 'Any Time Return Product'}];
		
	return (
		<>
			<main className='bg-[#D6EFD8] evenPadding  flex justify-evenly flex-wrap gap-y-3'>
				{values?.map((i, j) => (
					<section className='flex justify-center gap-x-[0.8rem] w-[15rem]'>
						<div className='flex items-center'>
							<ImageC src={`/support/${i.img}`} styles='rounded-xl h-[4.5rem] w-[4.5rem]'/>
						</div>
						<aside className='FCol gap-1 justify-center'>
							<h1 className='font-pRegular text-[#1D1B20] text-[0.91rem]'>{i.head}</h1>
							<p className='font-pRegular text-[#938F96] text-[0.85rem] leading-[1.2rem]'>{i.body}</p>
						</aside>
					</section>
				))}  
			</main>
		</>
	)
}
