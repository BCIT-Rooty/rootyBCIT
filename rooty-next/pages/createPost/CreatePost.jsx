// make it so there is only one category, change the categories state name and price should only be numbers




import { useState, useEffect } from "react";
import axios from "axios";
import { TextInput } from "../../components/inputs";
import { FlexBox, Wrapper } from "../../styles/globals";
import Input from "../../components/inputs";
import Button from "../../components/button";
import Text from "../../components/text";
import DownloadPopUp from "../../components/downloadPopUp";
import { motion, AnimatePresence } from "framer-motion";

export default function CreatePost(props) {
  const [showDownload, setShowDownload] = useState("default");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isBarter, setIsBarter] = useState("");
  const [price, setPrice] = useState(0);
  const [postKeywords, setPostKeywords] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [keywordButtonStateValue, setKeywordButtonStateValue] = useState("")
  const [listOfCategories, setListOfCategories] = useState([
    "Broadcast & Media",
    "Digital Arts & Design",
    "Business & Finance",
    "Marketing",
    "Tutoring",
    "Computing",
  ]);
  const [potentialPostKeywords, setPotentialPostKeywords] = useState([
    "Audio Mix",
    "Web Design",
    "Logo Design",
    "Anna",
  ]);
  const [whatIsTheCategoryOfThisPost, setWhatIsTheCategoryOfThisPost] =
    useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [photoInput, setPhotoInput] = useState("");
  // const [barterValues, setBarterValues] = useState(["Barter", "Cash"]);
  async function handleSubmit(e) {
    e.preventDefault();
    const theCategoryValue = getCheckedRadioValue("categories");
    await uploadThePhotoToS3().then((res) => {
      props.onSubmitForm(
        title,
        description,
        isBarter,
        theCategoryValue,
        postKeywords,
        res
      );
    });
  }


  function handleAddTagsToThePost(inputValue) {
    if (!postKeywords.includes(inputValue)) {
      setPostKeywords([...postKeywords, inputValue]);
    } else {
      setPostKeywords(postKeywords.filter((m) => m !== inputValue));
    }
  }

  // https://stackoverflow.com/questions/8666229/how-to-get-value-from-form-input-type-radio
  function getCheckedRadioValue(radioGroupName) {
    var rads = document.getElementsByName(radioGroupName),
      i;
    for (i = 0; i < rads.length; i++) if (rads[i].checked) return rads[i].value;
    return null;
  }

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

  function handleKeywords(input) {
    setKeywordButtonStateValue(input)
    console.log(input);
  }

  function handleKeywordsButtonClick() {
    setKeywords([...keywords, keywordButtonStateValue])
    console.log(keywords)
    setKeywordButtonStateValue("")
  }

  const areThereKeywords = (keywords.length !== 0)

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
          border="0.5px solid #545454"
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
          <FlexBox flexWrap="wrap">
            {listOfCategories.map((m) => (
              <Button
                key={m}
                txt={m}
                value={m}
                border="solid 2px #545454"
                bgColor="white"
                color="#545454"
                width="fit-content"
                padding="15px"
                onClick={handleAddTagsToThePost}
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
          {areThereKeywords ? keywords.map(m => <p>{m}</p>) : <></>}
          <Input
            placeholder="Type Keywords for your Post"
            type="search"
            border="solid 1px #545454"
            margin="0px 0px 0px 20px"
            onChangingTheText={handleKeywords}
          ></Input>
          <Button
                key="handleKeywordAdding"
                txt="Add Keyword"
                value={keywordButtonStateValue}
                border="solid 2px #545454"
                bgColor="white"
                color="#545454"
                width="fit-content"
                padding="15px"
                onClick={handleKeywordsButtonClick}
              />
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
          justifyContent="flex-start"
          alignItems="flex-start"
          padding="0px 0px 20px 0px"
        >
          <Text
            txt="Price"
            size="16px"
            weight="bold"
            padding="15px 0px 20px 20px"
          ></Text>
          <Input
            type="text"
            border="solid 1px #545454"
            margin="10px 0px 0px 20px"
            placeholder=" "
            width="60px"
            onChangingTheText={setPrice}
          ></Input>
        </FlexBox>
        <FlexBox padding="0px 0px 85px 0px" width="100vw">
          <Button
            onClick={() => {
              console.log(keywords)
              setShowDownload("active");
            }}
            txt="Publish"
            size="20px"
            padding="22px"
            width="120px"
            color="white"
            border="solid 1px #545454"
            margin="10px 0px 0px 20px"
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
