import Input from "../inputs";
import { FlexBox } from "../../styles/globals";
import Text from "../text";
import { ImgPlaceholder } from "../../styles/globals";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import TelegramIcon from '@mui/icons-material/Telegram';
import { grey, purple } from '@mui/material/colors';

export default function ChatNavBar({

}){
    return(
    <FlexBox width="100%">
        <AddIcon fontSize="large" sx={{ color: grey[500] }}></AddIcon>
        <FlexBox>
            <Input placeholder="Type a Message Here" width="70vw%"></Input>
        </FlexBox>
        <TelegramIcon fontSize="large" sx={{ color: purple[900] }}></TelegramIcon>
    </FlexBox>
    )
}




