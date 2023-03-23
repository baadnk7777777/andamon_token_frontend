import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// Pass client to React Context Provider

import {WagmiContext} from "./WagimiContext";


export default function App({ Component, pageProps }: AppProps) {
  return <>
  
  <WagmiContext>
  <Navbar/>
    <Component {...pageProps}></Component>
    <Footer/>
  </WagmiContext>
    </>
    
}
