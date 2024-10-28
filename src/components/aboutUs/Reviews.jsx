'use client';

import { useEffect, useRef, useState } from 'react';
import ImageC from '../utils/ImageC';
import { motion } from 'framer-motion';

function Card() {
	return (
		<>

		</>
	)
}

export default function Reviews() {

	const carousal = useRef(null);
	const [current, setCurrent] = useState(0);

	function Scroll(val, j) {
		setCurrent(j);
		carousal?.current?.scrollTo({
			left: val,
			behavior: 'smooth'
		});
	}


	let data = [{
		img: 'reviews/profile.svg',
		name: 'Devon Lane',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
	}, {
		img: 'reviews/profile2.svg',
		name: 'Devon Lane',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
	},
	{
		img: 'reviews/profile3.svg',
		name: 'Devon Lane',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
	}, {
		img: 'reviews/profile.svg',
		name: 'Devon Lane',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
	}, {
		img: 'reviews/profile2.svg',
		name: 'Devon Lane',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
	}, {
		img: 'reviews/profile3.svg',
		name: 'Devon Lane',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
	}, {
		img: 'reviews/profile2.svg',
		name: 'Devon Lane',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
	}, {
		img: 'reviews/profile3.svg',
		name: 'Devon Lane',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
	}, {
		img: 'reviews/profile2.svg',
		name: 'Devon Lane',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
	}, {
		img: 'reviews/profile3.svg',
		name: 'Devon Lane',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
	}, {
		img: 'reviews/profile2.svg',
		name: 'Devon Lane',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
	}];

	return (
		<>
			<motion.main className="px-[2rem] bg-[#F1FFF9] evenPadding">
				<div className='text-[2.5rem] font-pMedium text-center'>Reviews From Satisfied Customers</div>
				<section className="rounded-xl p-[2rem] h-[14rem] bg-[#80AF81] mt-[2rem] w-[80%] m-auto">
					<aside className="h-full w-full rounded-xl flex gap-2 overflow-auto" ref={carousal}>
						{data.map((i, j) => (
							<div key={j} className="h-full w-[300px] rounded-xl bg-white flex p-[1rem] gap-3">
								<li className=''>
									<ImageC src={i.img} styles={'h-[3rem] w-[3rem] rounded-xl'} />
								</li>
								<li className='FCol w-[13rem]'>
									<ImageC src={'reviews/star.svg'} styles={'h-[1rem] w-[6rem] -ml-1'} />
									<h1 className='font-pRegular pt-[0.2rem] pb-[1rem]'>{i.name}</h1>
									<p>{i.text}</p>
								</li>
							</div>
						))}
					</aside>
				</section>
				<ul className='flex gap-2 justify-center mt-[2rem]'>
					{[0, 600, 1200, carousal.current?.scrollWidth].map((i, j) => (
						<li onClick={() => Scroll(i, j)} className={`h-3 w-3 ${current === j ? 'bg-black' : 'bg-[#CAC5CD]'} rounded-xl`}></li>
					))}
				</ul>
			</motion.main>
		</>
	)
}
