'use client';

import { bkend } from '../../../../../axios/axiosInstance';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useMutation, useQueryClient } from 'react-query';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['500'] });

export default function Add() {

	const [discount, setDiscount] = useState(false);
	const [disC, setdisC] = useState(0);
	const [category, setCategory] = useState([]);

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

	const { mutate, isLoading, isSuccess, error, data } = useMutation(async () => {
		const f = await bkend.get('/getproduct');
		console.log(f);
	});

	const { mutate: addprod, isLoading: addprodLoading, isSuccess: addprodSuccess, error: addProdError, data: addProdData } = useMutation(async (form) => {
		const f = await bkend.post('/addproduct', form, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
		console.log(f);
	});

	const { mutate: getCat, isLoading: getCatLoading, isSuccess: getCatSuccess, error: getCatError, data: getCatData } = useMutation(async (form) => {
		const f = await bkend.get('/category/get');
		setCategory(f.data.data);
		console.log(f);
	});

	useEffect(() => {
		getCat();
	}, []);

	const { register, handleSubmit, getValues, setError, formState: { errors, isValid }, trigger } = useForm({
		mode: 'onChange'
	});

	let CarousalRef = useRef(null);

	function setCarousal(j) {
		CarousalRef.current.goToSlide(j);
	}
	
	const [images, setImages] = useState([]);
	const [topImg, setTopImg] = useState([images?.[0]]);
	const [imgE1, setImgE1] = useState();
	const [imgE2, setImgE2] = useState();
	const [catE1, setcatE1] = useState();
	const [fileArr1, setfileArr1] = useState();
	const [fileArr2, setfileArr2] = useState();
	const [categorySelect, setCategorySelect] = useState('');

	useEffect(() => {
		if (catE1 === 'Must Select Category') {
			setcatE1('');
		}
	}, [categorySelect])
	

	async function Submit(form) {
		console.log(form);
		if (!categorySelect) setcatE1('Must Select Category')
		else {
			if (images.length === 0) setImgE1('Product Images cannot be Empty');
			if (!topImg?.[0]) setImgE2('Must Have Top Image');
			else {
				const formData = new FormData();
				console.log('file arr 2 = ', fileArr2[0]);
				formData.append('images', fileArr2[0]);
				fileArr1.forEach((file, j) => {
					formData.append('images', file);
				});
				console.log(fileArr2);
				if (discount) {
					formData.append('product', JSON.stringify({
						name: form.name,
						description: form.description,
						size: form.size,
						cost: form.cost,
						category: categorySelect,
						discount: {
							percentage: form.percentage,
							cost: disC
						},
					}))
				}
				else {
					formData.append('product', JSON.stringify({
						name: form.name,
						description: form.description,
						size: form.size,
						category: categorySelect,
						cost: form.cost,
					}));
				}
				formData.forEach((val, key) => {
					console.log(key, val);
				});
				console.log(formData.files);
				addprod(formData);
			}
		}
	}

	useEffect(() => {
		if (topImg[0]) return;	
		setTopImg([images?.[0]]);
	}, [images]);

	const handleImageUpload = (e) => {
		setImgE1(''); setImgE2('');
		const files = Array.from(e.target.files);
		setfileArr1(files); setfileArr2(files);
		console.log(fileArr2);
		const newImages = files.map(file => URL.createObjectURL(file));
		setImages([...images, ...newImages]);
		console.log('message, inside');
	};

	const handleSingle = (e) => {
		setImgE2('');
		const files = Array.from(e.target.files);
		setfileArr2(files);
		const newImages = files.map(file => URL.createObjectURL(file));
		setTopImg(newImages);
	};

	function calcDiscount(per) {
		const c = getValues('cost');
		const d = c-((c / 100) * per);
		setdisC(d);
	}

	if (category) {
return (
<>
<section className='w-full p-3 list-none'>
<form onSubmit={handleSubmit(Submit)}>
	<main className='flex outline-2 outline-red flex-col w-full px-4 py-3 bg-white rounded-lg mb-5'>
		<div>
			<h1 className={`${roboto.className} text-xl`}>Select Category</h1>	
			<li className='mt-3 flex gap-4 mb-3'>
				{category.map((i, j) => (
					<section className={`max-h-[15rem] rounded-xl border-[1px] border-2 w-[20rem] bg-[#f8fafc] flex flex-col items-center p-2 gap-3 ${i._id === categorySelect ? 'border-[#2b71fe]' : 'border-[rgb(175,173,173)]'}`} key={j} onClick={() => setCategorySelect(i._id)}>
						<p className='text-2xl'>{i.name}</p>
						<p>{i.description.slice(0, 30)}</p>
					</section>					
				))}
			</li>
			{catE1 ? catE1 : ''}			
		</div>
	</main>			
	<main className='flex outline-2 outline-red flex-col w-full px-4 py-3 bg-white rounded-lg'>
			<div>
				<h1 className={`${roboto.className} text-xl`}>General Information</h1>	
				<li className='mt-3'>
					<label className='text-[rgb(136,135,135)]'>Product Name</label> <br />
					<input type='text' className='w-full rounded-lg bg-[#f8fafc] border-[1px] border-[rgb(175,173,173)] mt-1 py-2 pl-3' {...register('name', {required: 'Name cannot be empty'})}/>
					<p>{errors?.name?.message}</p>
				</li>
				<li className='mt-3'>
					<label className='text-[rgb(136,135,135)]'>Description</label> <br />
					<textarea type='text' className='w-full rounded-lg bg-[#f8fafc] border-[1px] border-[rgb(175,173,173)] mt-1 py-2 pl-3 resize-none h-[150px]'  {...register('description' ,{required: 'Description cannot be empty'})}/>
					<p>{errors?.description?.message}</p>
				</li>		
			</div>
	</main>
	<main className='flex flex-col w-full px-4 py-3 bg-white rounded-lg mt-4'>
	<div>
		<aside className='flex justify-between'>
			<h1 className={`${roboto.className} text-xl`}>Pricing</h1>	
			<li>
	<label className="inline-flex items-center cursor-pointer">
	<h1 className={`${roboto.className} text-xl mr-4`}>Discount</h1>	
	<input type="checkbox" className="sr-only peer" onChange={()=> setDiscount(!discount)} />
	<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
	
</label>

			</li>
		</aside>				
		<li className='mt-3'>
			<label className='text-[rgb(136,135,135)]'>Base Price in Rps</label> <br />
			<input type='text' className='w-full rounded-lg bg-[#f8fafc] border-[1px] border-[rgb(175,173,173)] mt-1 py-2 pl-3' {...register('cost', {required: 'Cost cannot be Empty'})} />
			<p>{errors?.cost?.message}</p>
		</li>
		<li className={`mt-3 ${discount ? 'block' : 'hidden'}`}>
			<aside className='flex justify-between'>
				<div className='w-[45%]'>
					<label className='text-[rgb(136,135,135)]'>Discounted Percentage [ % ]</label> <br />
					<input type='text' className='w-full rounded-lg bg-[#f8fafc] border-[1px] border-[rgb(175,173,173)] mt-1 py-2 pl-3' {...register('percentage')} onChange={(event)=> calcDiscount(event.target.value)} />
				</div>
				<div className='w-[45%]'>
					<label className='text-[rgb(136,135,135)]'>Discounted Price</label> <br />
					<input type='text'className='w-full rounded-lg bg-[#f8fafc] border-[1px] border-[rgb(175,173,173)] mt-1 py-2 pl-3' value={disC} readOnly />
				</div>
			</aside>
		</li>		
	</div>
	</main>
	<main className='flex flex-col w-full px-4 py-3 bg-white rounded-lg mt-3'>
		<div>
			<h1 className={`${roboto.className} text-xl`}>Size</h1>	
			<li className='mt-3'>
				<label className='text-[rgb(136,135,135)]'>In Millilitre</label> <br />
				<input type='text' className='w-full rounded-lg bg-[#f8fafc] border-[1px] border-[rgb(175,173,173)] mt-1 py-2 pl-3' {...register('size', {required: 'Size cannot be Empty'})} />
				<p>{errors?.size?.message}</p>
			</li>
		</div>
	</main>			
	<main className='flex w-full px-4 py-3 bg-white rounded-lg mt-3 justify-between'>
		<div className='w-[70%]'>
			<h1 className={`${roboto.className} text-xl`}>Product Media</h1>	
			<li className='mt-3 w-[100%]'>
				<label className='text-[rgb(136,135,135)]'>Product Images</label> <br />
				<div className='h-[400px] w-[70%] bg-[#f8fafc] mt-2 border-dashed border-[1px] border-[rgb(175,173,173)] p-2 w-full'>
					<header className='h-[80%] flex justify-evenly flex-wrap content-start overflow-auto'>
						{images.map((i, j) => (
							<div className='h-[100px] w-[100px] relative mb-5' key={j}>
								<Image key={j} src={i} alt={`Uploaded ${j}`} fill className='rounded-lg' />
							</div>
						))}
					</header>
					<aside className='flex justify-center mt-5'>
					<label className='cursor-pointer bg-[#e3e8fb] border-2 border-[#c5c9fa] text-[#777ef9] px-3 py-2 rounded-lg'>
								Add more Images
						<input type="file" multiple className='hidden' onChange={handleImageUpload}  />
						</label>
					</aside>
				</div>
				<p>{imgE1}</p>
			</li>
		</div>
		<div className='w-[20%]'>
			<li className='mt-3 w-[100%]'>
				<div className='h-[30px]'></div>
				<label className='text-[rgb(136,135,135)]'>Top Image</label> <br />
				<div className='h-[400px] w-[70%] bg-[#f8fafc] mt-2 border-dashed border-[1px] border-[rgb(175,173,173)] p-2 w-full'>
					<header className='h-[80%] flex justify-center items-center pt-2'>
						{topImg?.[0] &&
							<div className='h-full w-full relative mb-5'>
								<Image src={topImg[0]} alt={`top img`} fill className='rounded-lg' />
							</div> 
							}
					</header>
					<aside className='flex justify-center'>
					<label className='cursor-pointer bg-[#e3e8fb] border-2 border-[#c5c9fa] text-[#777ef9] px-3 py-2 rounded-lg mt-5'>
								Add Top Image
							<input type="file" className='hidden' onChange={handleSingle} />
						</label>
					</aside>
				</div>
			</li>
		<p>{imgE2}</p>			
		</div>
	</main>			
	<div className='flex justify-center my-5'>
		<input type='submit' value='Add Product' className={`px-20 py-4 rounded-lg bg-[#ffd600] ${roboto.className} m-auto`} />
	</div>			
</form>
</section>	
</>
)
}
}
