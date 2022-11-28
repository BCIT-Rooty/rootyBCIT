import styled from "styled-components";
import Image from 'next/image';
import { FlexBox, Wrapper, ImgPlaceholder } from "../../styles/globals";
import Text from "../text";
import { Icon } from "semantic-ui-react";
import { Heart } from "../icons/icons";
import DisabledStars from "../icons/starsDisabled";
import Rating from '@mui/material/Rating';
import { useState } from 'react';
// import Avatar from '@mui/material/Avatar';


export default function Review({
    name="name",
    comment="Comment",
    program="D3",
    image="/3081629.jpg",
    one="active icon", 
    second="active icon", 
    third="active icon", 
    fourth="active icon", 
    fifth="icon",
    boxHeight="108px",
    nameSize="16px",
    borderColor="0.5px solid #D9D9D9"
    // showStars=true
}) {
    const [value, setValue] = useState(4)

    return (
          <FlexBox width="100%" minHeight={boxHeight} border={borderColor} alignItems="flex-start" padding="10px">
                <FlexBox width = "20%" padding="10px 0px 10px 0px">
                    <ImgPlaceholder height="40px" width="40px" bgImage={image} borderRadius="50%"></ImgPlaceholder>
                </FlexBox>
                <FlexBox dir="column" alignItems="flex-start" margin="10px" width = "80%">
                    <FlexBox justifyContent="space-between" alignItems="center" width="100%">
                        <Text txt={name} weight="bold" size={nameSize}></Text>
                        <FlexBox padding="0 10px 0 10px">
                            <Rating name="read-only" value={value} readOnly />
                            {/* <DisabledStars
                            one={one}
                            second={second}
                            third={third}
                            fourth={fourth}
                            fifth={fifth}
                            ></DisabledStars> */}
                        </FlexBox>
                    </FlexBox>
                    <Text txt={program} color="#232323"></Text>
                    <Text txt={comment} padding="10px 0px 0px 0px" color="#232323"></Text>
                </FlexBox>
          </FlexBox>
    );
  };

