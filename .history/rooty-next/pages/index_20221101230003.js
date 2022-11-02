import Head from 'next/head'
import styled from 'styled-components'
import {FlexBox} from '../styles/globals'

const Box = styled.div`
  height: 40vh;
  width: 100vw;
  background-color: red
`

export default function Home() {
  return (
    <FlexBox dir="column">
      <Head>
        <title>Welcome to Rooty</title>
      </Head>
      <FlexBox width="100vw" height="30vh" bgColor="blue">

      </FlexBox>
      <FlexBox width="100vw" height="70vh" bgColor="red" borderRadius="">

      </FlexBox>
     
    </FlexBox>
  )
}
