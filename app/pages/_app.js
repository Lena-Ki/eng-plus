import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`

      `}</style>  
    </>
  )
}

export default MyApp
