import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import 'react-tailwind-table/dist/index.css';
import {ToastProvider} from 'react-toast-notifications'
import {Provider as StoreProvider} from 'react-redux'
import { store } from '../store';
function MyApp({ Component, pageProps }: AppProps) {
  return (
   <StoreProvider store={store}>
     <ToastProvider>
       <Component {...pageProps} />
    </ToastProvider>
   </StoreProvider>
  )
}

export default MyApp
