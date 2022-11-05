import CategoryCard from "../../components/categoryCard";
import { useRouter } from 'next/router';
import { FlexBox, Wrapper } from "../../styles/globals";
import Review from "../../components/reviews/review";
import Text from "../../components/text";
import { Search } from 'semantic-ui-react';
// import Review from "../../components/review";
import { ImgPlaceholder } from "../../styles/globals";
import axios from 'axios';
import { useEffect, useState } from "react";
import {prisma} from "../../server/db/client";
import DialogueBox from "../../components/chat/dialogueBox";
import MyMessage from "../../components/chat/myMessage";
import NotMyMessage from "../../components/chat/notMyMessage";





export default function Categories({jsonCategories}) {
  const r = useRouter();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
  console.log(jsonCategories);
  setCategories(jsonCategories)
  }, [])


  function getCategories(categories) {
    return (
      categories.map(category => (

        <CategoryCard onClick={
          () => r.push({
            pathname: `categories/${category.categoryId}`,
          })}
          key={category.categoryId} name={category.categoryName} image={category.image}>
        </CategoryCard>

      ))
      )
  };


  return (
    <>
      <Wrapper alignItems="start">
        <FlexBox dir="column" width="100%">
          <FlexBox width="100%" justifyContent="start" alignItems="flex-end" border="0.5px solid rgba(191, 191, 191, 1)" padding="0 0 7px 40px" minHeight="100px">
            <Text txt="Search" size="24px" weight="bold"></Text>
          </FlexBox>
          <FlexBox padding="30px 0px 13px 0px">
            <Search size="big"
              placeholder='Search...'
              onResultSelect={(e, data) =>
                dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })} />
          </FlexBox>
          <FlexBox flexWrap="wrap" filter="drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.2))">
            {getCategories(categories)}
          </FlexBox>
        </FlexBox>
      </Wrapper>
      <Wrapper>
      <FlexBox dir="column" width="100%">
            <DialogueBox date="Today"></DialogueBox>
            <DialogueBox postTitle="Video Editing" userName="Raki Devon" image="/face2.jpg"></DialogueBox>
            <DialogueBox postTitle="Motion Graphics" userName="Aaron Hans" image="/face4.jpg" date="3/8"></DialogueBox>
            <MyMessage></MyMessage>
            <MyMessage text="hey how are you doing queen long time no see I'm so happy to see you"></MyMessage>
            <NotMyMessage type="messageImage" image="/3081629.jpg" text="message with an image and a lot of other stuff that i don't care about"></NotMyMessage>
            <NotMyMessage text="Ana is nice and Renata is nice but Sohrab is not really nice"></NotMyMessage>
      </FlexBox>
      </Wrapper>
    </>
  )
}


export async function getStaticProps() {
  const categoriesBE = await prisma.category.findMany();
      const jsonCategories = JSON.parse(JSON.stringify(categoriesBE));
      return {
        props: {
          jsonCategories
        }
      }
}