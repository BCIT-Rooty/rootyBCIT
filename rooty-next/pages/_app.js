import "../styles/globals.css";
import NavBar from "../components/navbar/navbar";
import "semantic-ui-css/semantic.min.css";
import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";


  
  
  function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    const router = useRouter();
    
    const [routesWeDoNotWant, setRoutesWeDoNotWant] = useState(["/chat/*"]);
    const [shouldTheRouteLoad, setShouldTheRouteLoad] = useState(true);

  // console.log(router)
  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
        </Head>
        {/* <AnimatePresence exitBeforeEnter> */}
        {routesWeDoNotWant.map((m) => {
        const lengthOfPath = m.length;
        if (m[lengthOfPath - 1] == "*") {
          if (router.asPath.startsWith(m.slice(0, -1))) {
            return <></>;
          } else {
            return <NavBar route={router.route} />;
          }
        } else if (m == router.asPath) {
          return <></>;
        } else {
          return <NavBar route={router.route} />;
        }
      })}
        <Component {...pageProps} />
        {/* </AnimatePresence> */}
      </SessionProvider>
    </>
  );
}

export default MyApp;
















// If I wanted to make changes later

// useEffect(() => {
//   const thisPath = router.asPath
//   routesWeDoNotWant.map(m => {
//     const lengthOfPath = m.length
//     if (m[lengthOfPath - 1] == "*") {
//       // console.log(thisPath.startsWith(m.slice(0, -1)))
//       if (thisPath.startsWith(m.slice(0, -1))) {
//        setShouldTheRouteLoad(false)
//        return
//       } else {
//         setShouldTheRouteLoad(true)
//         return
//       }
//     } else if (m == thisPath) {
//       setShouldTheRouteLoad(false)
//       return
//     } else {
//       setShouldTheRouteLoad(true)
//       return
//     }
//   })
// }, [router.asPath])
