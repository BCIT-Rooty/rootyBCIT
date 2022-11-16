import { FlexBox, HorizontalScrollContainer, Wrapper } from "../../styles/globals";
import Text from "../../components/text";
import React from 'react';
import UserProfile from "../../components/userProfile";
import TitlePage from "../../components/titlePage";
import PostProfileDescript from "../../components/postProfileDescript";
import Item from "../../components/Item";
import {useRouter} from 'next/router';
import Input, { TextInput } from "../../components/inputs";
import { useState } from "react";

const descript = [
  ['Hello, I am a D3 student. I am really good at managing my time and I will successfully deliver the project you want. Please text me!'],
  [['Architecture', '/face2.jpg', '4', '90'], ['Logo Design', '/face3.jpg', '4.6', '60'], ['Video Editing', '/face4.jpg', '4.4', '100']]
]

export default function EditProfile() {
  const [name, setName] = useState("Renata")
    const r = useRouter()

    return ( <Wrapper dir="column" width="100vw" alignItems="start" height="fit-content" padding="0 0 80px 0">
      <TitlePage txt="Edit Profile" type="Done" onClick={()=>{r.push('/userProfile/1')}}/>
      <Text txt="Profile Image"></Text>
      <Input type="file" bgImage="/face2.jpg"></Input>
      <Text txt="Name"></Text>
      <Input id="hello" type="text" defaultValue={name}></Input>
      <Text txt="Program"></Text>
      <Input type="text" defaultValue="Digital Design and Development"></Input>
      <Text txt="About Me/Service"></Text>
      <TextInput type="textarea" defaultValue="Hello, I am a D3 student. I am really good at managing my time and I will successfully deliver the project you want. Please text me!"></TextInput>
      <Text txt="Portfolio"></Text>
      <Input type="file" bgImage="/face2.jpg"></Input>
  </Wrapper>
    )


}