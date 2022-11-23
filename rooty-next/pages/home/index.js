import { Wrapper, HorizontalScrollContainer, FlexBox } from '../../styles/globals'
import GradientCard from '../../components/gradientCard'
import Text from '../../components/text'
import Button from '../../components/button'
import { useState } from 'react'
import { Article1, Article2, Article3, Article4, Contest, gradientCard, popularSearches } from '../../blog/articles'
import Article from '../../blog'
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";


export default function Home(){

  const [showModal, setShowModal] = useState("default")
  const r = useRouter();
  const HandleNavBarIcons = (name) => {
    r.push(name);
  };



  return( 
    
  
  <Wrapper dir="column" height="fit-content" padding="0 0 80px 0">
      <Text txt="Welcome, Student" padding="70px 0px 0px 20px" size="24px" weight="bolder" width="100%" maxWidth="900px" justifyContent="flex-start" ></Text>

      <Text txt="Insights & Tips" padding="30px 0px 10px 20px" size="21px" weight="bolder" width="100%" maxWidth="900px" justifyContent="flex-start" ></Text>
      <HorizontalScrollContainer justifyContent="flex-start" alignItems="flex-start" maxWidth="900px">
        <FlexBox padding="0px 0px 0px 20px">
          {gradientCard.map((o) => (
            <GradientCard txt={o[0]} bgImage={o[1]} onClick={()=> setShowModal(o[2])}></GradientCard>
          ))}
        </FlexBox>
      </HorizontalScrollContainer>
      
      <Text txt="Popular Searches" padding="30px 0px 10px 20px" size="21px" weight="bolder" width="100%" maxWidth="900px" justifyContent="flex-start"></Text>
      <FlexBox flexWrap="wrap" maxWidth="900px" justifyContent="flex-start" alignItems="flex-start" padding="0px 20px 0px 20px">
        {popularSearches.map((o) => (
          <Button width="42vw" maxWidth="205px" padding="25px 1vw 25px 1vw" txt={o[0]} bgColor='#4F4DB0' onClick={() => HandleNavBarIcons(o[1])}></Button>
        ))
      }
      </FlexBox>
    
      <Text txt="Contest For The Week" padding="30px 0px 10px 20px" size="21px" weight="bolder" width="100%" maxWidth="900px" justifyContent="flex-start"></Text>
      <FlexBox width="100vw" justifyContent="flex-start" alignItems="flex-start" padding="0px 0px 0px 20px"  maxWidth="900px">
        <GradientCard txt="Redesign our 'Big Info Poster' - $500" bgImage="/bigInfo.jpg"  height='130px' onClick={()=> setShowModal("contest")} width="95vw" maxWidth="435px"></GradientCard>
      </FlexBox>
      


      <AnimatePresence exitBeforeEnter>
      {showModal === "firstArticle" && <FlexBox position="absolute" top="-10px" left="0vw" width="100vw"><motion.div initial={{y: 900}} animate={{y: 0, transition:{duration: 0.7, delay:0}}} exit={{y:900}}><Article article={Article1()} onClick={()=>setShowModal("default")} txt="How to Write the Perfect Freelancing Bio" bgImage="/tip1.png"/></motion.div></FlexBox>}
      {showModal === "secondArticle" && <FlexBox position="absolute" top="-10px" left="0vw" width="100vw"><motion.div initial={{y: 900}} animate={{y: 0, transition:{duration: 0.7, delay:0}}} exit={{y:900}}><Article article={Article2()} onClick={()=>setShowModal("default")} txt="6 Habits of High Successful Freelancers" bgImage="/tip2.jpg"/></motion.div></FlexBox>}
      {showModal === "thirdArticle" && <FlexBox position="absolute" top="-10px" left="0vw" width="100vw"><motion.div initial={{y: 900}} animate={{y: 0, transition:{duration: 0.7, delay:0}}} exit={{y:900}}><Article article={Article3()} onClick={()=>setShowModal("default")} txt="4 Steps to Complete Your First Gig" bgImage="/tip3.png"/></motion.div></FlexBox>}
      {showModal === "fourthArticle" && <FlexBox position="absolute" top="-10px" left="0vw" width="100vw"><motion.div initial={{y: 900}} animate={{y: 0, transition:{duration: 0.7, delay:0}}} exit={{y:900}}><Article article={Article4()} onClick={()=>setShowModal("default")} txt="5 Ways to Improve Focus and Productivity" bgImage="/tip4.png"/></motion.div></FlexBox>}
      {showModal === "contest" && <FlexBox position="absolute" top="-10px" left="0vw" width="100vw"><motion.div initial={{y: 900}} animate={{y: 0, transition:{duration: 0.7, delay:0}}} exit={{y:900}}><Article article={Contest()} contest="yes" onClick={()=>setShowModal("default")} txt="Redesign our 'Big Info Poster' - $500" bgImage="/bigInfo.jpg"/></motion.div></FlexBox>}
      </AnimatePresence>
  </Wrapper>
  
  

  )
}