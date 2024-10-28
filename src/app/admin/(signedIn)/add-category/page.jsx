'use client';

import { Roboto } from 'next/font/google';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { bkend } from '../../../../../axios/axiosInstance';

const roboto = Roboto({ subsets: ['latin'], weight: ['500'] });

export default function Category() {

	const { register, handleSubmit, getValues, setError, formState: { errors, isValid }, trigger } = useForm();

	const { mutate, isLoading, isSuccess, error, data } = useMutation(async (form) => {
		const f = await bkend.post('/category/add', form);
		console.log(f);
	});

	function Submit(form) {
		console.log('👩‍👧‍👦', form);
		mutate(form);
	}

	return (
<section className='w-full p-3 list-none'>
	<form onSubmit={handleSubmit(Submit)}>
		<main className='flex outline-2 outline-red flex-col w-full px-4 py-3 bg-white rounded-lg'>
				<div>
					<h1 className={`${roboto.className} text-xl`}>General Information</h1>	
					<li className='mt-3'>
						<label className='text-[rgb(136,135,135)]'>Category Name</label> <br />
						<input type='text' className='w-full rounded-lg bg-[#f8fafc] border-[1px] border-[rgb(175,173,173)] mt-1 py-2 pl-3' {...register('name', {required: 'Name cannot be Empty'})} />
						<p>{errors?.name?.message}</p>
					</li>
					<li className='mt-3'>
						<label className='text-[rgb(136,135,135)]'>Description</label> <br />
						<textarea type='text' className='w-full rounded-lg bg-[#f8fafc] border-[1px] border-[rgb(175,173,173)] mt-1 py-2 pl-3 resize-none h-[150px]' {...register('description', {required: 'Message Cannot be Empty'})} />
						<p>{errors?.description?.message}</p>
					</li>		
				</div>
				<div className='flex justify-center my-5'>
					<input type='submit' value='Add Category' className={`px-20 py-4 rounded-lg bg-[#ffd600] ${roboto.className} m-auto`} />
				</div>				
		</main>
	</form>
</section>	
	)
}

// {0 && ...register('name', {required: 'Name cannot be empty'})}
// {...register('description' ,{required: 'Description cannot be empty'})}