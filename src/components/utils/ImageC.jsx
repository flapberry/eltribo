import Image from 'next/image';

export default function ImageC(props) {

	return (
		<div className={`relative ${props.styles}`} onClick={props.onclick}>
			<Image priorit='true' fill src={`${props.src.startsWith('data:', 0) ? `${props.src}` : `/images/${props.src}`}`} alt='img' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className='object-cover' />
		</div>
	)
}
