import { useSelector } from 'react-redux';
import ProductItem from '../products/ProductItem';

export default function Alsolike() {

	const { product } = useSelector((store) => store.ProdsS);
	console.log("🚀 ~ Alsolike ~ product:", product)

	return (
		<main className="evenPadding">
			<h1 className="text-center font-pMedium text-[1.7rem] mb-[2rem]">You May Also Like</h1>
			<section className="flex gap-[1rem] justify-center flex-wrap gap-y-[2rem]">
				{product.slice(0, 3).map((i, j) => (
					<ProductItem key={j} data={i}  />
				))}
			</section>
		</main>
	)
}
