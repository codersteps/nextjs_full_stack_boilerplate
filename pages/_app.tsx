import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import store, { StoreContext } from '@/store/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreContext.Provider value={store}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  )
}

export default MyApp
