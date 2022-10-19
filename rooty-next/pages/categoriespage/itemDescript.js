import { categoryList } from "../../server/database";
import CategoryCard from "../../components/categoryCard";
import {useRouter} from 'next/router';
import { FlexBox, ImgPlaceholder, Wrapper } from "../../styles/globals";
import Review from "../../components/review";
import Text from "../../components/text";


export default function itemDescript() {



  
    
  return (
    <Wrapper alignItems="flex-start">
        <FlexBox dir="column" width="100%">
        <ImgPlaceholder bgImage="/3081629.jpg" width="100%" height="328px"></ImgPlaceholder>
        <Review name="Joyce" nameSize="21px" comment="" program="IDSP" boxWidth="73px" image="/2205_w037_n003_408b_p1_408.jpg"></Review> 
        <FlexBox  dir="column" alignItems="left" width="100%" padding="0 30px 0 30px" minHeight="108px" border="0.5px solid rgba(191, 191, 191, 1)">
            <Text txt='Logo Designs' size="21pt"></Text>
            <Text txt='Digital Arts and Design'></Text>
        </FlexBox>
        <FlexBox  dir="column" alignItems="left" width="100%" padding="0 30px 0 30px" minHeight="158px" border="0.5px solid rgba(191, 191, 191, 1)">
            <Text txt="I am a D3 student. Unique logos for any companies. Up to 2 revisions are allowed for this price."></Text>
        </FlexBox>

        </FlexBox>
    </Wrapper>
    )


}
