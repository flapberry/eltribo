'use client';



import { useEffect, useState } from 'react';
import Filters from '../../../components/products/Filters';
import ProductItem from '../../../components/products/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsSet } from '@/redux/slice/ProdsSlice';
import { useParams } from 'next/navigation';

export default function ProductMap(props) {

	const { product } = useSelector((store) => store.ProdsS);
	const [url, setUrl] = useState();

	const params = useParams();

	useEffect(() => {
		setUrl(params.products.replace(/%20/g, ' '));
	}, [params])

	useEffect(() => {
		// console.log('😇', url.replace(/%20/g, ' '));
		console.log('👩', url);
	}, [url])


	useEffect(() => {

		// setUrl(window.location.href.split('/'));
	}, [])
	
	const dispatch = useDispatch();
	
	const [prod, setProd] = useState(); 
	
	// useEffect(() => {
	// 	dispatch(ProductsSet(props.prod.data));
	// }, [1]);
	 
	useEffect(() => {
		setProd(product);
		console.log("🚀 ~ ProductMap ~ product:", product);
	}, [product]);

	if (prod && url) {
		return (
			<>
			<Filters text = {url} />
			<section className = 'flex flex-wrap gap-y-[2rem] justify-evenly'>
				{prod?.map((i, j) => (
					<ProductItem key = {j} data = {i} />
				))}
			</section>
			</>
		)
	}
}
