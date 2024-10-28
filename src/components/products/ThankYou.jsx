import { useEffect } from 'react';
import ImageC from '../utils/ImageC';

export default function ThankYou({ thankyou }) {
	
	useEffect(() => {
		thankyou ? document.body.style.overflow = 'hidden' : document.body.style.overflow = ''
	}, [thankyou]);

	return (
		<main className={`${thankyou ? 'block' : 'hidden'} absoluteC`}>
			<aside className='h-screen w-screen bg-black opacity-50'></aside>
			<section className='z-10 bg-white absoluteC FColC gap-3 py-[3rem] px-[2rem] rounded-xl'>
				<h1 className='text-[2.7rem]'>Thank You</h1>
				<ImageC src={'lines/thankYou.svg'} styles={'h-[5rem] w-[5rem]'} />
				<h2 className='text-[1rem] text-[#605D64]'>Your Submission Has Been Received</h2>
			</section>
		</main>

	)
}
