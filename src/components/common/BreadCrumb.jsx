'use client';

import { useEffect, useState } from 'react';
import ImageC from '../utils/ImageC';
import Link from 'next/link';

export default function BreadCrumb() {

	const [crumbs, setCrumbs] = useState(
		window.location.pathname.split('/').map((i) => {
			if (i) {
				const temp = i.split('')
				temp[0] = temp[0].toUpperCase();
				return temp.join('');
			}
			return 'Home';
	}));
	
	const link = window.location.pathname.split('/').map((i, j, arr) => {
		if (j === 0) return '/';
		if (j === arr.length - 1) return i;
		return '/' + i + '/';
	}).map((i, j, array) => {
		if (j === 0) return '/';
		if (j === 1) return '/' + i.slice(1);
		return array[j - 1] + i;
	})
	console.log('💑', link);
	
	// return arr[j - 1] + i;
	
	useEffect(() => {
		console.log('👘', crumbs);
	}, [])

	if (crumbs && link) {
		return (
			<section className="relative">
				<ImageC src='lines/BreadCrumbC.svg' styles={'w-[100%] h-[10rem]'} />
				<main className="absolute FullCover FColC gap-3">
					<h1 className='text-[2.1rem] font-pMedium'>Products</h1>
					<ul className="FRowC py-[0.3rem] px-[3rem] gap-2">
						{crumbs.map((i, j) => (
							<li key={j} className="flex gap-2 text-[#1D1B20]">
								<Link href={link[j]}>
									<p>{i}</p>
								</Link>
								{j !== crumbs.length - 1 ? <ImageC src={'lines/rightArrow.svg'} styles={'h-[1.5rem] w-[1.5rem]'} /> : ''}
							</li>
						))}
					</ul>
				</main>
			</section>
		)
	}
}
