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
import { useRouter } from "next/router";
import TitlePage from "../../components/titlePage";
import Lottie from "lottie-react";
import LoadingAnimation from "../../public/loading.json"


export default function CreatePost(props) {
  const [showDownload, setShowDownload] = useState("default");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(0);
  const [isBarter, setIsBarter] = useState("");
  const [price, setPrice] = useState(0);
  const [keywords, setKeywords] = useState([]);
  const [postTitleError, setPostTitleError] = useState(false);
  const [noServiceError, setNoServiceError] = useState(false);
  const [noKeywords, setNoKeywords] = useState(false);
  const [noPhotoError, setNoPhotoError] = useState(false);
  const [noCategory, setNoCategory] = useState(false);
  const [noPriceError, setNoPriceError] = useState(false);
  const [keywordButtonStateValue, setKeywordButtonStateValue] = useState("");
  const [loading, setLoading] = useState(false)
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
  const router = useRouter();
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

  function handleKeywordsButtonClick() {
    const keywordWithoutSpaces = keywordButtonStateValue.trim();
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
    setErrorThatKeywordAlreadyExists(false);
    setErrorStateForEmptyInputKeyWord(false);

    setKeywords([...keywords, keywordWithoutSpaces]);
    setKeywordButtonStateValue("");
  }

  function removeKeyWordXButton(input) {
    setKeywords(keywords.filter((m) => m !== input));
  }

  const areThereKeywords = keywords.length !== 0;

  async function createPost() {

    if(photoUrl == "") {
      setNoPhotoError(true)
    } else {
      setNoPhotoError(false)
    }

    if (whatIsTheCategoryOfThisPost === "") {
      setNoCategory(true);
    } else {
      setNoCategory(false);
    }

    if (keywords.length === 0) {
      setNoKeywords(true);
    } else {
      setNoKeywords(false);
    }

    if (title === "" || title.trim() === "") {
      setPostTitleError(true);
    } else {
      setPostTitleError(false);
    }

    if (description === "" || description.trim() === "") {
      setNoServiceError(true);
    } else {
      setNoServiceError(false);
    }

    if (price === 0 || price === "") {
      setNoPriceError(true);
    } else {
      setNoPriceError(false);
    }


    if(photoUrl == "") {
      setNoPhotoError(true)
      return
    } else {
      setNoPhotoError(false)
    }


    if (title === "" || title.trim() === "") {
      setPostTitleError(true);
      return;
    } else {
      setPostTitleError(false);
    }

    if (description === "" || description.trim() === "") {
      setNoServiceError(true);
      return;
    } else {
      setNoServiceError(false);
    }

    if (price === 0 || price === "") {
      setNoPriceError(true);
      return;
    } else {
      setNoPriceError(false);
    }
    if (whatIsTheCategoryOfThisPost === "") {
      setNoCategory(true);
      return;
    } else {
      setNoCategory(false);
    }

    if (keywords.length === 0) {
      setNoKeywords(true);
      return;
    } else {
      setNoKeywords(false);
    }
    console.log(props)
    const axiosRequest = await axios
      .post("/api/createPost", {
        photoUrl,
        whatIsTheCategoryOfThisPost,
        keywords,
        title,
        description,
        isBarter,
        price,
        isNegotiableActive,
        count,
        userEmail: props.thisSession
      })
      .then((result) => {
        console.log(result);
      })
      .then(() => {
        setLoading(true)
        router.push("/categories");
        setLoading(false)
      });
    // setShowDownload("active");
  }

  return (
    <>
      <Wrapper
        padding= "0 0 50px 0"
        dir="column"
        height="fit-content"
      >
        <TitlePage txt="Create your Post"/>
        <FlexBox
          padding="20px 0px 20px 20px"
          topBorder="0.5px solid #545454"
          justifyContent="flex-start"
          width="100%"
          maxWidth="900px"
        >
          <Input type="file" onInsertPhotoInsideS3={uploadThePhotoToS3}></Input>
          {noPhotoError ? (
            <Toaster txt="You need one photo for your post" maxWidth="900px" margin="15px 0px 15px 0px"></Toaster>
          ) : (
            <></>
          )}
        </FlexBox>
        <FlexBox
          topBorder="0.5px solid #545454"
          justifyContent="flex-start"
          alignItems="flex-start"
          dir="column"
          padding="0px 0px 15px 0px"
          width="100%" maxWidth="900px"
        >
          <Text
            txt="Choose a Category"
            size="18px"
            weight="bold"
            padding="15px 0px 20px 20px"
          ></Text>
          <FlexBox
            flexWrap="wrap"
            justifyContent="space-between"
            padding="0px 20px 0px 20px"
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
                maxWidth="300px"
                whatIsTheStateOfTheAppForCategory={whatIsTheCategoryOfThisPost}
                ifThisIsTheCategoriesButtons={true}
                onClick={setWhatIsTheCategoryOfThisPost}
              />
            ))}
            </FlexBox>
            {noCategory ? (
              <Toaster txt="You need at least one category" maxWidth="900px" margin="5px 0px 15px 0px"></Toaster>
            ) : (
              <></>
            )}
          
        </FlexBox>
        <FlexBox
          topBorder="0.5px solid #545454"
          width="100%" maxWidth="900px"
          justifyContent="flex-start"
          alignItems="flex-start"
          dir="column"
          padding="0px 0px 20px 0px"
        >
          <Text
            txt="Post Title"
            size="18px"
            weight="bold"
            padding="15px 0px 20px 20px"
            width="100%" maxWidth="900px"
          ></Text>
          <Input
            placeholder="Type your Post's Title"
            type="search"
            border="solid 1px #545454"
            margin="0px 0px 0px 20px"
            onChangingTheText={setTitle}
            width="91vw" maxWidth="880px"
          ></Input>
          {postTitleError ? (
            <Toaster txt="You need a post title!" maxWidth="900px" margin="15px 0px 15px 0px"></Toaster>
          ) : (
            <></>
          )}
        </FlexBox>
        <FlexBox
          topBorder="0.5px solid #545454"
          width="100%" maxWidth="900px"
          justifyContent="flex-start"
          alignItems="flex-start"
          dir="column"
          padding="0px 0px 20px 0px"
        >
          <Text
            txt="Type Keywords"
            size="18px"
            weight="bold"
            padding="15px 0px 20px 20px"
            width="100%" maxWidth="900px"
          ></Text>
          <FlexBox width="100%" maxWidth="900px" justifyContent="flex-start" padding="0 20px 0 20px">
            <Input
              placeholder="Type Keywords for your Post"
              type="search"
              value={keywordButtonStateValue}
              border="solid 1px #545454"
              onChangingTheText={setKeywordButtonStateValue}
              width="67vw" maxWidth="760px"
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
          <FlexBox width="100%" maxWidth="850px" padding="25px 20px 10px 20px" flexWrap="wrap">
            {areThereKeywords ? (
              keywords.map((m) => (
                <Button
                  key={m}
                  txt={m}
                  width="fit-content"
                  height="30px"
                  type="keyword"
                  padding="10px 10px"
                  fontWeight="300"
                  buttonMargin="0px 0px 0px 10px"
                  border="solid 1px #545454"
                  color="#545454"
                  onRemoveKeyword={removeKeyWordXButton}
                ></Button>
              ))
            ) : (
              <></>
            )}
          </FlexBox>
          {errorStateForEmptyInputKeyWord ? (
            <Toaster txt="You must insert atleast one keyword" maxWidth="900px" margin="15px 0px 15px 0px"></Toaster>
          ) : (
            <></>
          )}
          {errorThatKeywordAlreadyExists ? (
            <Toaster txt="This keyword is already being used" maxWidth="900px" margin="15px 0px 15px 0px"></Toaster>
          ) : (
            <></>
          )}
          {noKeywords ? (
            <Toaster txt="You need at least one Keyword"maxWidth="900px" margin="15px 0px 15px 0px"></Toaster>
          ) : (
            <></>
          )}
        </FlexBox>
        
        <FlexBox
          topBorder="0.5px solid #545454"
          width="100%" maxWidth="900px"
          justifyContent="flex-start"
          alignItems="flex-start"
          dir="column"
          padding="0px 0px 20px 0px"
        >
          <Text
            txt="Describe your Service"
            size="18px"
            weight="bold"
            padding="15px 0px 20px 20px"
          ></Text>
          <TextInput
            placeholder="Sell yourself! Describe what awesome talents you have!"
            type="textarea"
            border="solid 1px #545454"
            margin="0px 0px 0px 20px"
            onChangingTheText={setDescription}
            width="91vw" maxWidth="880px"
          ></TextInput>
          {noServiceError ? (
            <Toaster txt="You need a post description!" maxWidth="900px" margin="15px 0px 15px 0px"></Toaster>
          ) : (
            <></>
          )}
        </FlexBox>
        <FlexBox
          topBorder="0.5px solid #545454"
          width="100%"
          maxWidth="900px"
          justifyContent="flex-start"
          alignItems="flex-start"
          dir="column"
          padding="0px 0px 20px 0px"
        >
          <Text
            txt="Barter Service Needs - Optional"
            size="18px"
            weight="bold"
            padding="15px 0px 20px 20px"
          ></Text>
          <TextInput
            type="textarea"
            border="solid 1px #545454"
            margin="0px 0px 0px 20px"
            placeholder="Describe your barter service needs, if applicable"
            onChangingTheText={setIsBarter}
            width="91vw" maxWidth="880px"
          ></TextInput>
        </FlexBox>
        <FlexBox
          topBorder="0px solid #545454"
          width="100%"
          maxWidth="900px"
          justifyContent="space-between"
          alignItems="flex-start"
          padding="0px 20px 20px 0px"
        >
          <FlexBox>
            <Text
              txt="Price"
              size="18px"
              weight="bold"
              padding="15px 0px 20px 20px"
              width="100%"
          maxWidth="900px"
            ></Text>
            <Input
              type="number"
              border="solid 1px #545454"
              margin="0px 0px 0px 20px"
              value={price}
              placeholder="$"
              width="70px"
              onChangingTheText={setPrice}
              min="0"
              max="500"
            ></Input>
          </FlexBox>

          <Button
            txt="Barter"
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
        {noPriceError ? <Toaster txt="You need a price!" maxWidth="900px" margin="15px 0px 30px 0px"></Toaster> : <></>}
        <FlexBox
          topBorder="0.5px solid #545454"
          width="100%"
          maxWidth="900px"
          justifyContent="space-between"
          alignItems="flex-start"
          padding="20px 20px 20px 0px"
        >
          <Text
            txt="Revision"
            size="18px"
            weight="bold"
            padding="15px 0px 20px 20px"
            width="100%"
          maxWidth="900px"
          ></Text>
          <Counter onCounterValue={setCount}></Counter>
        </FlexBox>
        <FlexBox
          topBorder="0.5px solid #545454"
          width="100%"
          maxWidth="900px"
          padding="20px 20px 30px 0px"
        >
          <Button
            onClick={() => {
              console.log(
                keywords,
                whatIsTheCategoryOfThisPost,
                title,
                description,
                isBarter,
                price,
                isNegotiableActive,
                count
              );
              createPost();
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
          {/* {showDownload === "active" && (
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
                  height="163vh"
                  onClose={() => setShowDownload("default")}
                  txt="Successfully Posted 😁"
                ></DownloadPopUp>
              </motion.div>
            </FlexBox>
          )} */}
          {loading === "active" && (
            <FlexBox position="absolute" left="0" zIndex="30">
              <Wrapper onClick={onClose} height={height} position="fixed" bgColor="rgba(0, 0, 0, 0.6)">
                <Lottie style={{width:200, height:200}} animationData={LoadingAnimation} loop={true}></Lottie>
              </Wrapper>
            </FlexBox>
          )}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}
