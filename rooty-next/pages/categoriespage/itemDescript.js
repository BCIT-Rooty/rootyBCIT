import { categoryList } from "../../server/database";
import CategoryCard from "../../components/categoryCard";
import {useRouter} from 'next/router';
import { FlexBox, ImgPlaceholder, Wrapper } from "../../styles/globals";
import Review from "../../components/review";
import Text from "../../components/text";
import DisabledStars from "../../components/icons/starsDisabled";
import { HorizontalScrollContainer } from "../../styles/globals";
import GradientCard from "../../components/gradientCard";


export default function ItemDescript() {


    
  return (
    <Wrapper alignItems="flex-start">
        <FlexBox dir="column" width="100%">
        <ImgPlaceholder bgImage="/vector-drawing.jpg" width="100%" height="328px"></ImgPlaceholder>
        <Review name="Joyce" nameSize="21px" comment="" program="Broadcast and Media" boxWidth="73px" image="/2205_w037_n003_408b_p1_408.jpg"></Review> 
        <FlexBox  dir="column" alignItems="left" width="100%" padding="0 30px 0 30px" minHeight="90px" border="0.5px solid rgba(191, 191, 191, 1)">
            <Text txt='1-2 minute Motion Graphic editor' size="21px"></Text>
            <Text txt='Digital Arts and Design'></Text>
        </FlexBox>
        <FlexBox  dir="column" alignItems="left" width="100%" padding="0 30px 0 30px" minHeight="130px" border="0.5px solid rgba(191, 191, 191, 1)">
            <Text txt="I am a D3 student. Unique logos for any companies. Up to 2 revisions are allowed for this price."></Text>
        </FlexBox>
        <FlexBox justifyContent="flex-start" width="100%" padding="20px 30px 0 30px">
            <DisabledStars></DisabledStars>
            <Text padding="0 10px 0 10px"txt="4.0"></Text>
        </FlexBox >
        <FlexBox dir="column" justifyContent="flex-start" width="100%" padding="20px 30px 0 30px">
                <FlexBox justifyContent="space-between" width="100%"><Text txt="Service Satisfaction"></Text><Text txt="4.0"></Text></FlexBox>
                <FlexBox justifyContent="space-between" width="100%"><Text txt="Seller Response"></Text><Text txt="4.0"></Text></FlexBox>
                <FlexBox justifyContent="space-between" width="100%"><Text txt="Would Recommend"></Text><Text txt="4.5"></Text></FlexBox>
        </FlexBox>
        <HorizontalScrollContainer justifyContent="flex-start" alignItems="flex-start" margin="30px 0 60px 0 " >
      <FlexBox padding="0px 0px 0px 20px">
        <GradientCard txt="How to Write the Perfect Freelancing Bio" bgImage="/tip1.png" onClick={()=> setShowModal("firstArticle")}></GradientCard>
        <GradientCard txt="6 Habits of High Successful Freelancers" bgImage="/tip2.jpg" onClick={()=> setShowModal("secondArticle")}></GradientCard>
        <GradientCard txt="4 Steps to Successfully Completing Your First Gig" bgImage="/tip3.png" onClick={()=> setShowModal("thirdArticle")}></GradientCard>
        <GradientCard txt="5 Ways Freelancers can Improve Focus and Productivity" bgImage="/tip4.png" onClick={()=> setShowModal("fourthArticle")}></GradientCard>
      </FlexBox>
    </HorizontalScrollContainer>
        </FlexBox>
    </Wrapper>
    )


}
