import Image from 'next/image';
import GreenButton from '../common/greenButton';
import ImageC from '../utils/ImageC';

export default function HomeForm() {
	return (
		<section className='evenPadding'>
			<main className="rounded-xl flex-1 bg-[#508D4E]">
				<div className="rounded-xl flex evenPadding h-full">
					<li className='flex-1'>
						<ImageC src={'social/ContactImg.svg'} styles={'h-full w-full'} />
					</li>
					<li className='flex-1 bg-white'>
						<form className='FCol gap-3 p-[2rem]'>
							<h1 className='text-[2.1rem] text-center font-pMedium'>Get in touch with us</h1>
							<p className='text-[1rem] text-center text-[#79767D]'>Complete the form, and our team will reach out to you soon</p>
							<input type="text" className='border-b-2 py-3' placeholder='Name' />
							<input type="email" placeholder='Mail' className='border-b-2 py-2'/>
							<input type="number" placeholder='Phone' className='border-b-2 py-2'/>
							<input type="text" placeholder='City & Country' className='border-b-2 py-2'/>
							<input type="text" placeholder='Company' className='border-b-2 py-2'/>
							<input type="text" placeholder='Position' className='border-b-2 py-2'/>
							<input type="text" placeholder='Business Activity' className='border-b-2 py-2'/>
							<input type="text" placeholder='Message' className='border-b-2 py-2' />
							<div className="flex gap-3 py-2">
								<input type="checkbox" />
								<label>I accept the terms and service</label>
							</div>
							<div className="flex justify-center">
								<GreenButton fontL={true} text={'Submit Your Request'} />
							</div>
						</form>
					</li>
				</div>
			</main>
		</section>
	)
}
