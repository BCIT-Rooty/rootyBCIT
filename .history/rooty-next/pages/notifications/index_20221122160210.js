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


export default function Notifications(){

    const [showModal, setShowModal] = useState("default")

    const r = useRouter();

    function handleLinkClick() {
        const link = `/home`
        r.push(link)
    }

    return( 
<Wrapper alignItems="flex-start">
    <FlexBox dir="column" width="100%">
    <FlexBox width="100%" justifyContent="flex-start" padding="30px 0 10px 30px"><ArrowBackIosIcon fontSize="large" onClick={() =>handleLinkClick()}></ArrowBackIosIcon></FlexBox>
    <FlexBox width="100%" justifyContent="flex-start"><Text txt="Notifications" size="24px" color="#232323" weight="bold" padding="20px"></Text></FlexBox>
    <Notification message="We have prepared some tips on how to get your first client! Check them out!" onClick={()=> setShowModal(2)}></Notification>
    <Notification message="Welcome to Rooty!"></Notification>
     </FlexBox>

     <AnimatePresence exitBeforeEnter>
      {showModal === 2 && <motion.div initial={{x: 900}} animate={{x: 0, transition:{duration: 0.7, delay:0}}} exit={{x:900}}><Article article={Article1()} onClick={()=>setShowModal("default")} txt="How to Write the Perfect Freelancing Bio" bgImage="/tip1.png"/></motion.div></FlexBox>}
      </AnimatePresence>
</Wrapper>
)}