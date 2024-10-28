'use client';

import ClientProvider from '@/components/utils/ClientProvider';
import { QueryClient, QueryClientProvider } from 'react-query';


export default function Layout({ children }) {
	
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<ClientProvider>
				<div>{children}</div>
			</ClientProvider>
		</QueryClientProvider>
	)
}


