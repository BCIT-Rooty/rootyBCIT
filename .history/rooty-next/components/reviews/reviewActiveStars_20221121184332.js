import styled from "styled-components";
import Image from 'next/image';
import { FlexBox, Wrapper, ImgPlaceholder } from "../../styles/globals";
import Text from "../text";
import { Icon } from "semantic-ui-react";
import { Heart } from "../icons/icons";
import DisabledStars from "../icons/starsDisabled";
import { useState } from 'react';
import Rating from '@mui/material/Rating';

export default function ReviewActiveStars({
    name="name",
    comment="Comment",
    program="D3",
    image="/3081629.jpg",
    boxHeight="108px",
    nameSize="16px",
    borderColor="0.5px solid #D9D9D9"
}){

    const [value, setValue] = useState(4)

    return(
         <FlexBox width="100%" minHeight={boxHeight} border={borderColor} alignItems="center" padding="10px 20px">

            {/* <FlexBox > */}
            <FlexBox width = "20%" padding="10px 0px 10px 0px">
                <ImgPlaceholder height="40px" width="40px" bgImage={image} borderRadius="50%"></ImgPlaceholder>
            </FlexBox>
         <FlexBox dir="column" alignItems="flex-start" margin="10px" width = "80%">
             <FlexBox justifyContent="space-between" width="100%" alignItems="flex-start">
                 <FlexBox dir="column" alignItems="flex-start">
                 <Text txt={name} weight="bold" size={nameSize}></Text>
                 <Text txt={program} color="#232323"></Text>
            </FlexBox>
        </FlexBox>
        </FlexBox>

                 <FlexBox padding="0 10px 0 10px" dir="column" >
                            <Rating name="read-only" value={value} readOnly />
                            <Text txt="4.0" weight="bold" size="21px"></Text>
                </FlexBox>
             {/* </FlexBox> */}
   </FlexBox>
    )
}