'use client';

import { bkend } from '../../../../../axios/axiosInstance';
import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query';
import { Roboto } from 'next/font/google';
import { IoSearch } from 'react-icons/io5';
import { BiCalendar } from 'react-icons/bi';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';

const roboto = Roboto({ subsets: ['latin'], weight: ['700'] });

export default function Page() {

	const [contact, setContact] = useState([]);
	const [deleted, setDeleted] = useState(null);
	const [copy, setCopy] = useState();
	const [empty, setEmpty] = useState([]);
	const [d, setD] = useState();

	function formatDate(date) {
		const a = new Date(date);
		return (`${a.getDate() + '-' + (a.getMonth() + 1) + '-' + a.getFullYear()}`);
	}

	const { mutate, isLoading, isSuccess, error, data } = useMutation(async () => {
		const f = await bkend.get('/getcontact');
		const a = f.data.data.map((i, j) => (
			<tr className='bg-white h-[50px] my-5'>
				<td className={`w-[100px] p-4 ${roboto.className} rounded-l-xl`}>{i.name}</td>
				<td className='p-4'>
					{(i.message.length < 200) ? <>{i.message}</> :
						<>{i.message.slice(0, 200)}<span className='text-gray-500 cursor-pointer' onClick={(event) => {
							event.target.innerText = i.message.slice(200)
							event.target.style.color = 'black'
						}}> View more ...</span></>}
				</td>
				<td className='p-4'>
					<div className='w-[150px]'>
						{i.mail}
					</div>
				</td>
				<td className='w-[100px] p-4'>
					<div className='border-2 border-[#b3c3f7] bg-[#d6def9] p-2 text-[#a8bcfa] rounded-lg text-[17px] font-sans font-bold text-center'>
						{i.phno}
					</div>
				</td>
				<td className='w-[160px] p-4 text-center rounded-r-xl rounded-b-xl'>
					<div className='border-2 border-[#99fffd] p-2 text-[#61d2d3] rounded-lg text-[17px] font-sans font-bold bg-[#c4f1f1] rounded-b-xl'>
						{formatDate(i.date)}
					</div>
				</td>
			</tr>
		));
		const zx = new Date(f.data.data[0].date);
		const zxc = zx.getFullYear() + '-' + (zx.getMonth()+1) + '-' + zx.getDate();
		console.log('zx = ', zx, 'zxc = ', zxc);
		const temp = f.data.data.map((i, j) => {
			const t = new Date(i.date);
			return `${t.getFullYear()+'-'+(t.getMonth()+1)+'-'+t.getDate()}`
		}).reverse();
		setD(temp);
		// console.log('temp = ', temp);
		// console.log(f.data.data.map((i, j) => i.date), ' = date');
		setContact(a);
		setCopy(a.reverse());
	});

	const { mutate: delM, isLoading: delL, isSuccess: isSucc, error: delE, data: delData } = useMutation(async () => {
		const f = await bkend.delete(`/contact/${deleted}`);
		setDeleted(null);
		mutate();
	});

	useEffect(() => {
		mutate();
	}, [1]);

	function search(val) {
		// const index = d.findIndex((i, j) => i === '2024-08-23');
		// setContact(copy[index]);
		// console.log(copy[index]);
		d.map((i, j) => {
			if (val === i.slice(0, val.length)) {
				console.log(val, i.slice(0, val.length));
				// setContact(empty.reverse());
				setContact((empty) => [copy[j]]);
			}
		})
		console.log(empty.reverse());
	}

	function filterDate() {
		let from = document.getElementsByName('start')[0].value.split('-').reverse(),
			to = document.getElementsByName('end')[0].value.split('-').reverse();
		from = new Date(from.join('-')); to = new Date(to.join('-'));
		console.log(from, to, d);
		console.log('new date', new Date(d[0]));
		const ch = new Date(d[0]);
		console.log('checking = ', ch >= from, ch, from);
		let f = d.filter((i, j) => new Date(i.split('-').reverse().join('-')) >= from && new Date(i.split('-').reverse().join('-')) <= to);
		console.log('f = ', f);
		setContact([]);
		d.map((i, j) => {
			if (new Date(i) >= from && new Date(i) <= to) {
				setContact((contact) => [copy[j], ...contact]);
			}
		})
	}

if (contact) {
	
return (<>
<main className='p-2 w-full h-full'>
	<div className='flex justify-between'>
		<h1 className={`text-2xl ${roboto.className} mt-2`}>Contact Details</h1>

		<div className='w-[300px] bg-white text-[#2060af] flex flex-col items-center rounded-xl' id='date-range-picker' datepicker-format='dd-mm-yyyy' date-rangepicker=''>
			<div className='flex items-center w-[100%]'>
				<div className='h-[70px] w-[200px] p-[10px]'>
					<article className='h-full flex w-full items-center'>
						<li>
							<BiCalendar className='text-3xl' />
						</li>
						<li className='flex flex-col justify-center ml-1'>
							<label className='text-sm text-[#b8c4d2]'>From Date</label>		
						<input
				id='datepicker-range-start' datepicker datepicker-format='dd-mm-yyyy' name='start' type='text' className='border-none w-[100%] text-[15px] p-0 font-sans font-bold'
									placeholder='Select date start'   />		
						</li>
					</article>
				</div>
				<div className='h-[50px] w-[2px] bg-gray-400'>
				</div>		
				<div className='h-[70px] w-[200px] p-[10px]'>
					<article className='h-full flex w-full items-center'>
						<li>
							<BiCalendar  className='text-3xl'/>
						</li>
						<li className='flex flex-col w-full justify-center ml-1'>
							<label className='text-sm text-[#b8c4d2]'>To Date</label>		
							<input id='datepicker-range-end' datepicker-format='dd-mm-yyyy' name='end' type='text' className=' text-[15px] w-[100%] border-none p-0 font-sans font-bold' placeholder='Select date end' />		
						</li>
					</article>
				</div>
			</div>
			<div className='h-[1px] w-[80%] bg-gray-400'></div>	
			<div className='w-full bg-white p-2 rounded-b-xl'>
				<li className='flex justify-between items-center'>
					<div className='flex'>
						<TbAdjustmentsHorizontal className='text-2xl' />
						<h1 className='font-sans font-bold ml-2'>Filters</h1>
					</div>	
					<button onClick={()=> filterDate()} className='py-2 px-10 rounded-[50px] bg-[#014ba8] text-white'>Go</button>		
				</li>
			</div>		
		</div>
	</div>	
	<table className='w-full mt-[30px] text-left border-separate border-spacing-y-5'>
		<thead className='rounded-lg border-[1px] bg-[#f8fafc] border-[#bebbbb] rounded-lg'>
			<tr className='rounded-lg text-[#c1bbbb]'>
				<th className={`${roboto.className} p-4 rounded-l-xl`}>Name</th>
				<th className={`${roboto.className} p-4`}>Message</th>
				<th className={`${roboto.className}  w-[150px] p-4`}>Mail</th>
				<th className={`${roboto.className} p-4`}>Phone</th>
				<th className={`${roboto.className} p-4 rounded-r-xl`}>Date</th>
			</tr>	
		</thead>	
		<tbody className='my-2'>
			{contact}
		</tbody>
	</table>
</main>
</>)
}
}
