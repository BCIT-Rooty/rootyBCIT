import Input from "../inputs";
import { FlexBox } from "../../styles/globals";
import Text from "../text";
import { ImgPlaceholder } from "../../styles/globals";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import TelegramIcon from '@mui/icons-material/Telegram';
import { grey, purple } from '@mui/material/colors';

export default function ChatNavBar({
onChangingTheTextForChat= () => {},
onSubmitButtonClicked= () => {},
value,
}){
    function newFunction(input) {
        onChangingTheTextForChat(input)
    }
    return(
    <FlexBox width="100%" justifyContent="space-around" padding="10px" topBorder="1px #EDEDED solid" margin="10px 10px 20px 10px" position="fixed">
        <AddIcon fontSize="large" sx={{ color: grey[500] }}></AddIcon>
        <FlexBox>
            <Input value={value} onChangingTheText={newFunction} placeholder="Type a Message Here" width="75vw" />
        </FlexBox>
       <TelegramIcon onClick={(e) => onSubmitButtonClicked(e)} fontSize="large" sx={{ color: purple[900] }}/>
    </FlexBox>
    )
}




