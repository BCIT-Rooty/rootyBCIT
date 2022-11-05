import styled from "styled-components";
import Image from 'next/image';
import { FlexBox, Wrapper, ImgPlaceholder } from "../../styles/globals";
import Text from "../text";
import { Icon } from "semantic-ui-react";
import { Heart } from "../icons/icons";
import DisabledStars from "../icons/starsDisabled";

export default function DialogueBox({
    image="/face3.jpg",
    postTitle="Logo Design",
    userName="Samantha Brown",
    date="17/6",
    type="read",
    onClick=() => {},
    userTwo,
    chatRoomId,
    userOneId,
    userTwoId,

}){
    return(
        <FlexBox width="88%" height="60px" justifyContent="flex-start" padding="0 3px 0 3px" margin="9px" onClick={()=> {onClick(chatRoomId)}}>
                <FlexBox width="20%"><ImgPlaceholder margin="0 5px 0 5px" height="50px" width="50px" bgImage={image} borderRadius="50%"></ImgPlaceholder></FlexBox>
                <FlexBox width="90%" dir="column" alignItems="flex-start" margin="0 10px 0 13px">
                    <FlexBox width="100%" justifyContent="space-between">
                        <Text txt={postTitle} size="18px" padding="2px"></Text>
                        <Text size="14px" txt={date} padding="3px"></Text>
                    </FlexBox>
                    <FlexBox width="100%" justifyContent="space-between">
                        <Text txt={userName} size="15px" padding="2px"></Text> 
                        {type==="unread" && <FlexBox margin="3px" width="13px" height="13px" bgColor="#4F4DB0" borderRadius="50%"></FlexBox>}
                    </FlexBox>
                </FlexBox>
          </FlexBox>
    )
}