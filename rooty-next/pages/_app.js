import '../styles/globals.css'
import NavBar from '../components/navbar/navbar'
import 'semantic-ui-css/semantic.min.css'
import { useRouter } from 'next/router'
import {AnimatePresence} from "framer-motion"


function MyApp({ Component, pageProps }) {

  const router = useRouter()

  console.log(router)
  return (
    <>
    {/* <AnimatePresence exitBeforeEnter> */}
      <NavBar 
      route={router.route}
      ></NavBar>
      <Component {...pageProps} />
    {/* </AnimatePresence> */}
    </>
  )
}

export default MyApp
