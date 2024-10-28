'use client';

import { useEffect, useRef, useState } from 'react';
import ImageC from '../utils/ImageC';
import { produce } from 'immer';

export default function FAQ() {

	const [values, setValues] = useState([{
		show: false,
		name: 'What materials are the Biscuit Tea Cups made from?',
		content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo culpa saepe sit atque vel commodi aut, dolore, similique mollitia eos, fugit earum non. Delectus animi eaque, reprehenderit eum veritatis dolorum dolores quasi obcaecati placeat ad cupiditate impedit saepe a exercitationem, qui asperiores quas dolore quis veniam unde? Fugiat, iure soluta.'
	}, {
		show: false,
		name: 'Can I buy a matching set of cups?',
		content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo culpa saepe sit atque vel commodi aut, dolore, similique mollitia eos, fugit earum non. Delectus animi eaque, reprehenderit eum veritatis dolorum dolores quasi obcaecati placeat ad cupiditate impedit saepe a exercitationem, qui asperiores quas dolore quis veniam unde? Fugiat, iure soluta.'
	}, {
		show: false,
		name: 'What fabric is used for the napkins?',
		content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo culpa saepe sit atque vel commodi aut, dolore, similique mollitia eos, fugit earum non. Delectus animi eaque, reprehenderit eum veritatis dolorum dolores quasi obcaecati placeat ad cupiditate impedit saepe a exercitationem, qui asperiores quas dolore quis veniam unde? Fugiat, iure soluta.'
	}, {
		show: false,
		name: 'What materials are the Biscuit Tea Cups made from?',
		content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo culpa saepe sit atque vel commodi aut, dolore, similique mollitia eos, fugit earum non. Delectus animi eaque, reprehenderit eum veritatis dolorum dolores quasi obcaecati placeat ad cupiditate impedit saepe a exercitationem, qui asperiores quas dolore quis veniam unde? Fugiat, iure soluta.'
	}, {
		show: false,
		name: 'Are the paper bags available in different sizes?',
		content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo culpa saepe sit atque vel commodi aut, dolore, similique mollitia eos, fugit earum non. Delectus animi eaque, reprehenderit eum veritatis dolorum dolores quasi obcaecati placeat ad cupiditate impedit saepe a exercitationem, qui asperiores quas dolore quis veniam unde? Fugiat, iure soluta.'
	}]);

	function toggle(j) {
		setValues((last) =>
			last.map((i, l) => ({
				...i,
				show: l === j ? !i.show : false
		})));
	}

	return (
		<main className="FColC">
			<h1 className="font-pMedium text-[2rem]">Eltribo FAQ</h1>
			{values.map((i, j) => (
				<div className='w-[80%]' key={j}>
					<header className={`flex items-center justify-between h-[7rem] ${(values.length-1 > j && !i.show) ? 'border-b-2' : ''}`}>
						<h1 className="text-[1.5rem]">{i.name}</h1>
						<span onClick={()=> toggle(j)}>
							<ImageC src={'lines/addIcon.svg'} styles = {'h-[35px] w-[35px]'} />
						</span>
					</header>
					<main className={`${i.show ? 'block' : 'hidden'} w-[80%]`}>
						<p>{i.content}</p>
					</main>
				</div>
			))}
		</main>
	)
}
