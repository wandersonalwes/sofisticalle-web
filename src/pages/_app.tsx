import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import GlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ChakraProvider>
  )
}

export default MyApp
