'use client';

import { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function DropDownC({validate, options: {main, heading, body}, setValue, items, headingText, setHeadingText, disp, setDisp }) {

	useEffect(() => {
		if (items) {
			Object.entries(items.current.children).map((i) => i.slice(1, 2).map((k) => {
				k.onclick = () => {
					setDisp(false);
					console.log('👸', 'clicked');
						if (validate === 'dontCheck') {
							console.log('👨‍👧‍👧', 'in if');
						}
						else {
							console.log('👨‍👦', 'in else');
							setValue('size', k.innerText);
							setHeadingText(k.innerText);
						}
					}
				})
			);
		}
	}, []);

	if (heading && body) {
		return (
			<main className={`${main.tw} select-none`}>
				<div className={`${heading.tw}`} onClick={() => setDisp(true)}>
					{headingText ? headingText : heading.text}
					<IoIosArrowDown className={`${disp ? '-rotate-180' : ''}`} />
				</div>
				<aside className={`fixed FullCover z-20 ${disp ? 'block' : 'hidden'}`} onClick={() =>setDisp(false)}></aside>
				<ul className={`${disp ? 'block' : 'hidden'} z-30 ${body.tw}`} ref={items}>
					{Object.entries(body.items).map((i, j) => (
						<li key={j} onClick={() => {
							i[1]?.data ? i[1].click(i[1].data) : ''
							setDisp(false);
						}} className={body.itemstw}>{i[1].text}</li>
					))}
				</ul>
			</main>
		)
	}
}
