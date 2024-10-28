'use client';

import React, { useEffect, useState } from 'react';
import { Roboto } from 'next/font/google';
import Link from 'next/link';
import { useMutation } from 'react-query';
import { bkend } from '../../../../../axios/axiosInstance';
import Image from 'next/image';

const roboto = Roboto({ subsets: ['latin'], weight: ['500'] });

export default function Page() {

	const [dashboard, setDashboard] = useState();

	const { mutate, isLoading, isSuccess, error, data } = useMutation(async () => {
		const f = await bkend.get('/dashboard');
		setDashboard(f.data.data);
	});

	useEffect(() => {
		mutate();
	}, [])

	useEffect(() => {
		
		console.log(dashboard);
		
	}, [dashboard]);
	
	
return (<>
<main className='p-3 px-5 bg-[#f0f2f5]'>
	<h1 className={`${roboto.className} text-3xl`}>Dashboard</h1>
	<section className='flex flex-col mt-20'>
		<header className='flex justify-evenly flex-wrap gap-y-5'>
			<Link href='/admin/products'>
				<li className='h-[150px] w-[300px] bg-white rounded-xl flex items-center p-3'>
					<aside className='relative h-full w-[30%] flex items-center'>
						<div className='absolute h-[80px] w-[80px]'>
							<Image fill alt='img' src='/images/admin/logo1.png' />
						</div>
					</aside>
					<div className='ml-5'>
						<h1 className='text-4xl mb-3'>{dashboard?.product}</h1>
						<h2 className='text-[#969090] text-lg'>Total Products</h2>
					</div>	
				</li>
			</Link>	
			<Link href='/admin/product-enquiry'>
				<li className='h-[150px] w-[300px] bg-white rounded-xl flex items-center p-3'>
					<aside className='relative h-full w-[30%] flex items-center'>
						<div className='absolute h-[100px] w-[100px]'>
							<Image fill alt='img' src='/images/admin/prodEnq.webp' />
						</div>
					</aside>
					<div className='ml-5'>
						<h1 className='text-4xl mb-3'>{dashboard?.enquiry}</h1>
						<h2 className='text-[#969090] text-lg'>Product Enquiry</h2>
					</div>	
				</li>
			</Link>	
			<Link href='/admin/contact-us'>
				<li className='h-[150px] w-[300px] bg-white rounded-xl flex items-center p-3'>
					<aside className='relative h-full w-[30%] flex items-center'>
						<div className='absolute h-[80px] w-[80px]'>
							<Image fill alt='img' src='/images/admin/logoRem.png' />
						</div>
					</aside>
					<div className='ml-5'>
						<h1 className='text-4xl mb-3'>{dashboard?.contact}</h1>
						<h2 className='text-[#969090] text-lg'>Contact Us</h2>
					</div>	
				</li>
			</Link>	
			<Link href='/admin/product-enquiry'>
				<li className='h-[150px] w-[300px] bg-white rounded-xl flex items-center p-3'>
					<aside className='relative h-full w-[30%] flex items-center'>
						<div className='absolute h-[80px] w-[80px]'>
							<Image fill alt='img' src='/images/admin/mailIcon.png' />
						</div>
					</aside>
					<div className='ml-5'>
						<h1 className='text-4xl mb-3'>{dashboard?.admin.enquiryMail}</h1>
						<h2 className='text-[#969090] text-lg'>Product Mail Info</h2>
					</div>	
				</li>
			</Link>	
			<Link href='/admin/contact-us'>
				<li className='h-[150px] w-[300px] bg-white rounded-xl flex items-center p-3'>
					<aside className='relative h-full w-[30%] flex items-center'>
						<div className='absolute h-[80px] w-[80px]'>
							<Image fill alt='img' src='/images/admin/contMail.png' />
						</div>
					</aside>
					<div className='ml-5'>
						<h1 className='text-4xl mb-3'>{dashboard?.admin.contatusMail}</h1>
						<h2 className='text-[#969090] text-lg'>Contact Mail Info</h2>
					</div>	
				</li>
			</Link>		
		</header>
			
	</section>
</main>
</>
)
}
