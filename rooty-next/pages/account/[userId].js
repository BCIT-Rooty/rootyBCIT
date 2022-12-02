import { prisma } from "../../server/db/client";
import { Wrapper, FlexBox, ImgPlaceholder } from "../../styles/globals";
import Text from "../../components/text";
import SettingLine from "../../components/settingLine";
import { useRouter } from "next/router";
import Button from "../../components/button";
import Construction from "../../components/construction";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Rating from "@mui/material/Rating";
import DownloadPopUp from "../../components/downloadPopUp";
import { signOut } from "next-auth/react";
import axios from "axios";
// import { getSession } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

export default function UserProfile({ sessionUserObj }) {
  const r = useRouter();
  const [showModal, setShowModal] = useState("default");
  const [value, setValue] = useState(4);
  const [logOut, setLogOut] = useState("default");
  // const [theFinalStatus, setTheFinalStatus] = useState("")
  const [buttonMain, setButtonMain] = useState(sessionUserObj.status);
  const [statusButton, setStatusButton] = useState([
    { id: 1, title: "Available" },
    { id: 2, title: "Unavailable" },
  ]);

  useEffect(() => {
    console.log(sessionUserObj);
    sendStatus(buttonMain);
  }, [buttonMain]);

  async function sendStatus(input) {
    await axios.put("/api/updateAvailability", {
      availability: input,
      email: sessionUserObj.email,
    });
  }

  return (
    <Wrapper dir="column" justifyContent="start" alignItems="center">
      <FlexBox
        bgColor="#4F4DB0"
        padding="55px 30px "
        width="100vw"
        boxShadow="0px 3px 5px #888888"
      >
        <ImgPlaceholder
          bgImage={sessionUserObj.image}
          borderRadius="80px"
          width="80px"
          height="80px"
        ></ImgPlaceholder>
        <FlexBox dir="column" margin="0px 0px 0px 20px" alignItems="start">
          <Text
            size="21px"
            weight="700"
            txt={sessionUserObj.name + " " + sessionUserObj.lastName}
            color="white"
          ></Text>

          <Text
            size="15px"
            weight="300"
            txt={sessionUserObj.program}
            color="white"
            padding="5px 0px 20px 0px"
          ></Text>
          <FlexBox>
            <Text
              size="16px"
              weight="300"
              txt="4/5"
              color="white"
              padding="0px 20px 0px 0px"
            ></Text>
            <Rating name="read-only" value={value} readOnly />
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox dir="column" height="fit-content" padding="20px 0 0 0">
        <Text
          txt="Set Seller Status"
          width="100vw"
          padding="40px 0px 15px 35px"
          weight="600"
        ></Text>
        <FlexBox>
          {/* STATUS BUTTON HERE */}
          {statusButton.map((button) => (
            <Button
              type="button"
              onClick={(e) => setButtonMain(e)}
              key={button.id}
              txt={button.title}
              value={button.title}
              statusValue={true}
              color="#545454"
              border="2px solid #545454"
              width="fit-content"
              padding="20px 5vw"
              whatIsTheStateOfTheAppForCategory={buttonMain}
              ifThisIsTheCategoriesButtons={true}
            />
          ))}
        </FlexBox>
        <Text
          txt="Account"
          width="100vw"
          padding="40px 0px 15px 35px"
          weight="600"
        ></Text>
        <SettingLine
          name="edit"
          txt="My Profile"
          onClick={() => {
            r.push(`/account/userProfile/${sessionUserObj.userId}`);
          }}
        ></SettingLine>
        <SettingLine
          name="heart"
          txt="Favourites List"
          onClick={() => {
            r.push(`/account/favourites/${sessionUserObj.userId}`);
          }}
        ></SettingLine>
        <SettingLine
          name="archive"
          txt="My Posts"
          onClick={() => {
            r.push(`/account/userPosts/${sessionUserObj.userId}`);
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
      <FlexBox
        justifyContent="space-between"
        width="100vw"
        padding="30px 35px 60px 35px"
        maxWidth="900px"
      >
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
          onClick={() => {
            setLogOut("active");
            signOut();
          }}
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
          <FlexBox position="fixed">
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
                onClose={() => setLogOut(r.push("/"))}
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
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  let sessionUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  let sessionUserObj = JSON.parse(JSON.stringify(sessionUser));
  return {
    props: { session, sessionUserObj },
  };
}
