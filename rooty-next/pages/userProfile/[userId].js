import {
  FlexBox,
  HorizontalScrollContainer,
  Wrapper,
} from "../../styles/globals";
import Text from "../../components/text";
import React from "react";
import UserProfile from "../../components/userProfile";
import TitlePage from "../../components/titlePage";
import PostProfileDescript from "../../components/postProfileDescript";
import Item from "../../components/Item";
import { useRouter } from "next/router";
import { prisma } from "../../server/db/client";
import { unstable_ClassNameGenerator } from "@mui/material";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

const descript = [
  [
    "Hello, I am a D3 student. I am really good at managing my time and I will successfully deliver the project you want. Please text me!",
  ],
  [
    ["Architecture", "/face2.jpg", "4", "90"],
    ["Logo Design", "/face3.jpg", "4.6", "60"],
    ["Video Editing", "/face4.jpg", "4.4", "100"],
  ],
];

export default function EditProfile({ sessionUserObj, sessionUserPostsObj }) {
  const r = useRouter();

  return (
    <Wrapper
      dir="column"
      width="100vw"
      alignItems="start"
      height="fit-content"
      padding="0 0 80px 0"
    >
      <FlexBox
        bgImage="/back.png"
        onClick={() => {
          r.push(`/account/${sessionUserObj.userId}`);
        }}
        width="30px"
        height="30px"
        position="absolute"
        top="25px"
        left="20px"
      ></FlexBox>
      <TitlePage
        txt="Profile"
        type="Edit"
        onClick={() => {
          r.push("/userProfile/editing");
        }}
      />
      <UserProfile
        name={sessionUserObj.name + " " + sessionUserObj.lastName}
        program={sessionUserObj.program}
        bgImage={sessionUserObj.image}
      />
      <PostProfileDescript
        headTxt="About Me"
        descriptTxt={sessionUserObj.aboutMe}
      ></PostProfileDescript>
      <PostProfileDescript
        headTxt="Portfolio"
        descriptTxt=""
        type1="image1"
        type2="image2"
      ></PostProfileDescript>

      <Text
        txt="Services"
        padding="30px 0px 10px 20px"
        size="21px"
        weight="bolder"
        width="100%"
        maxWidth="900px"
        justifyContent="flex-start"
      ></Text>
      <HorizontalScrollContainer
        height="fit-content"
        justifyContent="flex-start"
        alignItems="flex-start"
        maxWidth="900px"
        width="94vw"
        margin="0px 0px 0px 20px"
        padding="5px"
      >
        <FlexBox>
          {sessionUserPostsObj.map((posts) => (
            <Item
              name={posts.title}
              image={posts.image}
              rating={posts.rating}
              price={posts.price}
              width="290px"
              margin="0 20px 0 0"
              onClick={() => setShowModal(posts)}
            ></Item>
          ))}
        </FlexBox>
      </HorizontalScrollContainer>
    </Wrapper>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  const sessionUserObj = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  const sessionUserPosts = await prisma.post.findMany({
    where: {
      authorId: sessionUserObj.userId,
    },
  });

  let sessionUserPostsObj = JSON.parse(JSON.stringify(sessionUserPosts));
  console.log("sessionUserPostsObj", sessionUserPostsObj);

  sessionUserObj.createdAt = sessionUserObj.createdAt / 1000;

  return {
    props: {
      sessionUserObj,
      sessionUserPostsObj,
    },
  };
}
