import Head from "next/head";
import { FlexBox, Wrapper, ImgPlaceholder } from "../styles/globals";
import Text from "../components/text";
import Input, { TextInput } from "../components/inputs";
import Button from "../components/button";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import styled from "styled-components";
import { Email } from "@mui/icons-material";

export default function Home() {
  const r = useRouter();
  const [steps, setSteps] = useState(1);
  const [headerText, setHeaderText] = useState("");
  const [headerImage, setHeaderImage] = useState("");
  const [listOfCategories, setListOfCategories] = useState([
    { id: 1, name: "Broadcast & Media" },
    { id: 2, name: "Computing" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Business & Finance" },
    { id: 5, name: "Digital Arts & Design" },
    { id: 6, name: "Tutoring" },
  ]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [category, setCategory] = useState("");
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    if (steps === 1) {
      setHeaderText("Welcome");
      setHeaderImage("/signin1.png");
    }
    if (steps === 2) {
      setHeaderText("Set up your Profile");
      setHeaderImage("/signin2.png");
    }
    if (steps === 3) {
      setHeaderText("What Program are you in?");
      setHeaderImage("/signin3.png");
    }
    if (steps === 4) {
      setHeaderText("What Skills do you Offer?");
      setHeaderImage("/signin4.png");
    }
    if (steps === 5) {
      setHeaderText("Create Profile");
      setHeaderImage("/signin5.png");
    }
  }, [steps]);

  const [noPhotoError, setNoPhotoError] = useState(false);

  const registerUser = async (e) => {
    e?.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      aboutMe: aboutMe,
      program: category,
    };

    // VERIFY THE USER THRUOUGH A CONFIRMATION LINK SENT TO EMAIL...

    await axios
      .post("/api/register", data)
      .then((res) => {
        console.log("RESSS", res);
      })
      .catch((err) => {
        console.log("ERRRR", err);
      });
  };

  const handleSteps = (newStep) => {
    setSteps(newStep);
    // if(steps == 1) {
    //   r.push("/")
    // }
    if (steps >= 5) {
      r.push("/home");
      registerUser();
    }
  };

  async function uploadThePhotoToS3(inputFile) {
    let theUrlToReturn;
    await axios.get("/api/s3").then(async (res) => {
      const theUrlData = res.data.url;
      await axios({
        method: "PUT",
        url: theUrlData,
        data: inputFile,
      }).then(() => {
        const [photoUrlRet] = theUrlData.split("?");
        setPhotoUrl(photoUrlRet);
        theUrlToReturn = photoUrlRet;
      });
    });
    console.log(theUrlToReturn);
    return theUrlToReturn;
  }

  return (
    <Wrapper
      dir="column"
      bgColor="#FFFDFA"
      overflowX="hidden"
      overflowY="hidden"
    >
      <Head>
        <title>Welcome to Rooty</title>
      </Head>
      <FlexBox width="100vw" height="30vh">
        <FlexBox
          bgImage="/back.png"
          onClick={() => handleSteps(Math.max(1, steps - 1))}
          width="40px"
          height="40px"
          position="absolute"
          top="40px"
          left="20px"
        ></FlexBox>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={headerImage}
            initial={{ x: 300 }}
            animate={{ x: 0, transition: { duration: 0.4, delay: 0 } }}
            exit={{ x: -300 }}
          >
            <ImgPlaceholder
              width="190px"
              height="190px"
              bgImage={headerImage}
            ></ImgPlaceholder>
          </motion.div>
        </AnimatePresence>
      </FlexBox>
      <FlexBox
        width="100%"
        height="70vh"
        bgColor="#4F4DB0"
        borderRadius="15px 15px 0 0"
        justifyContent="flex-start"
        dir="column"
        padding="0px 0px 50px 0px"
        boxShadow="0px -4px 9px rgba(0, 0, 0, 0.25);"
      >
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={headerText}
            initial={{ x: 400 }}
            animate={{ x: 0, transition: { duration: 0.4, delay: 0 } }}
            exit={{ x: -400 }}
          >
            <Text
              padding="60px 20px 0px 20px"
              size="42px"
              weight="600"
              txt={headerText}
              color="white"
              width="100vw"
              maxWidth="900px"
            ></Text>
          </motion.div>
        </AnimatePresence>
        {/* <form onSubmit={registerUser}> */}
        <AnimatePresence exitBeforeEnter>
          {steps === 1 && (
            <FlexBox
              width="100%"
              maxWidth="900px"
              dir="column"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <motion.div
                key={steps}
                initial={{ x: 400 }}
                animate={{ x: 0, transition: { duration: 0.4, delay: 0.7 } }}
                exit={{ x: -400 }}
              >
                <Text
                  padding="30px 0px 10px 20px"
                  size="18px"
                  weight="500"
                  txt="BCIT Email"
                  color="white"
                ></Text>
                <Input
                  bgImage="/bx-envelope.svg"
                  type="email"
                  value={email}
                  onChangingTheText={(e) => setEmail(e)}
                  placeholder="jdoe@my.bcit.ca"
                  margin="0px 20px 0px 20px"
                  padding="0 0 0 45px"
                  width="90vw"
                  maxWidth="900px"
                  justifyContent="flex-start"
                ></Input>
                <Text
                  padding="30px 0px 10px 20px"
                  size="18px"
                  weight="500"
                  txt="Password"
                  color="white"
                ></Text>
                <Input
                  bgImage="/bx-lock.svg"
                  type="password"
                  value={password}
                  onChangingTheText={(e) => setPassword(e)}
                  placeholder=""
                  margin="0px 20px 0px 20px"
                  padding="0 0 0 45px"
                  width="90vw"
                  maxWidth="900px"
                  justifyContent="flex-start"
                ></Input>
                <Text
                  padding="10px 20px 10px 20px"
                  size="14px"
                  weight="500"
                  txt="Forgot Password?"
                  color="white"
                  textDecor="underline"
                  justifyContent="flex-end"
                  width="100vw"
                ></Text>
              </motion.div>
            </FlexBox>
          )}
          {
            steps === 2 && (
              <FlexBox
                width="100%"
                maxWidth="900px"
                dir="column"
                alignItems="flex-start"
                justifyContent="flex-start"
              >
                <motion.div
                  key={steps}
                  initial={{ x: 400 }}
                  animate={{ x: 0, transition: { duration: 0.4, delay: 0.7 } }}
                  exit={{ x: -400 }}
                >
                  <Text
                    padding="30px 0px 10px 20px"
                    size="18px"
                    weight="500"
                    txt="Name"
                    color="white"
                    width="100vw"
                    maxWidth="900px"
                  ></Text>
                  <Input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChangingTheText={(e) => setFirstName(e)}
                    margin="0px 20px 10px 20px"
                    width="90vw"
                    maxWidth="900px"
                    justifyContent="flex-start"
                  ></Input>
                  <Input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChangingTheText={(e) => setLastName(e)}
                    margin="30px 20px 10px 20px"
                    width="90vw"
                    maxWidth="900px"
                    justifyContent="flex-start"
                  ></Input>
                </motion.div>
              </FlexBox>
            )
            // value={firstName} onChange={(e) => setFirstName(e.target.value)}
          }
          {steps === 3 && (
            <FlexBox
              width="100%"
              maxWidth="900px"
              dir="column"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <motion.div
                key={steps}
                initial={{ x: 400 }}
                animate={{ x: 0, transition: { duration: 0.4, delay: 0.7 } }}
                exit={{ x: -400 }}
              >
                <FlexBox
                  flexWrap="wrap"
                  width="100vw"
                  maxWidth="900px"
                  justifyContent="space-between"
                  padding="30px 20px 0px 20px"
                >
                  {listOfCategories.map((category) => (
                    <Button
                      type="button"
                      onClick={(e) => setCategory(e)}
                      key={category.id}
                      txt={category.name}
                      value={category.name}
                      color="#545454"
                      width="fit-content"
                      padding="20px 5vw"
                    />
                  ))}
                  {/* (e) => setCategory(e) */}
                </FlexBox>
              </motion.div>
            </FlexBox>
          )}
          {steps === 4 && (
            <FlexBox
              width="100%"
              maxWidth="900px"
              dir="column"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <motion.div
                key={steps}
                initial={{ x: 400 }}
                animate={{ x: 0, transition: { duration: 0.4, delay: 0.7 } }}
                exit={{ x: -400 }}
              >
                <FlexBox
                  padding="30px 20px 0px 20px"
                  justifyContent="space-between"
                  width="100vw"
                  maxWidth="100%"
                >
                  <Input
                    type="search"
                    placeholder="Add up to 5 Skills"
                    // value={keywordButtonStateValue}
                    border="solid 1px #545454"
                    // onChangingTheText={setKeywordButtonStateValue}
                    width="65vw"
                    maxWidth="80%"
                  />
                  <Button
                    type="add"
                    key="handleKeywordAdding"
                    txt="Add"
                    // value={keywordButtonStateValue}
                    width="fit-content"
                    padding="15px"
                    margin="0px 0px 0px 20px"
                    buttonMargin="0px 10px 0px 0px"
                    color="#4F4DB0"
                  />
                </FlexBox>
              </motion.div>
            </FlexBox>
          )}
          {steps === 5 && (
            <FlexBox
              width="100%"
              maxWidth="900px"
              dir="column"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <motion.div
                key={steps}
                initial={{ x: 400 }}
                animate={{ x: 0, transition: { duration: 0.4, delay: 0.7 } }}
                exit={{ x: -400 }}
              >
                <Text
                  padding="30px 20px 20px 20px"
                  size="18px"
                  weight="500"
                  txt="Upload your Profile Picture"
                  width="90vw"
                  color="white"
                ></Text>
                <FlexBox justifyContent="flex-start" padding="0 0 0 20px">
                  <Input
                    type="file"
                    onInsertPhotoInsideS3={uploadThePhotoToS3}
                    bgColor="white"
                    brImage="30px"
                  ></Input>
                  {noPhotoError ? (
                    <Toaster txt="You need one photo for your post"></Toaster>
                  ) : (
                    <></>
                  )}
                </FlexBox>
                <TextInput
                  type="textarea"
                  border="solid 1px #545454"
                  margin="10px 20px 0px 20px"
                  placeholder="Describe your talents..."
                  width="90vw"
                  maxWidth="900px"
                  justifyContent="flex-start"
                  value={aboutMe}
                  onChangingTheText={(e) => setAboutMe(e)}
                ></TextInput>
              </motion.div>
            </FlexBox>
          )}
        </AnimatePresence>
        <FlexBox
          width="100vw"
          padding="0px 20px 0px 20px"
          position="absolute"
          bottom="30px"
        >
          {/* <button type='submit'></button> */}
          <Button
            type="next"
            txt={(steps <= 4 && "Next") || "Finish"}
            color="black"
            width="90vw"
            maxWidth="300px"
            onNext={() => handleSteps(Math.min(5, steps + 1))}
            size="21px"
            fontWeight="700"
            padding="25px"
          ></Button>
        </FlexBox>
        {/* </form> */}
      </FlexBox>
    </Wrapper>
  );
}
