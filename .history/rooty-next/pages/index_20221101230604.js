import Head from 'next/head'
import styled from 'styled-components'
import {FlexBox} from '../styles/globals'
import Text from '../components/text'
import Input from '../components/inputs'

const Box = styled.div`
  height: 40vh;
  width: 100vw;
  background-color: red
`

export default function Home() {
  return (
    <FlexBox dir="column" bgColor="#FFFDFA">
      <Head>
        <title>Welcome to Rooty</title>
      </Head>
      <FlexBox width="100vw" height="30vh">

      </FlexBox>
      <FlexBox width="100vw" height="70vh" bgColor="#4F4DB0" borderRadius="15px 15px 0 0" justifyContent="flex-start" alignItems="flex-start" dir="column">
        <Text padding='30px 0px 0px 20px' size='42px' weight='700' txt='Welcome' color="white"></Text>
        <Input type="email"></Input>
      </FlexBox>
     
    </FlexBox>
  )
}
