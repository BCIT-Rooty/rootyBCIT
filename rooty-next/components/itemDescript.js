import styled from "styled-components";
import Image from 'next/image';
import { FlexBox, Wrapper, ImgPlaceholder } from "../styles/globals";
import Text from "./text";
import { Icon } from "semantic-ui-react";
import { Heart } from "./icons/icons";
import Review from "./reviews/review";
import DisabledStars from "./icons/starsDisabled";
import ReviewHorizontalScroll from "./reviews/reviewCards";

export default function ItemDescription({img="/vector-drawing.jpg"}) {


  return (
    <FlexBox dir="column" width="100%" padding="0">
    <ImgPlaceholder bgImage={img} width="100%" height="328px"></ImgPlaceholder>
    <Review name="Joyce" nameSize="21px" comment="" program="Video and Animation" boxWidth="73px" image="/2205_w037_n003_408b_p1_408.jpg"></Review> 
    <FlexBox  dir="column" alignItems="left" width="100%" padding="0 30px 0 30px" minHeight="90px" border="0.5px solid rgba(191, 191, 191, 1)">
        <Text txt='1-2 minute Motion Graphic editor' size="21px"></Text>
        <Text txt='Digital Arts and Design' color="grey"></Text>
    </FlexBox>
    <FlexBox  dir="column" alignItems="left" width="100%" padding="0 30px 0 30px" minHeight="130px" border="0.5px solid rgba(191, 191, 191, 1)">
        <Text txt="I am a D3 student. I can make unique logos for and motion graphic explainer videos. Up to 2 revisions are allowed for this price."></Text>
    </FlexBox>
    <FlexBox justifyContent="flex-start" width="100%" padding="20px 30px 0 30px">
        <DisabledStars></DisabledStars>
        <Text padding="0 10px 0 10px"txt="4.0"></Text>
    </FlexBox >
    <FlexBox dir="column" justifyContent="flex-start" width="100%" padding="20px 30px 0 30px">
            <FlexBox justifyContent="space-between" width="100%">
                <Text txt="Service Satisfaction"></Text>
                <FlexBox alignItems="flex-start"><Icon className="star"></Icon><Text txt="4.0"></Text></FlexBox>
            </FlexBox>
            <FlexBox justifyContent="space-between" width="100%">
                <Text txt="Seller Response"></Text>
                <FlexBox alignItems="flex-start"><Icon className="star"></Icon><Text txt="4.0"></Text></FlexBox>
            </FlexBox>
            <FlexBox justifyContent="space-between" width="100%">
                <Text txt="Would Recommend"></Text>
                <FlexBox alignItems="flex-start"><Icon className="star"></Icon><Text txt="4.5"></Text></FlexBox>
            </FlexBox>
    </FlexBox>
    <ReviewHorizontalScroll bgImage1="/face5.jpg" bgImage2="/face4.jpg" bgImage3="/face3.jpg" bgImage4="/face2.jpg" bgImage5="/face1.jpg"></ReviewHorizontalScroll>
    </FlexBox>
  );
};