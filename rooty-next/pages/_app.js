import '../styles/globals.css'
import NavBar from '../components/navbar/navbar'
import 'semantic-ui-css/semantic.min.css'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useState, useEffect } from 'react'
function MyApp({ Component, pageProps }) {

  const [routePath, setRoutePath] = useState("")
  const [routesWeDoNotWant, setRoutesWeDoNotWant] = useState([])
  const [shouldTheRouteLoad, setShouldTheRouteLoad] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const thisPath = router.asPath
    setRoutePath(thisPath)
    routesWeDoNotWant.map(m => {
      if (m == thisPath) {
        setShouldTheRouteLoad(false)
        return
      } else {
        return
      }
    })
  }, []) 
  



  // console.log(router)
  return (
    <>
    <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/> 
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
      </Head>
    {/* <AnimatePresence exitBeforeEnter> */}
      {shouldTheRouteLoad? <NavBar route={router.route} />: <></>}     
      <Component {...pageProps} />
    {/* </AnimatePresence> */}
    </>
  )
}

export default MyApp
