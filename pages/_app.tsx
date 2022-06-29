import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import 'react-tailwind-table/dist/index.css';
import {ToastProvider} from 'react-toast-notifications'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
       <Component {...pageProps} />
    </ToastProvider>
  )
}

export default MyApp
