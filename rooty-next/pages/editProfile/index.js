import { FlexBox, HorizontalScrollContainer, Wrapper } from "../../styles/globals";
import Text from "../../components/text";
import React from 'react';
import UserProfile from "../../components/userProfile";
import TitlePage from "../../components/titlePage";
import PostProfileDescript from "../../components/postProfileDescript";
import Item from "../../components/Item";
import {useRouter} from 'next/router'

const descript = [
  ['Hello, I am a D3 student. I am really good at managing my time and I will successfully deliver the project you want. Please text me!'],
  [['Architecture', '/face2.jpg', '4', '90'], ['Logo Design', '/face3.jpg', '4.6', '60'], ['Video Editing', '/face4.jpg', '4.4', '100']]
]

export default function EditProfile() {
    const r = useRouter()

    return ( <Wrapper dir="column" width="100vw" alignItems="start" height="fit-content" padding="0 0 80px 0">
      <FlexBox bgImage="/back.png" onClick={()=>{r.push('/userProfile/1')}} width="30px" height="30px" position="absolute" top="25px" left="20px"></FlexBox>
      <TitlePage txt="Profile" type="Edit" onClick={()=>{r.push('/editProfile/editing')}}/>
      <UserProfile name="Renata Dzotova" program="Digital Design and Development" bgImage="/face2.jpg"/>
      <PostProfileDescript headTxt="About Me" descriptTxt={descript[0]}></PostProfileDescript>
      <PostProfileDescript headTxt="Portfolio" descriptTxt="" type1="image1" type2="image2"></PostProfileDescript>

      <Text txt="Services" padding="30px 0px 10px 20px" size="21px" weight="bolder" width="100%" maxWidth="900px" justifyContent="flex-start"></Text>
      <HorizontalScrollContainer height="fit-content" justifyContent="flex-start" alignItems="flex-start" maxWidth="900px" width="94vw" margin="0px 0px 0px 20px" padding="5px">
        <FlexBox>
          {descript[1].map((o) => (
            <Item name={o[0]} image={o[1]} rating={o[2]} price={o[3]} width="290px" margin="0 20px 0 0" onClick={()=> setShowModal(o)}></Item>
          ))}
        </FlexBox>
      </HorizontalScrollContainer>
  </Wrapper>
    )


}