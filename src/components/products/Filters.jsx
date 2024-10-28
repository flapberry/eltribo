
import Dropdown from '../common/dropdown';
import ImageC from '../utils/ImageC';

export default function Filters(props) {
	return (
		<main className='flex items-center mb-[2rem] flex-wrap gap-y-[1rem] relative justify-center'>
			<section className='FCol text-center gap-[0.5rem] font-pMedium text-[2.1rem] w-[25rem] h-[5rem]'>
				<h1>{props.text}</h1>
				<ImageC src='lines/lines.svg' styles='h-[2rem] w-[25rem]' />
			</section>
			<section className='lg:absolute right-0'>
				<Dropdown />
			</section>
		</main>
	)
}
