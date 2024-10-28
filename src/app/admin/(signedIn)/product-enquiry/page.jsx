'use client';

import { bkend } from '../../../../../axios/axiosInstance';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['700'] });

export default function Products() {

	const [products, setProducts] = useState([]);
	const [dropdown, setdropDown] = useState(null);
	const [zx, setZx] = useState([]);
	
	const { mutate, isLoading, isSuccess, error, data } = useMutation(async () => {
		const f = await bkend.get('/enquiry');
		setProducts(f.data.data);
	});

	useEffect(() => {
		mutate();
	}, []);

	function sh() {
		zx.map((i, j) => {
			if (i === zx[j + 1]) {
				setZx([]);
				return false;
			}
		});
		return true;
	}

	useEffect(() => {
		sh();
	}, [zx])
	
	function run(j) {
		setdropDown(j);
		setZx((zx) => [...zx, j]);
	}

if (products) {
		
return (<>
<main className='p-2 w-full h-full'>
	<h1 className={`text-2xl ${roboto.className} mt-2`}>Product Enquiry</h1>
	<section className='grid grid-cols-[2fr_6fr_1fr_2fr_2fr_2fr_2fr] mt-3'>
	
	<div className={`${roboto.className} bg-[#e7edf8] text-[#9f9999] rounded-l-xl p-4`}>Product Name</div>
	<div className={`${roboto.className} bg-[#e7edf8] text-[#9f9999]  p-4 col-span-3`}>Product Description</div>
	<div className={`${roboto.className} bg-[#e7edf8] text-[#9f9999] col-span-3 rounded-r-xl p-4`}>Images</div>

	{products.map((i, j) => (
		i.callback[0] ?
			<>

	<div className={`mt-3 p-4 bg-white flex items-center rounded-bl-xl  rounded-tl-xl ${roboto.className}`}>{i.name}</div>
	<div className={`mt-3 p-4 col-span-3 flex items-center  bg-white`}>{i.description.slice(0, 250)}</div>

	<div className={`mt-3 p-4 bg-white col-span-3 justify-between rounded-tr-xl rounded-br-xl flex gap-x-2 items-center`}>
		<div className='flex gap-2 flex-wrap justify-center'>
			{i.img.map((a, b) => (
				<div className='relative h-[50px] w-[50px]' key={b}>
					<Image src={a} fill alt='img' className='rounded-lg' />
				</div>
			))}
		</div>
		<div className='relative h-[40px] w-[40px] flex-shrink-0' id='dropdown' onClick={() => {
			run(j)
		}}>
			<Image src={'/images/admin/dropDown.png'} className={`${( dropdown === j && zx[0] !== undefined && zx[0] !== zx[1] && sh() ) ? 'rotate-180' : 'rotate-0'} `} fill/>
		</div>
	</div>
	{( dropdown === j && zx[0] !== undefined && zx[0] !== zx[1] && sh() ) ? <>
		<div className={`p-4 bg-[#e7edf8]  text-[#9f9999] ${roboto.className}`}>Name</div>
	<div className={`p-4 bg-[#e7edf8] col-span-2 text-[#9f9999] ${roboto.className}`}>Message</div>
	<div className={`p-4 bg-[#e7edf8]  text-[#9f9999] ${roboto.className}`}>Quantity</div>
	<div className={`p-4 bg-[#e7edf8]  text-[#9f9999] ${roboto.className}`}>Date</div>
	<div className={`p-4 bg-[#e7edf8]  text-[#9f9999] ${roboto.className}`}>Mail</div>
	<div className={`p-4 bg-[#e7edf8]  text-[#9f9999] ${roboto.className}`}>Phone</div>

	{
		i.callback.map((k, l) => (
			<>
				<div className='p-4  bg-[#f4f6f8] border-[1px] '>{k.name}</div>
				<div className='p-4 bg-[#f4f6f8] col-span-2 border-[1px] border'>{(k.message.length < 200) ? <>{k.message}</> :
				<>{k.message.slice(0, 200)}<span className='text-gray-500 border-2 cursor-pointer' onClick={(event) => {
					event.target.innerText = k.message
					event.target.style.color = 'black'
				}}> View more ...</span></>}</div>
				<div className='p-4  bg-[#f4f6f8] border-[1px]'>{k.quantity}</div>
				<div className='p-4 bg-[#f4f6f8] border-[1px] text-[14px] '>{k.date.split('T')[0]}</div>
				<div className='p-4  bg-[#f4f6f8] border-[1px] '>{k.mail}</div>
				<div className='p-4  bg-[#f4f6f8] border-[1px] '>{k.phno}</div>
			</>
		))
	}

	</> : <></>}
	
	</> : <></>
	
))}
</section>	
</main>

</>)
}
}

