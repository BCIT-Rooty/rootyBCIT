import { useState, useEffect } from "react";
// import axios from "axios";
// import SubmitButton from "../../components/sohrabs buttons/SubmitButton";
// import ImageInputS3 from "../../components/sohrabs inputs/ImageInputS3";
// import TextInput from "../../components/sohrabs inputs/TextInput";
import { TextInput } from "../../components/inputs";
// import KeywordButton from "../../components/sohrabs buttons/KeyWordButton";
// import RadioInputComponent from "../../components/inputs/RadioInputComponent";
import { FlexBox, Wrapper } from "../../styles/globals";
// import Input, {TextIn} from "../components/inputs";
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
  const [postKeywords, setPostKeywords] = useState([]);
  const [listOfCategories, setListOfCategories] = useState([
    "Broadcast & Media",
    "Digital Arts & Design",
    "Business & Finance",
    "Marketing Management",
    "Tutoring",
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
  const [barterValues, setBarterValues] = useState(["Barter", "Cash"]);
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
      // setTitle("");
      // setDescription("");
      // setIsBarter("");
      // setPhotoUrl("");
    });
  }

  function handlePreventDefault(e) {
    e.preventDefault();
  }

  function handleAddTagsToThePost(e, inputValue) {
    e.preventDefault();
    // console.log(inputValue)
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
    return null; // or undefined, or your preferred default for none checked
  }

  async function uploadThePhotoToS3() {
    if (photoInput == false) {
      let theUrlToReturn = "no Url bro";
      return theUrlToReturn;
    }
    let theUrlToReturn;
    await axios.get("/api/s3").then(async (res) => {
      const theUrlData = res.data.url;
      await axios({
        method: "PUT",
        url: theUrlData,
        data: photoInput.files[0],
      }).then(() => {
        const [photoUrlRet] = theUrlData.split("?");
        setPhotoUrl(photoUrlRet);
        theUrlToReturn = photoUrlRet;
      });
    });
    return theUrlToReturn;
  }

  async function handleS3Url(e) {
    e.preventDefault();
    setPhotoInput(e.target);
  }

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
          <Input type="file"></Input>
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
            <Button
              txt="Broadcast & Media"
              border="solid 2px #545454"
              bgColor="white"
              color="#545454"
              width="fit-content"
              padding="15px"
            ></Button>
            <Button
              txt="Business & Finance"
              border="solid 2px #545454"
              bgColor="white"
              color="#545454"
              width="fit-content"
              padding="15px"
            ></Button>
            <Button
              txt="Computing"
              border="solid 2px #545454"
              bgColor="white"
              color="#545454"
              width="fit-content"
              padding="15px"
            ></Button>
            <Button
              txt="Digital Arts & Media"
              border="solid 2px #545454"
              bgColor="white"
              color="#545454"
              width="fit-content"
              padding="15px"
            ></Button>
            <Button
              txt="Marketing"
              border="solid 2px #545454"
              bgColor="white"
              color="#545454"
              width="fit-content"
              padding="15px"
            ></Button>
            <Button
              txt="Tutoring"
              border="solid 2px #545454"
              bgColor="white"
              color="#545454"
              width="fit-content"
              padding="15px"
            ></Button>
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
          <Input
            placeholder="Type Keywords for your Post"
            type="search"
            border="solid 1px #545454"
            margin="0px 0px 0px 20px"
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
          ></Input>
        </FlexBox>
        <FlexBox padding="0px 0px 85px 0px" width="100vw">
          <Button
            onClick={() => setShowDownload("active")}
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

        {/* <TextInput
            inputTitle={"Describe your service"}
            valueOfTheInput={description}
            onChangingTheText={setDescription}
          /> */}

        {/* <main>
        <form>
          <div>
            <h1>Create your post</h1>
            <SubmitButton
              onSubmitButtonClicked={handleSubmit}
              textInsideTheButton={"Done"}
            />
          </div> */}
        {/* <ImageInputS3 onInsertPhotoInsideS3={handleS3Url} /> */}
        {/* change this please Sohrab so it makes a ImageInputS3 tag */}

        {/* <button onClick={(e) => handlePreventDefault(e)}>+</button> */}

        {/* thisButton should make the radio button disappear and reappear */}

        {/* <button onClick={(e) => handlePreventDefault(e)}>
            Choose a category
          </button> */}
        {/* <RadioInputComponent
            radioInputTopicArray={listOfCategories}
            radioInputTopic={"categories"}
            radioFunctionInput={setWhatIsTheCategoryOfThisPost}
          /> */}
        {/* <KeywordButton
            keyWords={potentialPostKeywords}
            onAddTagsToThePost={handleAddTagsToThePost}
          />
          <TextInput
            inputTitle={"Write your title"}
            valueOfTheInput={title}
            onChangingTheText={setTitle}
          />
          <TextInput
            inputTitle={"Describe your service"}
            valueOfTheInput={description}
            onChangingTheText={setDescription}
          />
          <RadioInputComponent
            radioInputTopicArray={barterValues}
            radioInputTopic={"BarterOrCash"}
            radioFunctionInput={setIsBarter}
          />
        </form>
      </main> */}
      </Wrapper>
    </>
  );
}
