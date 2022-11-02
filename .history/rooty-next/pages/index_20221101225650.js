import Head from 'next/head'
import styled from 'styled-components'

const Box = styled.div`
  height: 40vh;
  width: 100vw;
  background-color: red
`

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Rooty</title>
      </Head>
      <Box>

      </Box>
     
    </div>
  )
}
