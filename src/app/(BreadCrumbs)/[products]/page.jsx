import ClientProvider from '@/components/utils/ClientProvider';
import axios from 'axios';
import ProductMap from './_ProductMap';
import { bkend } from '../../../../axios/axiosInstance.js';

export default async function ProductPage() {

	const response = await bkend.get('/getproduct'); 
	console.log("🚀 ~ ProductPage ~ response:", response.data);

	const prod = [{
		name: 'Buscuit TCups',
		cost: 50,
		suffix: '(60 ml)'
	}, {
		name: 'Buscuit TCups',
		cost: 60,
	}, {
		name: 'Buscuit TCups',
		cost: 20,
		suffix: '(60 ml)'
	}];

	if (response) {
		return (
			<main className='bg-baseBg evenPadding'>
				<ClientProvider>
					<ProductMap prod={response.data} />
				</ClientProvider>
			</main>
		)
	}
}

