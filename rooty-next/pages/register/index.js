import { FlexBox } from "../../styles/globals"
import Text from "../../components/text"
import Input from "../../components/inputs"
import Button from "../../components/button"
import { useState } from "react"
const listOfCategories = [
    "Broadcast & Media",
    "Computing",
    "Marketing",
    "Business & Finance",
    "Digital Arts & Design",
    "Tutoring",
  ];

export const Step1 = () => {
    return(
      <FlexBox width="100%" dir="column" alignItems="flex-start" justifyContent="flex-start" >
       <Text padding='30px 0px 10px 20px' size='18px' weight='500' txt="BCIT Email" color="white" ></Text>
        <Input bgImage="/bx-envelope.svg" type="email" placeholder='ex/jdoe@my.bcit.ca' margin="0px 20px 0px 20px" padding='0 0 0 55px' width="90vw" maxWidth="900px" justifyContent="flex-start"></Input>
        <Text padding='30px 0px 10px 20px' size='18px' weight='500' txt="Password" color="white" ></Text>
        <Input bgImage="/bx-lock.svg" type="password" placeholder='' margin="0px 20px 0px 20px" padding='0 0 0 55px' width="90vw" maxWidth="900px" justifyContent="flex-start" ></Input>
      </FlexBox> 
       
    )
}

export const Step2 = () => {
    return(
      <FlexBox width="100%" dir="column" alignItems="flex-start" justifyContent="flex-start" >   
        <Text padding='30px 0px 10px 20px' size='18px' weight='500' txt="Name" color="white" width="100vw" maxWidth="900px"></Text>
        <Input type="text" placeholder='First Name' margin="0px 20px 10px 20px" width="90vw" maxWidth="900px" justifyContent="flex-start"></Input>
        <Input type="text" placeholder='Last Name' margin="30px 20px 10px 20px" width="90vw" maxWidth="900px" justifyContent="flex-start"></Input>
      </FlexBox>
    )
}

export const Step3 = () => {
    return(
      <FlexBox width="100%" dir="column" alignItems="flex-start" justifyContent="flex-start" >   
        <FlexBox flexWrap="wrap" width="100vw" maxWidth="900px" justifyContent="space-between" padding="30px 20px 0px 20px">
            {listOfCategories.map((m) => (
            <Button key={m} txt={m} value={m} color="#545454" width="fit-content" padding="20px 5vw"/>
            ))}
        </FlexBox>
      </FlexBox>
    )
}

export const Step4 = () => {
    return(
      <FlexBox width="100%" dir="column" alignItems="flex-start" justifyContent="flex-start" >   
       <FlexBox padding='30px 20px 0px 20px' justifyContent="space-between" width="100vw" maxWidth="100%">
                  <Input type="search" placeholder='Add up to 5 Skills' 
                      // value={keywordButtonStateValue}
                      border="solid 1px #545454"
                      // onChangingTheText={setKeywordButtonStateValue}
                      width="65vw" maxWidth="80%"
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
      </FlexBox>
    )
}

export const Step5 = () => {
    return(
      <FlexBox width="100%" dir="column" alignItems="flex-start" justifyContent="flex-start" >   
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
                      margin="10px 20px 0px 20px"
                      placeholder="Describe your talents..."
                      width="90vw" 
                      maxWidth="900px" 
                      justifyContent="flex-start"
                    ></TextInput>
      </FlexBox>
    )
}