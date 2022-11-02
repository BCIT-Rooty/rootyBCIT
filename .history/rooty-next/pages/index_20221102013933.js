import Head from 'next/head'
import styled from 'styled-components'
import {FlexBox} from '../styles/globals'
import Text from '../components/text'
import Input from '../components/inputs'
import Button from '../components/button'
import {useState} from 'react'
import {useRouter} from 'next/router'


export default function Home() {

  const r = useRouter()
  const [steps, setSteps] = useState(1)

  const HandleSteps = (newStep) =>{

  }

  return (
    <FlexBox dir="column" bgColor="#FFFDFA">
      <Head>
        <title>Welcome to Rooty</title>
      </Head>
      <FlexBox width="100vw" height="30vh"></FlexBox>
      <FlexBox width="100vw" height="70vh" bgColor="#4F4DB0" borderRadius="15px 15px 0 0" justifyContent="flex-start" alignItems="flex-start" dir="column">
        {steps === 1 && 
        
        }
        
      </FlexBox>
     
    </FlexBox>
  )
}
