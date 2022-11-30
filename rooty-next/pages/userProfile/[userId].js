import {
  FlexBox,
  HorizontalScrollContainer,
  Wrapper,
} from "../../styles/globals";
import SettingLine from "../../components/settingLine";
import Button from "../../components/button";
import Text from "../../components/text";
import React from "react";
import UserProfile from "../../components/userProfile";
import TitlePage from "../../components/titlePage";
import { AnimatePresence, motion } from "framer-motion";
import PostProfileDescript from "../../components/postProfileDescript";
import Item from "../../components/Item";
import { useRouter } from "next/router";
import { prisma } from "../../server/db/client";
import { unstable_ClassNameGenerator } from "@mui/material";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { useState } from "react";

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
  // let userName = parsedItems.map(user => user.name + ' ' + user.lastName);
  // console.log('THIS IS THE USERNAME', userName)
  let userId = 1;
  const r = useRouter();
  const [showModal, setShowModal] = useState("default");
  const [value, setValue] = useState(4);
  const [logOut, setLogOut] = useState("default");
  const [statusButton, setStatusButton] = useState([
    { id: 1, title: "Available" },
    { id: 2, title: "Unavailable" },
  ]);
  const [buttonMain, setButtonMain] = useState("");

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
      />
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
      <FlexBox dir="column">
        <Text
          txt="Account"
          width="100vw"
          padding="40px 0px 15px 35px"
          weight="600"
        ></Text>
        <SettingLine
          name="edit"
          txt="My Profile"
          onClick={() => setShowModal("show")}
        ></SettingLine>
        <SettingLine
          name="heart"
          txt="Favourites List"
          onClick={() => {
            r.push(`/favourites/${parsedItems.userId}`);
          }}
        ></SettingLine>
        <SettingLine
          name="archive"
          txt="My Posts"
          onClick={() => {
            r.push(`/userPosts/${parsedItems.userId}`);
          }}
        ></SettingLine>
        <SettingLine
          name="star"
          txt="Reviews Received"
          onClick={() => setShowModal("show")}
        ></SettingLine>
        <Text
          txt="App Settings"
          width="100vw"
          padding="50px 0px 15px 35px"
          weight="600"
        ></Text>
        <SettingLine
          name="bell"
          txt="Notifications"
          onClick={() => setShowModal("show")}
        ></SettingLine>
        <SettingLine
          name="universal access"
          txt="Accessibility"
          onClick={() => setShowModal("show")}
        ></SettingLine>
        <SettingLine
          name="shield alternate"
          txt="Security"
          onClick={() => setShowModal("show")}
        ></SettingLine>
      </FlexBox>
      <FlexBox justifyContent="space-between" width="100vw" padding="30px 35px">
        <Text
          txt="Terms of Use"
          weight="300"
          size="15px"
          onClick={() => setShowModal("show")}
        ></Text>
        <Button
          bgColor="#4F4DB0"
          txt="Log Out"
          width="100px"
          fontWeight="600"
          onClick={() => setLogOut("active")}
        ></Button>
        <Text
          txt="Privacy Policy"
          weight="300"
          size="15px"
          onClick={() => setShowModal("show")}
        ></Text>
      </FlexBox>

      <AnimatePresence exitBeforeEnter>
        {showModal === "show" && (
          <FlexBox position="absolute">
            <motion.div
              initial={{ x: -400 }}
              animate={{ x: 0, transition: { duration: 0.7, delay: 0 } }}
              exit={{ x: -400 }}
            >
              <Construction onClose={() => setShowModal("default")} />
            </motion.div>
          </FlexBox>
        )}
        {logOut === "active" && (
          <FlexBox position="absolute" left="0" zIndex="30">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.2, delay: 0 },
              }}
              exit={{ opacity: 0 }}
            >
              <DownloadPopUp
                height="100vh"
                onClose={() => setLogOut("default")}
                txt="You Logged Out!"
                txt2="We hope to see you soon! 🥹"
                size2="20px"
                padding2="0px 0px 15px 0px"
                height2="fit-content"
                width2="300px"
              ></DownloadPopUp>
            </motion.div>
          </FlexBox>
        )}
      </AnimatePresence>
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
  // console.log("sessionUserPostsObj", sessionUserPostsObj);

  sessionUserObj.createdAt = sessionUserObj.createdAt / 1000;

  return {
    props: {
      sessionUserObj,
      sessionUserPostsObj,
    },
  };
}
