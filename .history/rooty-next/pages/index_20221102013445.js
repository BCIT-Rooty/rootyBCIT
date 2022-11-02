import Head from 'next/head'
import styled from 'styled-components'
import {FlexBox} from '../styles/globals'
import Text from '../components/text'
import Input from '../components/inputs'
import Button from '../components/button'
import {useState} fr


export default function Home() {

  return (
    <FlexBox dir="column" bgColor="#FFFDFA">
      <Head>
        <title>Welcome to Rooty</title>
      </Head>
      <FlexBox width="100vw" height="30vh">

      </FlexBox>
      <FlexBox width="100vw" height="70vh" bgColor="#4F4DB0" borderRadius="15px 15px 0 0" justifyContent="flex-start" alignItems="flex-start" dir="column">
        <Text padding='60px 0px 0px 20px' size='42px' weight='700' txt='Welcome' color="white"></Text>
        <Text padding='30px 0px 10px 20px' size='18px' weight='500' txt="BCIT Email" color="white"></Text>
        <Input type="email" placeholder='ex/jdoe@my.bcit.ca' margin="0px 0px 0px 20px"></Input>
        <Text padding='30px 0px 10px 20px' size='18px' weight='500' txt="Password" color="white"></Text>
        <Input type="password" placeholder='' margin="0px 0px 0px 20px"></Input>
        <FlexBox width='100vw' padding="0px 20px 0px 20px" justifyContent="flex-start">
          <Button txt='Next' color="black" margin='5px 5px 8px 0px' width="93vw"></Button>
        </FlexBox>
      </FlexBox>
     
    </FlexBox>
  )
}
