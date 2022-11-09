import Head from 'next/head'
import styled from 'styled-components'
import {FlexBox, ImgPlaceholder} from '../styles/globals'
import Text from '../components/text'
import Input, { TextInput } from '../components/inputs'
import Button from '../components/button'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
// export async function getStaticProps(context) {
//   return {
//     props: { noLayout: true },
//   }
// }


export default function Home() {

  const r = useRouter()
  const [steps, setSteps] = useState(1)
  const [headerText, setHeaderText] = useState("")
  const [headerImage, setHeaderImage] = useState("")
  const [listOfCategories, setListOfCategories] = useState([
    "Broadcast & Media",
    "Computing",
    "Marketing",
    "Business & Finance",
    "Digital Arts & Design",
    "Tutoring",
  ]);
  useEffect((Math)=>{
    if(steps===1){
      setHeaderText("Welcome")
      setHeaderImage("/signin1.png")
    }
    if(steps===2){
      setHeaderText("Set up your Profile")
      setHeaderImage("/signin2.png")
    }
    if(steps===3){
      setHeaderText("What Program are you in?")
      setHeaderImage("/signin3.png")
    }
    if(steps===4){
      setHeaderText("What Skills do you Offer?")
      setHeaderImage("/signin4.png")
    }
    if(steps===5){
      setHeaderText("Create Profile")
      setHeaderImage("/signin5.png")
    }
  }, [steps]);

  // const [keywordButtonStateValue, setKeywordButtonStateValue] = useState("");
  // const areThereKeywords = keywords.length !== 0;
  // const [keywords, setKeywords] = useState([]);
  const [noPhotoError, setNoPhotoError] = useState(false);

  const HandleSteps = (newStep) =>{
    setSteps(newStep)
    if(steps >= 5){
      r.push("/home")
    }
  }

  // function handleKeywordsButtonClick() {
  //   const keywordWithoutSpaces = keywordButtonStateValue.trim();
  //   if (keywordButtonStateValue == "" || keywordWithoutSpaces == "") {
  //     if (errorThatKeywordAlreadyExists) {
  //       setErrorThatKeywordAlreadyExists(false);
  //     }
  //     setErrorStateForEmptyInputKeyWord(true);
  //     return;
  //   } else if (keywordButtonStateValue !== "" && keywordWithoutSpaces !== "") {
  //     setErrorStateForEmptyInputKeyWord(false);
  //   }
  //   if (
  //     keywords.includes(keywordButtonStateValue) ||
  //     keywords.includes(keywordWithoutSpaces)
  //   ) {
  //     setErrorThatKeywordAlreadyExists(true);
  //     return;
  //   } else if (
  //     !keywords.includes(keywordButtonStateValue) &&
  //     errorThatKeywordAlreadyExists !== true &&
  //     keywords.includes(keywordWithoutSpaces)
  //   ) {
  //     setErrorThatKeywordAlreadyExists(false);
  //   }
  //   setErrorThatKeywordAlreadyExists(false);
  //   setErrorStateForEmptyInputKeyWord(false);

  //   setKeywords([...keywords, keywordWithoutSpaces]);
  //   setKeywordButtonStateValue("");
  // }
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

  return (
    <FlexBox dir="column" bgColor="#FFFDFA">
      <Head>
        <title>Welcome to Rooty</title>
      </Head>
      <FlexBox width="100vw" height="30vh">
        <FlexBox bgImage="/back.png" onClick={()=>HandleSteps(Math.max(1, steps - 1))} width="40px" height="40px" position="absolute" top="40px" left="20px"></FlexBox>
        <ImgPlaceholder width="200px" height="200px" bgImage={headerImage}></ImgPlaceholder>
      </FlexBox>
      <FlexBox width="100vw" height="70vh" bgColor="#4F4DB0" borderRadius="15px 15px 0 0" justifyContent="flex-start" alignItems="flex-start" dir="column" padding="0px 0px 50px 0px" boxShadow="0px -4px 9px rgba(0, 0, 0, 0.25);">
      <Text padding='60px 20px 0px 20px' size='42px' weight='600' txt={headerText} color="white"></Text>
        {steps === 1 && <div>
          <Text padding='30px 0px 10px 20px' size='18px' weight='500' txt="BCIT Email" color="white"></Text>
          <Input bgImage="/bx-envelope.svg" type="email" placeholder='ex/jdoe@my.bcit.ca' margin="0px 0px 0px 20px" padding='0 0 0 45px'></Input>
          <Text padding='30px 0px 10px 20px' size='18px' weight='500' txt="Password" color="white"></Text>
          <Input bgImage="/bx-lock.svg" type="password" placeholder='' margin="0px 0px 0px 20px" padding='0 0 0 45px'></Input>
          <Text padding='10px 4vw 10px 20px' size='14px' weight='500' txt="Forgot Password?" color="white" textDecor="underline" width="100vw" justifyContent="flex-end"></Text>
          </div>
        }
        {steps === 2 && <div>
          {/* <Text padding='60px 20px 0px 20px' size='42px' weight='600' txt='Set up your profile' width="90vw" color="white"></Text> */}
          <Text padding='30px 0px 10px 20px' size='18px' weight='500' txt="Name" color="white"></Text>
          <Input type="text" placeholder='First Name' margin="0px 0px 20px 20px"></Input>
          <Input type="text" placeholder='Last Name' margin="0px 0px 0px 20px"></Input>
          </div>
        }
        {steps === 3 && <div>
          {/* <Text padding='60px 20px 0px 20px' size='42px' weight='600' txt='What program are you in?' width="90vw" color="white"></Text> */}
          <FlexBox flexWrap="wrap" width="100vw" justifyContent="space-between" padding="30px 20px 0px 20px">
            {listOfCategories.map((m) => (
              <Button key={m} txt={m} value={m} color="#545454" width="fit-content" padding="20px 5vw"/>
            ))}
          </FlexBox>
          </div>
        }
        {steps === 4 && <div>
          {/* <Text padding='60px 20px 30px 20px' size='42px' weight='600' txt='What skills do you offer?' width="90vw" color="white"></Text> */}
          <FlexBox padding='30px 20px 0px 20px' justifyContent="space-between" width="100vw">
          <Input type="search" placeholder='Add up to 5 Skills' 
              // value={keywordButtonStateValue}
              border="solid 1px #545454"
              // onChangingTheText={setKeywordButtonStateValue}
              width='60vw'
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
              // onClick={handleKeywordsButtonClick}
            />
            </FlexBox>
          {/* <FlexBox width="95vw" padding="25px 0px 10px 5vw" flexWrap="wrap">
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
          </FlexBox> */}
          {/* {errorStateForEmptyInputKeyWord ? (
            <Toaster txt="You must insert atleast one keyword"></Toaster>
          ) : (
            <></>
          )}
          {errorThatKeywordAlreadyExists ? (
            <Toaster txt="This keyword is already being used"></Toaster>
          ) : (
            <></>
          )}
          {noKeywords ? (
            <Toaster txt="You need at least one Keyword"></Toaster>
          ) : (
            <></>
          )} */}
          </div>
        }
        {steps === 5 && <div>
          {/* <Text padding='60px 20px 30px 20px' size='42px' weight='600' txt='Create Profile' width="90vw" color="white"></Text> */}
          <Text padding='30px 20px 20px 20px' size='18px' weight='500' txt='Upload your Profile Picture' width="90vw" color="white"></Text>
          <FlexBox justifyContent="flex-start" padding="0 0 0 20px">
          <Input type="file" onInsertPhotoInsideS3={uploadThePhotoToS3} bgColor="white" brImage="30px"></Input>
          {noPhotoError ? (
            <Toaster txt="You need one photo for your post"></Toaster>
          ) : (
            <></>
          )}
          </FlexBox>
          <TextInput type="textarea"
            border="solid 1px #545454"
            margin="30px 0px 0px 20px"
            placeholder="Describe your talents..."
          ></TextInput>
          </div>
        }
      <FlexBox width='100vw' padding="0px 20px 0px 20px" position="absolute" bottom="70px">
            <Button type='next' txt={steps <= 4 && "Next" || "Finish"} color="black" width="90vw" onNext={()=>HandleSteps(Math.min(5, steps + 1))} size="21px" fontWeight="700" padding="25px"></Button>
      </FlexBox>
        
      </FlexBox>
     
    </FlexBox>
  )
}
