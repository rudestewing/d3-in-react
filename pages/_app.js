import '../styles/font.scss'
import '../styles/globals.scss'
import Inspect from 'inspx'

function MyApp({ Component, pageProps }) {
  return (
    <Inspect>
      <Component {...pageProps} />
    </Inspect>
  )
}

export default MyApp
