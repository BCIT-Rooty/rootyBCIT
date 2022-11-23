import { FlexBox, HorizontalScrollContainer, Wrapper } from "../../styles/globals";
import Text from "../../components/text";
import React from 'react';
import UserProfile from "../../components/userProfile";
import TitlePage from "../../components/titlePage";
import PostProfileDescript from "../../components/postProfileDescript";
import Item from "../../components/Item";
import {useRouter} from 'next/router'
import Toaster from "../../components/toaster";
import Button from "../../components/button";
import { useState } from "react"
import { motion } from "framer-motion"
import DownloadPopUp from "../../components/downloadPopUp";

const descript = [
  ['Hello, I am a D3 student. I am really good at managing my time and I will successfully deliver the project you want. Please text me!'],
  [['Architecture', '/face2.jpg', '4', '90'], ['Logo Design', '/face3.jpg', '4.6', '60'], ['Video Editing', '/face4.jpg', '4.4', '100']]
]

const reportButton = [
  ["Abusive/Offensive Language"],
  ["Scam Activity"],
  ["Harrassment"],
  ["Other"],
]
var name = "Abbey Jones"

export default function EditProfile() {
    const r = useRouter()
    const [report, showReport] = useState(false)
    const [showDownload, setShowDownload] = useState("default")
    const handleClose = () => {
      setShowDownload("default");
      showReport(false)
  };

    return ( <Wrapper dir="column" width="100vw" alignItems="start" height="fit-content" padding="0 0 80px 0">
      <FlexBox bgImage="/back.png" onClick={()=>{r.push('/userProfile/1')}} width="30px" height="30px" position="absolute" top="25px" left="20px"></FlexBox>
      <TitlePage txt="Profile"/>
      <UserProfile name={name} program="Digital Design and Development" bgImage="/face2.jpg"/>
      <PostProfileDescript headTxt="About Me" descriptTxt={descript[0]}></PostProfileDescript>
      <PostProfileDescript headTxt="Portfolio" descriptTxt="" type1="image1" type2="image2"></PostProfileDescript>

      <Text txt="Services" padding="30px 0px 10px 20px" size="21px" weight="bolder" width="100%" maxWidth="900px" justifyContent="flex-start"></Text>
      <HorizontalScrollContainer height="fit-content" justifyContent="flex-start" alignItems="flex-start" maxWidth="900px" width="94vw" margin="0px 0px 20px 20px" padding="5px">
        <FlexBox>
          {descript[1].map((o) => (
            <Item name={o[0]} image={o[1]} rating={o[2]} price={o[3]} width="290px" margin="0 20px 0 0" onClick={()=>setShowModal(o)}></Item>
          ))}
        </FlexBox>
      </HorizontalScrollContainer>
      <Toaster txt={"Report " + name} onClick={()=>{showReport(true)}}></Toaster>
      {report === true && <FlexBox position="fixed" width="300px" height="fit-content" borderRadius="16px" bgColor="#FFFFFF" top="30%" left="25%" boxShadow="0px 0px 8px rgba(0, 0, 0, 0.25)" justifyContent="start" alignItems="start" dir="column" padding="20px">
            <Text txt="Report" weight="700" size="24px"></Text>
            <Text txt="Select a reason for reporting this user." weight="500" size="12px" padding="10px 0"></Text>
            {reportButton.map((o)=> (
              <Button type="next" txt={o} bgColor="#4F4DB0" width="250px" onNext={()=>setShowDownload("active")}></Button>
            ))}
            <Button type="cancel" txt="Cancel" bgColor="#F7F7FC" color="#4F4DB0" border="0.5px solid #545454" width="250px" onClose={()=>showReport(false)}></Button>
        </FlexBox>
      }
      {showDownload === "active" && <FlexBox position="absolute" left="0" top="0" zIndex="30">
            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 0.2, delay:0}}} exit={{opacity:0}}>
                <DownloadPopUp onClose={()=>handleClose()} txt={name + " has been reported"}></DownloadPopUp>
            </motion.div>
        </FlexBox>
      }
  </Wrapper>
    )


}