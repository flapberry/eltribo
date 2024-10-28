'use client';

import { CostAscSet, CostDesSet } from '@/redux/slice/ProdsSlice';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useDispatch } from 'react-redux';

export default function Dropdown() {

	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const [name, setName] = useState('Featured');

	function Sort(type) {
		if (type === 'Asc') {
			dispatch(CostAscSet());
			setName('Price, Low to High');
		}
		else if (type === 'Des') {
			dispatch(CostDesSet());
			setName('Price, High to Low');
		}
		else if (type === 'Fea') {
			setName('Featured');
		}
		setShow(false);
	}
	
	return (
		<section className='relative z-10'>
			<aside className={`fixed top-0 right-0 left-0 -z-10 bottom-0 ${show ? 'bock' : 'hidden'}`} onClick={() => setShow(false)} />
			<div className='z-10 hover:cursor-pointer select-none'>
				<main className='flex rounded-full border-[2px] text-gray-600 border-gray-300 p-2 bg-white items-center w-[13rem] px-4 justify-between' onClick={() => setShow((l)=> !l)}>
					<div>{name}</div>
					<IoIosArrowDown className={`${show ? '-rotate-180' : ''}`} />
				</main>
				<ul className={`absolute shadow-lg w-full bg-white mt-2 text-gray-600 rounded-lg ${show ? 'block' : 'hidden'}`}>
					<li className='Filters rounded-t-lg' onClick={() => Sort('Fea')}>Featured</li>
					<li className='Filters' onClick={() => Sort('Asc')}>Price, Low to High</li>
					<li className='Filters rounded-b-lg' onClick={()=> Sort('Des')}>Price, High to Low</li>
				</ul>
			</div>
		</section>
	)
}
