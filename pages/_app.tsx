import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ThemeProvider, PartialTheme } from "@fluentui/react";
import Layout from '../components/Layout';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

const bodyTheme: PartialTheme = {
  semanticColors: {
    bodyBackground: 'gray',
  },
};

type NextpageWithLayout = NextPage & {
  getLayout?:(page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextpageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  /*  if (Component.getLayout) {
     return Component.getLayout(<Component {...pageProps} />)
   } */

  const { layoutProps, ...modifiedPageProps } = pageProps;


  const renderLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <ThemeProvider style={{ minHeight: "82vh" }} theme={bodyTheme}>
        {/* <Component {...pageProps} /> */}
        {renderLayout(<Component {...modifiedPageProps} />)}
      </ThemeProvider>
    </>
  )
} 

export default MyApp;