import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ThemeProvider, PartialTheme } from "@fluentui/react";

const bodyTheme: PartialTheme = {
  semanticColors: {
    bodyBackground: 'gray',
  },
};

function MyApp({ Component, pageProps }: AppProps) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <Header />
      <ThemeProvider style={{minHeight: "82vh"}} theme={bodyTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <Footer />
    </>
  )
}

export default MyApp;