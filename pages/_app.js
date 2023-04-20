import MainTemaplate from '@/components/templates/MainTemaplate'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <MainTemaplate>
      <Component {...pageProps} />
    </MainTemaplate>
  )
}
