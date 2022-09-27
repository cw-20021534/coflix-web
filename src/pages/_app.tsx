import '../../styles/globals.scss';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { useState } from 'react';
import type { AppPropsWithLayout } from '~/types';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient());

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>{getLayout(<Component {...pageProps} />)}</Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
