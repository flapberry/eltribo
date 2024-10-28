import ImageC from '../utils/ImageC';

export default function About() {
	return (
		<main className="bg-[#F1FFF9] FColC gap-5 py-[2rem]">
			<h1 className="font-pMedium text-[2.2rem] text-[#1E1E1E]">About Eltribo</h1>
			<ImageC src='lines/lines.svg' styles = {'h-[1.5rem] w-[25rem]'} />
			<p className="text-[#48464C] text-center text-[1.1rem] font-pRegular w-[45rem]">El Tribo Ventures showcases handcrafted products made by the tribal and rural communities of Anaikatty. With a nature-inspired design, the logo emphasizes the brand's connection to sustainability, culture, and community-driven craftsmanship.</p>
		</main>
	)
}
