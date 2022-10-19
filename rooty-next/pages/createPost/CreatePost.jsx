import { useState, useEffect } from "react";
import axios from "axios";
import SubmitButton from "../../components/buttons/SubmitButton";
import ImageInputS3 from "../../components/inputs/ImageInputS3";
import TextInput from "../../components/inputs/TextInput";
import KeywordButton from "../../components/buttons/KeyWordButton";
import RadioInputComponent from "../../components/inputs/RadioInputComponent";

export default function CreatePost(props) {
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
    "Anna"
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
      <main>
        <form>
          <div>
            <h1>Create your post</h1>
            <SubmitButton
              onSubmitButtonClicked={handleSubmit}
              textInsideTheButton={"Done"}
            />
          </div>
          <ImageInputS3 onInsertPhotoInsideS3={handleS3Url} />
          {/* change this please Sohrab so it makes a ImageInputS3 tag */}

          <button onClick={(e) => handlePreventDefault(e)}>+</button>
          {
            // thisButton should make the radio button disappear and reappear
          }
          <button onClick={(e) => handlePreventDefault(e)}>
            Choose a category
          </button>
          <RadioInputComponent
            radioInputTopicArray={listOfCategories}
            radioInputTopic={"categories"}
            radioFunctionInput={setWhatIsTheCategoryOfThisPost}
          />
          <KeywordButton
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
      </main>
    </>
  );
}
