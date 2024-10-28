'use client';

import { useDispatch, useSelector } from 'react-redux';
import ProdDisp from '../home/ProdDisp';
import { useEffect, useState } from 'react';
import { prodSet } from '@/redux/slice/ProductSlice';
import { ProductsSet } from '@/redux/slice/ProdsSlice';
import { useMutation } from 'react-query';
import { bkend } from '../../../axios/axiosInstance';

export default function ProdDispC({ data }) {

	const { product } = useSelector((store) => store.ProdsS);
	console.log("🚀 ~ ProdDispC ~ product: 🚗 🚗 🚗 🚗", product, data)
	const dispatch = useDispatch();
	const [category, setCategory] = useState([]);

	const { mutate, isLoading, isSuccess, error, data: cData } = useMutation(async () => {
		const f = await bkend.get(`/category/get`);
		console.log("🚀 ~ const{mutate,isLoading,isSuccess,error,data}=useMutation ~ f:", f.data.data);
		setCategory(f.data.data);
	});

	// useEffect(() => {
	// 	mutate();
	// }, [])

	const s = [{
		name: 'Buscuit TCups',
		cost: 50,
		suffix: '(60 ml)'
	}, {
		name: 'Buscuit TCups',
		cost: 60,
	}, {
		name: 'Buscuit TCups',
		cost: 20,
		suffix: '(60 ml)'
	}];
	
	useEffect(() => {
		dispatch(ProductsSet(data));
	}, [1])

	if (product) {
		return (
			<>
				<ProdDisp heading={'Our Product'} text={'Explore Our Products'} Static={true} />
				<ProdDisp heading={'Biscuit Tea Cups'} img={'social/ProdI1.svg'} />
				<ProdDisp heading={'Paper Bags'} img={'social/ProdI2.svg'} />
				<ProdDisp heading={'Napkins'} img={'social/ProdI3.svg'} />
			</>
		)
	}
}
