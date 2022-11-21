import { Wrapper } from "../../styles/globals";
import TitlePage from "../../components/titlePage";
import {useRouter} from 'next/router';
import { useState } from "react";
import InputWithText from "../../components/inputWithText";
import AddPortfolio from "../../components/addPortfolio";

const descript = [
  ['Hello, I am a D3 student. I am really good at managing my time and I will successfully deliver the project you want. Please text me!'],
  [['Architecture', '/face2.jpg', '4', '90'], ['Logo Design', '/face3.jpg', '4.6', '60'], ['Video Editing', '/face4.jpg', '4.4', '100']]
]

export default function EditProfile() {
  const [name, setName] = useState("Renata")
    const r = useRouter()

    return ( <Wrapper dir="column" width="100vw" alignItems="start" height="fit-content" padding="0 0 80px 20px">
      <TitlePage txt="Edit Profile" type="Done" margin="0 0 0 -20px" onClick={()=>{r.push('/editProfile')}}/>
      <InputWithText txt="Profile Image" type="file" bgImage="/face2.jpg" margin="0 0 0 -20px"></InputWithText>
      <InputWithText txt="Name" type="text" margin="0 0 0 -20px" defaultValue="Renata Dzotova"></InputWithText>
      <InputWithText txt="Program" type="text" margin="0 0 0 -20px" defaultValue="Digital Design and Development"></InputWithText>
      <InputWithText txt="About Me / Education / Skills" type="textarea" margin="0 0 0 -20px" bottomBorder="0.5px solid black" defaultValue="Hello, I am a D3 student. I am really good at managing my time and I will successfully deliver the project you want. Please text me!"></InputWithText>
      <AddPortfolio defaultValue="Digital Design and Development"></AddPortfolio>
  </Wrapper>
    )


}