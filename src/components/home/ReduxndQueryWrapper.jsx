'use client';

import ClientProvider from '@/components/utils/ClientProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function ReduxndQueryWrapper({ children }) {
	
	const queryClient = new QueryClient();

	return (
		<ClientProvider>
			<QueryClientProvider client={queryClient}>
					<div>{children}</div>
			</QueryClientProvider>
		</ClientProvider>
	)
}


