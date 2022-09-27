import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

export type CustomNextPage = NextPage & { getLayout?: (page: React.ReactNode) => JSX.Element };

export type AppPropsWithLayout = AppProps & {
  Component: CustomNextPage;
};
