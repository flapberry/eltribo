'use client';

import Alsolike from '@/components/common/Alsolike';
import ProdCarousal from '@/components/products/ProdCarousal';
import ProdFooter from '@/components/products/ProdFooter';
import ProdMain from '@/components/products/ProdMain';
import { prodSet } from '@/redux/slice/ProductSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function SpecificProduct(props) {

	const dispatch = useDispatch();

	useEffect(() => {
		// dispatch(prodSet(props.prod));
	}, [1])

	return (
		<section>
			<main className='evenPadding flex justify-evenly flex-wrap gap-y-3'>
				<ProdCarousal />
				<ProdMain />
			</main>
			<ProdFooter />
			<Alsolike />
		</section>
		
	)
}
