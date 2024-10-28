'use client';

import { useEffect, useRef, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux';
import ImageC from '../utils/ImageC';

export default function ProdCarousal() {
	
	const { prod } = useSelector((store) => store.ProdS);
	const carousal = useRef();

	const responsive = {
			superLargeDesktop: {
				breakpoint: { max: 4000, min: 3000 },
				items: 1
			},
			desktop: {
				breakpoint: { max: 3000, min: 1024 },
				items: 1
			},
			tablet: {
				breakpoint: { max: 1024, min: 464 },
				items: 1
			},
			mobile: {
				breakpoint: { max: 464, min: 0 },
				items: 1
			}
	}; 

	const [first, setfirst] = useState();

	useEffect(() => {
		setfirst(prod);
	}, [prod]);
	
	if (first) {
		return (
		<main className='flex w-[35rem] justify-evenly flex-wrap max-lg:FCol max-lg:gap-4'>
			<section className="flex gap-3 h-[10rem] overflow-auto max-sm:order-2 sm:flex sm:flex-col sm:h-[25rem]">
				{first.img.map((i, j) => (
					<ImageC key={j} src={i} styles='h-[150px] w-[150px] rounded-xl shrink-0' onclick={() => carousal.current?.goToSlide(j, true)} />
				))}
			</section>
			<section className="w-[23rem] h-[25.1rem] rounded-xl border-[1px] border-black max-sm:order-1 z-0">
				<Carousel responsive={responsive} ref={carousal}>
					{first.img.map((i, j) => (
						<ImageC key={j} src={i} styles='h-[25rem] rounded-xl' />
					))} 
				</Carousel>
			</section>
		</main>
		)
	}
}
