import ImageC from '../utils/ImageC';

export default function ContactSection() {

	let data = [{
		img: 'contact/address.svg',
		heading: 'Address',
		body: <div>1B first floor, 50ft new main road thirvalluvar nagar, ramnathapuram coimbatore- 64105. tamil nadu, india</div>
	}, {
		img: 'contact/phone.svg',
		heading: 'Phone',
		body: <div>+91 9698950229 <br /> +91 8148861438</div>,
	}, {
		img: 'contact/email.svg',
		heading: 'Email',
		body: <div>Eltriboventures@gmail.com <br /> www.eltribo.com</div>
	}];

	return (
		<main className="bg-[#F1FFF9] evenPadding flex justify-evenly text-[#605D64]">
			{data.map((i, j) => (
				<section className={`FCol items-center w-[20rem] gap-5 text-center ${ j===1 ? 'border-x-2' : ''}`}>
					<ImageC src={`${i.img}`} styles='rounded-xl h-[5rem] w-[5rem]' />
					<h1 className='text-[2rem] text-black'>{i.heading}</h1>
					{i.body}
				</section>
			))}
		</main>
	)
}
