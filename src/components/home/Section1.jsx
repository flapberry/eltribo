'use client';

import Image from 'next/image';
import GreenButton from '../common/greenButton';
import ImageC from '../utils/ImageC';

function Section1_() {
	return (
		<main className="flex">
			<li className='flex-1 FCol justify-center gap-[2rem] px-[2rem] gra1 h-[550px]'>
				<h1 className="text-[2.5rem] font-pMedium text-[#1D1B20]">About el tribo</h1>
				<p className="font-pRegular text-[#322F35]">Nature friendly, edible, biodegradable products made by the tribal and rural communities of anaikatty. A sustainable initiative by an NGO for not only preserving the environment but also to empower the local population. An inspiring initiative to sow the sustainable future for generations.</p>
				<GreenButton text={'Read More'} />
			</li>
			<li className='flex-1'>
				<div className='relative h-[550px] w-full'>
					<Image src={'images/cups/ElTribo.svg'} fill alt='img' priority className='' />
				</div>
			</li>
		</main>
	)
}

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';

export default function Section1() {

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

	return (
		<Carousel responsive={responsive} autoPlay={true} infinite={true} autoPlaySpeed={3000}>
			<div className="relative">
				<ImageC src={'carousal/Carousal1.svg'} styles={'w-[1300px] h-[640px]'} />
				<Link href={'/products'}>
					<button className="absolute top-[67%] left-[3%] w-[200px] h-[60px]"></button>
				</Link>
			</div>
			<div className="relative">
				<ImageC src={'carousal/Carousal2.svg'} styles={'w-[1300px] h-[640px]'} />
				<Link href={'/products'}>
					<button className="absolute top-[60%] left-[2%] w-[180px] h-[60px]"></button>
				</Link>
			</div>
			<div className="relative">
				<ImageC src={'carousal/Carousal3.svg'} styles={'w-[1300px] h-[640px]'} />
				<Link href={'/products'}>
					<button className="absolute top-[84%] left-[44%] w-[180px] h-[60px]"></button>
				</Link>
			</div>
			<div className="relative">
				<ImageC src={'carousal/Carousal4.svg'} styles={'w-[1300px] h-[640px]'} />
				<Link href={'/products'}>
					<button className="absolute top-[62%] left-[3%] w-[180px] h-[60px]"></button>
				</Link>
			</div>
		</Carousel>
	)
}
