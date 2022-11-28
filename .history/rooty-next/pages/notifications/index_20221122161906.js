import Review from "../../components/reviews/review";
import { FlexBox, Wrapper } from "../../styles/globals";
import Text from "../../components/text";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Notification from "../../components/userProfile/notification";
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from "framer-motion";
import { useState } from 'react'
import Article from '../../blog';
import { Article1, Article2, Article3, Article4, Contest, gradientCard, popularSearches } from '../../blog/articles'
import Input from "../../components/inputs";


export default function Notifications(){

    const [showModal, setShowModal] = useState("default")

    const r = useRouter();

    function handleLinkClick() {
        const link = `/home`
        r.push(link)
    }

    return( 
<Wrapper alignItems="flex-start" overflowX="hidden" overflowY="hidden">
    <FlexBox dir="column" width="100%">
    <FlexBox width="100%" justifyContent="flex-start" padding="30px 0 10px 30px"><ArrowBackIosIcon fontSize="large" onClick={() =>handleLinkClick()}></ArrowBackIosIcon></FlexBox>
    <FlexBox width="100%" justifyContent="flex-start"><Text txt="Notifications" size="24px" color="#232323" weight="bold" padding="20px"></Text></FlexBox>
    <Notification message="We have prepared some tips on how to get your first client! Check them out!" onClick={()=> setShowModal(2)}></Notification>
    <Notification message="Welcome to Rooty!"></Notification>
     </FlexBox>
    {/* <FlexBox width="100vw">
     <AnimatePresence exitBeforeEnter>
      {showModal === 2 && <FlexBox position="absolute" top="-10px" left="0vw" width="100vw"><motion.div initial={{x: 900}} animate={{x: 0, transition:{duration: 0.7, delay:0}}} exit={{x:-900}}><Article article={Article1()} onClick={()=>setShowModal("default")} txt="How to Write the Perfect Freelancing Bio" bgImage="/tip1.png"/></motion.div></FlexBox>}
      </AnimatePresence>
      </FlexBox> */}
    <FlexBox width="100vw" height="30vh">
        <FlexBox width="100vw" height="30vh">
        <FlexBox width="100%" height="70vh" bgColor="#4F4DB0" borderRadius="15px 15px 0 0" justifyContent="flex-start" dir="column" padding="0px 0px 50px 0px" boxShadow="0px -4px 9px rgba(0, 0, 0, 0.25);"></FlexBox>
        <AnimatePresence exitBeforeEnter>
          {showModal == 2 && <FlexBox width="100%" maxWidth="900px" dir="column" alignItems="flex-start" justifyContent="flex-start" >
            <motion.div key={steps} initial={{x: 400}} animate={{x: 0, transition:{duration: 0.4, delay:0.7}}} exit={{x:-400}}>
            <Text padding='30px 0px 10px 20px' size='18px' weight='500' txt="BCIT Email" color="white" ></Text>
            <Input bgImage="/bx-envelope.svg" type="email" placeholder='ex/jdoe@my.bcit.ca' margin="0px 20px 0px 20px" padding='0 0 0 55px' width="90vw" maxWidth="900px" justifyContent="flex-start"></Input>
            <Text padding='30px 0px 10px 20px' size='18px' weight='500' txt="Password" color="white" ></Text>
            <Input bgImage="/bx-lock.svg" type="password" placeholder='' margin="0px 20px 0px 20px" padding='0 0 0 55px' width="90vw" maxWidth="900px" justifyContent="flex-start" ></Input>
            <Text padding='10px 20px 10px 20px' size='14px' weight='500' txt="Forgot Password?" color="white" textDecor="underline" justifyContent="flex-end" width="100vw"></Text>
            </motion.div>
            </FlexBox>
            }
        </AnimatePresence>
      </FlexBox>
      </FlexBox>
</Wrapper>
)}