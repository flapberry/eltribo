import Link from 'next/link';
import ImageC from '../utils/ImageC';

export default function Footer() {

	const values = [{
		name: 'SHOP',
		values: [{name: 'Biscuit tea cups', link: ''}, {name: 'Paper bags', link: ''}, {name: 'Napkins', link: ''}]
	}, {
		name: 'INFORMATION',
		values: [{name: 'Our Story', link: '/about-us'}, {name: 'Returns and Refunds', link: ''}, {name: 'Terms Of Service', link: ''}, {name: 'Privacy Policy', link: ''}, {name: 'About', link: '/about-us'}, {name: 'FAQ', link: '/about-us'}]
	}, {
		name: 'CUSTOMER SERVICE',
		values: [{name: 'Contact Us', link: '/contact-us'}, {name: 'My Account', link: ''}, {name: 'Happy Customers', link: '/about-us'}]
	}, {
		name: 'FOLLOW US',
		values: [{name: '+91 8148861438', link:'tel:+91 8148861438'}, {name: 'support@eltribo-ventures', link:'mailto:support@eltribo-ventures'}],
		icons: ['fb.svg', 'insta.svg', 'twitter.svg', 'whatsApp.svg', 'youTube.svg']
	}];

	return (
		<footer>
			<main className="evenPadding flex justify-evenly flex-wrap gap-y-3 max-lg:justify-center">
				{values.map((i, j) => (
					<section className='FCol gap-y-[1rem] w-[12.5rem]'>
						<h1 className='font-pMedium text-[#1E1E1E] text-[1.375rem]'>{i.name}</h1>
						<ul className='FCol gap-y-[0.6rem] font-pRegular text-[#79767D] text-[0.95rem]'>
							{i.values?.map((k, l) => (
								i.name !== 'FOLLOW US' ?
									<Link href={k.link} key={l}><li>{k.name}</li></Link>
									: <li>
										<a href={`${k.link}`}>{k.name}</a>
									</li>
							))}
							{i.name === 'FOLLOW US' ? <>
								<aside className='flex gap-2'>
									{i.icons.map((i, j) => (
										<ImageC src={`/social/${i}`} styles='h-[33px] w-[33px]' />
									))}
								</aside>
							</> : ''}
						</ul>
					</section>
				))}	
			</main>
			<hr className='bg-[#79747E]' />
			<section className="text-center mt-[2rem] mb-[1rem] text-[#79747E]">
				©2024 el tribo-ventures all rights reserved
			</section>
		</footer>
	)
}
