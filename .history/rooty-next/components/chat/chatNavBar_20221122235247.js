import { FlexBox } from "../../styles/globals";
import Text from "../text";
import { ImgPlaceholder } from "../../styles/globals";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import TelegramIcon from '@mui/icons-material/Telegram';
import { grey, purple } from '@mui/material/colors';
import InputFile from "../../components/inputs/index";
import Input from "../../components/inputs";
import axios from "axios";


export default function ChatNavBar({
onChangingTheTextForChat= () => {},
onSubmitButtonClicked= () => {},
value,
position={position},
}){
    const [photoUrl, setPhotoUrl] = useState("");

    function newFunction(input) {
        onChangingTheTextForChat(input)
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

    return(
    <FlexBox width="100%" justifyContent="space-around" padding="10px" topBorder="1px #EDEDED solid" top="93vh" position={position} zIndex="20" bgColor="white">
       <AddIcon onClick={(e) => onSubmitButtonClicked(e)} fontSize="large" sx={{ color: grey[500] }} />
       {/* <Input type="file" onInsertPhotoInsideS3={uploadThePhotoToS3}></Input> */}
        <FlexBox>
            <Input value={value} onChangingTheText={newFunction} placeholder="Type a Message Here" width="75vw" />
        </FlexBox>
       <TelegramIcon onClick={(e) => onSubmitButtonClicked(e)} fontSize="large" sx={{ color: purple[900] }}/>
    </FlexBox>
    )
}




