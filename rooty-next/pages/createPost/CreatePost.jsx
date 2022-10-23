// make sure that the fields are required and they are required in the database too the error for keywords/// make vercel work

import { useState, useEffect } from "react";
import axios from "axios";
import { TextInput } from "../../components/inputs";
import { FlexBox, Wrapper } from "../../styles/globals";
import Input from "../../components/inputs";
import Button from "../../components/button";
import Text from "../../components/text";
import DownloadPopUp from "../../components/downloadPopUp";
import Toaster from "../../components/toaster";
import { motion, AnimatePresence } from "framer-motion";
import Counter from "../../components/counter";

export default function CreatePost(props) {
  const [showDownload, setShowDownload] = useState("default");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isBarter, setIsBarter] = useState("");
  const [price, setPrice] = useState(0);
  const [keywords, setKeywords] = useState([]);
  const [keywordButtonStateValue, setKeywordButtonStateValue] = useState("");
  // const [stateTrackerToRemoveText, setStateTrackerToRemoveText] =
  //   useState(false);
  const [errorStateForEmptyInputKeyWord, setErrorStateForEmptyInputKeyWord] =
    useState(false);
  const [errorThatKeywordAlreadyExists, setErrorThatKeywordAlreadyExists] =
    useState(false);
  const [listOfCategories, setListOfCategories] = useState([
    "Broadcast & Media",
    "Computing",
    "Marketing",
    "Business & Finance",
    "Digital Arts & Design",
    "Tutoring",
  ]);
  const [whatIsTheCategoryOfThisPost, setWhatIsTheCategoryOfThisPost] =
    useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [isNegotiableActive, setIsNegotiableActive] = useState(false);

  const handleNegotiableButton = () => {
    setIsNegotiableActive((current) => !current);
  };

  async function uploadThePhotoToS3(inputFile) {
    // if (photoInput == false) {
    //   let theUrlToReturn = "no Url bro";
    //   return theUrlToReturn;
    // }
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

  function removeSpaces(inputText) {
    const str = inputText.replace(/\s/g, "");
    return str;
  }

  function handleKeywordsButtonClick() {
    const keywordWithoutSpaces = removeSpaces(keywordButtonStateValue);
    if (keywordButtonStateValue == "" || keywordWithoutSpaces == "") {
      if (errorThatKeywordAlreadyExists) {
        setErrorThatKeywordAlreadyExists(false);
      }
      setErrorStateForEmptyInputKeyWord(true);
      return;
    } else if (keywordButtonStateValue !== "" && keywordWithoutSpaces !== "") {
      setErrorStateForEmptyInputKeyWord(false);
    }
    if (
      keywords.includes(keywordButtonStateValue) ||
      keywords.includes(keywordWithoutSpaces)
    ) {
      setErrorThatKeywordAlreadyExists(true);
      return;
    } else if (
      !keywords.includes(keywordButtonStateValue) &&
      errorThatKeywordAlreadyExists !== true &&
      keywords.includes(keywordWithoutSpaces)
    ) {
      setErrorThatKeywordAlreadyExists(false);
    }
    setKeywords([...keywords, keywordButtonStateValue]);
    setKeywordButtonStateValue("");
  }

  const areThereKeywords = keywords.length !== 0;

  return (
    <>
      <Wrapper justifyContent="flex-start" alignItems="flex-start" dir="column">
        <Text
          txt="Create your post"
          size="24px"
          weight="bold"
          padding="40px 0px 10px 20px"
        ></Text>
        <FlexBox
          padding="20px 0px 20px 20px"
          topBorder="0.5px solid #545454"
          width="100vw"
          justifyContent="flex-start"
        >
          <Input type="file" onInsertPhotoInsideS3={uploadThePhotoToS3}></Input>
        </FlexBox>
        <FlexBox
          topBorder="0.5px solid #545454"
          width="100vw"
          justifyContent="flex-start"
          alignItems="flex-start"
          dir="column"
          padding="0px 0px 15px 0px"
        >
          <Text
            txt="Choose a Category"
            size="16px"
            weight="bold"
            padding="15px 0px 20px 20px"
          ></Text>
          <FlexBox
            flexWrap="wrap"
            width="95vw"
            justifyContent="space-between"
            padding="0px 0px 0px 5vw"
          >
            {listOfCategories.map((m) => (
              <Button
                key={m}
                txt={m}
                value={m}
                border="solid 2px #545454"
                color="#545454"
                width="fit-content"
                padding="20px 5vw"
                whatIsTheStateOfTheAppForCategory={whatIsTheCategoryOfThisPost}
                ifThisIsTheCategoriesButtons={true}
                onClick={setWhatIsTheCategoryOfThisPost}
              />
            ))}
          </FlexBox>
        </FlexBox>
        <FlexBox
          topBorder="0.5px solid #545454"
          width="100vw"
          justifyContent="flex-start"
          alignItems="flex-start"
          dir="column"
          padding="0px 0px 20px 0px"
        >
          <Text
            txt="Type Keywords"
            size="16px"
            weight="bold"
            padding="15px 0px 20px 20px"
          ></Text>
          <FlexBox>
            <Input
              placeholder="Type Keywords for your Post"
              type="search"
              value={keywordButtonStateValue}
              border="solid 1px #545454"
              margin="0px 0px 0px 20px"
              width="60vw"
              onChangingTheText={setKeywordButtonStateValue}
            ></Input>
            <Button
              type="add"
              key="handleKeywordAdding"
              txt="Add"
              value={keywordButtonStateValue}
              width="fit-content"
              padding="15px"
              margin="0px 0px 0px 20px"
              buttonMargin="0px 10px 0px 0px"
              bgColor="#4F4DB0"
              onClick={handleKeywordsButtonClick}
            />
          </FlexBox>
          <FlexBox width="95vw" padding="25px 0px 10px 5vw" flexWrap="wrap">
            {areThereKeywords ? (
              keywords.map((m) => (
                <Button
                  txt={m}
                  width="fit-content"
                  height="30px"
                  type="keyword"
                  padding="10px 10px"
                  fontWeight="300"
                  buttonMargin="0px 0px 0px 10px"
                  border="solid 1px #545454"
                  color="#545454"
                ></Button>
              ))
            ) : (
              <></>
            )}
          </FlexBox>
          {errorStateForEmptyInputKeyWord ? (
            <Toaster txt="You must insert atleast one keyword"></Toaster>
          ) : (
            <></>
          )}
          {errorThatKeywordAlreadyExists ? (
            <Toaster txt="This keyword is already being used"></Toaster>
          ) : (
            <></>
          )}
        </FlexBox>
        <FlexBox
          topBorder="0.5px solid #545454"
          width="100vw"
          justifyContent="flex-start"
          alignItems="flex-start"
          dir="column"
          padding="0px 0px 20px 0px"
        >
          <Text
            txt="Post Title"
            size="16px"
            weight="bold"
            padding="15px 0px 20px 20px"
          ></Text>
          <Input
            placeholder="Type your Post's Title"
            type="search"
            border="solid 1px #545454"
            margin="0px 0px 0px 20px"
            onChangingTheText={setTitle}
          ></Input>
        </FlexBox>
        <FlexBox
          topBorder="0.5px solid #545454"
          width="100vw"
          justifyContent="flex-start"
          alignItems="flex-start"
          dir="column"
          padding="0px 0px 20px 0px"
        >
          <Text
            txt="Describe your Service"
            size="16px"
            weight="bold"
            padding="15px 0px 20px 20px"
          ></Text>
          <TextInput
            placeholder="Sell yourself! Describe what awesome talents you have!"
            type="textarea"
            border="solid 1px #545454"
            margin="0px 0px 0px 20px"
            onChangingTheText={setDescription}
          ></TextInput>
        </FlexBox>
        <FlexBox
          topBorder="0.5px solid #545454"
          width="100vw"
          justifyContent="flex-start"
          alignItems="flex-start"
          dir="column"
          padding="0px 0px 20px 0px"
        >
          <Text
            txt="Barter Service Needs - Optional"
            size="16px"
            weight="bold"
            padding="15px 0px 20px 20px"
          ></Text>
          <TextInput
            type="textarea"
            border="solid 1px #545454"
            margin="0px 0px 0px 20px"
            placeholder="Describe your barter service needs, if applicable"
            onChangingTheText={setIsBarter}
          ></TextInput>
        </FlexBox>
        <FlexBox
          topBorder="0px solid #545454"
          width="100vw"
          justifyContent="space-between"
          alignItems="flex-start"
          padding="0px 20px 20px 0px"
        >
          <FlexBox>
            <Text
              txt="Price"
              size="16px"
              weight="bold"
              padding="15px 0px 20px 20px"
            ></Text>
            <Input
              type="number"
              border="solid 1px #545454"
              margin="0px 0px 0px 20px"
              placeholder="$"
              width="70px"
              onChangingTheText={setPrice}
            ></Input>
          </FlexBox>

          <Button
            txt="Negotiable"
            margin="5px 0px 0px 0px"
            border={
              isNegotiableActive ? "solid 2px #4F4DB0" : "solid 2px #545454"
            }
            bgColor={isNegotiableActive ? "#4F4DB0" : "white"}
            color={isNegotiableActive ? "white" : "#545454"}
            width="fit-content"
            padding="20px"
            onClick={handleNegotiableButton}
          ></Button>
        </FlexBox>
        <FlexBox
          topBorder="0.5px solid #545454"
          width="100vw"
          justifyContent="space-between"
          alignItems="flex-start"
          padding="20px 20px 20px 0px"
        >
          <Text
            txt="Revision"
            size="16px"
            weight="bold"
            padding="15px 0px 20px 20px"
          ></Text>
          <Counter></Counter>
        </FlexBox>
        <FlexBox
          topBorder="0.5px solid #545454"
          width="100vw"
          padding="20px 20px 90px 0px"
        >
          <Button
            onClick={() => {
              console.log(
                keywords,
                whatIsTheCategoryOfThisPost,
                title,
                description,
                isBarter,
                price
              );
              setShowDownload("active");
            }}
            txt="Publish"
            size="20px"
            padding="22px"
            width="120px"
            color="white"
            border="solid 1px #545454"
            margin="10px 0px 0px 20px"
            bgColor="#4F4DB0"
          ></Button>
        </FlexBox>
        <AnimatePresence exitBeforeEnter>
          {showDownload === "active" && (
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
                  height="180vh"
                  onClose={() => setShowDownload("default")}
                  txt="Successfully Posted 😁"
                ></DownloadPopUp>
              </motion.div>
            </FlexBox>
          )}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}
