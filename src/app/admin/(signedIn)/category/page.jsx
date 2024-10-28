'use client';

import { useMutation } from 'react-query';
import { bkend } from '../../../../../axios/axiosInstance';
import { useEffect, useState } from 'react';
import { Roboto } from 'next/font/google';
import { useDispatch, useSelector } from 'react-redux';
import { categorySet } from '@/redux/slice/admin/ProductSlice';
import Link from 'next/link';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export default function page() {

	const dispatch = useDispatch();
	const s = useSelector((store) => store.prodR);

	const [category, setCategory] = useState([]);

	const { mutate, isLoading, isSuccess, error, data } = useMutation(async () => {
		const f = await bkend.get(`/category/get`);
		console.log("🚀 ~ const{mutate,isLoading,isSuccess,error,data}=useMutation ~ f:", f);
		setCategory(f.data.data);
	});

	useEffect(() => {
		mutate();
	}, [])

	if (category) {
		return (
	<section className="p-3">
		<main className='flex outline-2 outline-red flex-col w-full px-4 py-3 bg-white rounded-lg mb-5'>
			<div>
				<h1 className={`${roboto.className} text-xl`}>Select Category</h1>	
				<li className='mt-3 flex gap-4 mb-3 flex-wrap justify-evenly'>
					{category.map((i, j) => (
						<Link href={`/admin/category/${i.name}`} key={j}>
							<section className={`max-h-[15rem] rounded-xl border-[1px] border-2 w-[18rem] bg-[#f8fafc] flex flex-col border-[rgb(175,173,173) items-center p-2 gap-3'}`} key={j} onClick={() => dispatch(categorySet(i))}> 
								<p className='text-2xl'>{i.name}</p>
								<p>{i.description.slice(0, 30)}</p>
							</section>					
						</Link>
					))}
				</li>
			</div>
		</main>		
	</section>
		)
	}
}
