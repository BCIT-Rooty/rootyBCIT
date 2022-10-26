import { Wrapper, HorizontalScrollContainer, FlexBox } from '../../styles/globals'
import GradientCard from '../../components/gradientCard'
import Text from '../../components/text'
import Button from '../../components/button'
import { useState } from 'react'
import { Article1, Article2, Article3, Article4, Contest } from '../../blog/articles'
import Article from '../../blog'
import { AnimatePresence, motion } from "framer-motion";
import Item from '../../components/Item';
import ItemDescription from '../../components/itemDescript'
import { useRouter } from "next/router";


export default function Home(){

  const [showModal, setShowModal] = useState("default")
  const r = useRouter();
  const HandleNavBarIcons = (name) => {
    r.push(name);
  };

  return( 
    
  
  <Wrapper justifyContent="flex-start" alignItems="flex-start" dir="column" height="fit-content">
    <Text txt="Welcome, Student" padding="30px 0px 0px 20px" size="24px" weight="bolder"></Text>

    <Text txt="Insights & Tips" padding="30px 0px 10px 20px" size="21px" weight="bolder"></Text>
    <HorizontalScrollContainer justifyContent="flex-start" alignItems="flex-start" >
      <FlexBox padding="0px 0px 0px 20px">
        <GradientCard txt="How to Write the Perfect Freelancing Bio" bgImage="/tip1.png" onClick={()=> setShowModal("firstArticle")}></GradientCard>
        <GradientCard txt="6 Habits of High Successful Freelancers" bgImage="/tip2.jpg" onClick={()=> setShowModal("secondArticle")}></GradientCard>
        <GradientCard txt="4 Steps to Complete Your First Gig" bgImage="/tip3.png" onClick={()=> setShowModal("thirdArticle")}></GradientCard>
        <GradientCard txt="5 Ways to Improve Focus and Productivity" bgImage="/tip4.png" onClick={()=> setShowModal("fourthArticle")}></GradientCard>
      </FlexBox>
    </HorizontalScrollContainer>
    
    <Text txt="Popular Searches" padding="30px 0px 10px 20px" size="21px" weight="bolder"></Text>
    <FlexBox flexWrap="wrap" width="100vw">
      <Button padding="25px 1vw 25px 1vw" txt="Broadcast & Media" bgColor='#4F4DB0' onClick={() => HandleNavBarIcons("/categories/1")} width="43vw"></Button>
      <Button padding="25px 1vw 25px 1vw" txt="Digital Arts & Design" bgColor='#4F4DB0' onClick={() => HandleNavBarIcons("/categories/2")} width="43vw"></Button>
      <Button padding="25px 1vw 25px 1vw" txt="Business & Finance" bgColor='#4F4DB0' onClick={() => HandleNavBarIcons("/categories/3")} width="43vw"></Button>
      <Button padding="25px 1vw 25px 1vw" txt="Marketing" bgColor='#4F4DB0' onClick={() => HandleNavBarIcons("/categories/4")} width="43vw"></Button>
      <Button padding="25px 1vw 25px 1vw" txt="Tutoring" bgColor='#4F4DB0' onClick={() => HandleNavBarIcons("/categories/5")} width="43vw"></Button>
      <Button padding="25px 1vw 25px 1vw" txt="Computing" bgColor='#4F4DB0' onClick={() => HandleNavBarIcons("/categories/6")} width="43vw"></Button>
    </FlexBox>
   
    <Text txt="Contest For The Week" padding="30px 0px 10px 20px" size="21px" weight="bolder"></Text>
    <FlexBox width="100vw">
      <GradientCard txt="Redesign our 'Big Info Poster' - $500" bgImage="/bigInfo.jpg" width='340px' height='130px' margin="0px" onClick={()=> setShowModal("contest")}></GradientCard>
    </FlexBox>


    <AnimatePresence exitBeforeEnter>
    {showModal === "firstArticle" && <FlexBox position="absolute"><motion.div initial={{y: 900}} animate={{y: 0, transition:{duration: 0.7, delay:0}}} exit={{y:900}}><Article article={Article1()} onClick={()=>setShowModal("default")} txt="How to Write the Perfect Freelancing Bio" bgImage="/tip1.png"/></motion.div></FlexBox>}
    {showModal === "secondArticle" && <FlexBox position="absolute"><motion.div initial={{y: 900}} animate={{y: 0, transition:{duration: 0.7, delay:0}}} exit={{y:900}}><Article article={Article2()} onClick={()=>setShowModal("default")} txt="6 Habits of High Successful Freelancers" bgImage="/tip2.jpg"/></motion.div></FlexBox>}
    {showModal === "thirdArticle" && <FlexBox position="absolute"><motion.div initial={{y: 900}} animate={{y: 0, transition:{duration: 0.7, delay:0}}} exit={{y:900}}><Article article={Article3()} onClick={()=>setShowModal("default")} txt="4 Steps to Complete Your First Gig" bgImage="/tip3.png"/></motion.div></FlexBox>}
    {showModal === "fourthArticle" && <FlexBox position="absolute"><motion.div initial={{y: 900}} animate={{y: 0, transition:{duration: 0.7, delay:0}}} exit={{y:900}}><Article article={Article4()} onClick={()=>setShowModal("default")} txt="5 Ways to Improve Focus and Productivity" bgImage="/tip4.png"/></motion.div></FlexBox>}
    {showModal === "contest" && <FlexBox position="absolute"><motion.div initial={{y: 900}} animate={{y: 0, transition:{duration: 0.7, delay:0}}} exit={{y:900}}><Article article={Contest()} contest="yes" onClick={()=>setShowModal("default")} txt="Redesign our 'Big Info Poster' - $500" bgImage="/bigInfo.jpg"/></motion.div></FlexBox>}
    </AnimatePresence>

  </Wrapper>
  
  

  )
}