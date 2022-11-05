import Input from "../inputs";
import { FlexBox } from "../../styles/globals";
import Text from "../text";
import { ImgPlaceholder } from "../../styles/globals";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import TelegramIcon from '@mui/icons-material/Telegram';
import { grey, purple } from '@mui/material/colors';

export default function ChatNavBar({
onChangingTheText= () => {},
onSubmitButtonClicked= () => {},
value,
}){
    function newFunction(input) {
        console.log(input)
        onChangingTheText(input)
    }
    return(
    <FlexBox width="100%" justifyContent="space-around" padding="10px" topBorder="1px #EDEDED solid" margin="10px 10px 70px 10px">
        <AddIcon fontSize="large" sx={{ color: grey[500] }}></AddIcon>
        <FlexBox>
            <Input placeholder="Type a Message Here" width="75vw" />
        </FlexBox>
       <button onClick={(e) => onSubmitButtonClicked(e) }> <TelegramIcon fontSize="large" sx={{ color: purple[900] }}/> </button>
    </FlexBox>
    )
}




