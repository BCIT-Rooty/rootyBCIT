import { FlexBox } from "../../styles/globals";
import GradientCard from "../gradientCard";
import { HorizontalScrollContainer } from "../../styles/globals";
import { reviewText } from "../../server/database";
import Review from "./review";
import Text from "../text";
import { Icon } from "semantic-ui-react";
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
        <FlexBox  dir="column" borderRadius="15px" width="251px" height="262px" weight="regular" bgImage="" bgColor="#E5E5FC" color="#101010" padding="10px" margin="7px" justifyContent="flex-start">
            {/* <Review name={reviewText[0].name} program={reviewText[0].program} image={bgImage1} fifth="active icon" comment="" boxHeight="70px" borderColor="transparent"></Review> */}
            <FlexBox width="100%" minHeight={boxHeight} border={borderColor} alignItems="flex-start" padding="10px">
                <FlexBox width = "20%" padding="10px 0px 10px 0px">
                    <ImgPlaceholder height="40px" width="40px" bgImage={image} borderRadius="50%"></ImgPlaceholder>
                </FlexBox>
                <FlexBox dir="column" alignItems="flex-start" margin="10px" width = "80%">
                    <FlexBox justifyContent="space-between" alignItems="center" width="100%">
                        <Text txt={name} weight="bold" size={nameSize}></Text>
                        <FlexBox padding="0 10px 0 10px">
                            <Rating name="read-only" value={value} readOnly />
                        </FlexBox>
                    </FlexBox>
                    <Text txt={program} color="#232323"></Text>
                    <Text txt={comment} padding="10px 0px 0px 0px" color="#232323"></Text>
                </FlexBox>
          </FlexBox>
            <Text txt={reviewText[0].text} size="16px" align="left" weight="regular"></Text>
        </FlexBox>
    )
}