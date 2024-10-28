import Reviews from '@/components/aboutUs/Reviews';
import Section1 from '@/components/aboutUs/Section1';
import Support from '@/components/common/Support';

export default function Page() {
	return (
		<main className="">
			<Section1 heading = {'Story of El tribo'} main = {`Anaikatty Rural Community College is an initiative to impart skill education to Tribal and Rural people from the beauty hills of Anaikatty in the outskirts of the Coimbatore City. The villagers of Anaikatty have been given skill training and are producing products that are sold locally and all over India. n the heart of the Anaikatty hills, nestled near Coimbatore, lies a rural community rich with culture, tradition, and untapped potential. Though the beauty of the rolling hills and the serenity of their landscape often draw visitors, the people of this community face daily struggles. For generations, the villagers have depended on subsistence agriculture, small-scale livestock farming, and forest resources. However, with changing times and economic pressures, they began yearning for something more—an opportunity to thrive, not just survive.`} />
			<Support />
			<Section1 heading={'Who we are?'} main={`It was in this setting that a local NGO, Dreamz, in collaboration with a group of social entrepreneurs from around the world, launched a groundbreaking entrepreneurial training initiative aimed at empowering the rural youth and women of Anaikatty. The goal was to build local capacities, ignite self-sufficiency, and foster sustainable growth.`} rev={true} />
			<Reviews /> 
		</main>
	)
}
