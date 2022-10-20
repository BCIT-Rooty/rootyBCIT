import { FlexBox } from "../../styles/globals";
import GradientCard from "../gradientCard";
import { HorizontalScrollContainer } from "../../styles/globals";
import { reviewText } from "../../server/database";
import Review from "./review";
import Text from "../text";
import { Icon } from "semantic-ui-react";

export default function ReviewHorizontalScroll(){

    return(
        <HorizontalScrollContainer justifyContent="flex-start" alignItems="flex-start" margin="50px 0 80px 0 " >

        <FlexBox  dir="column" borderRadius="15px" width="251px" height="262px" weight="regular" bgImage="" bgColor="#E5E5FC" color="#101010" padding="10px" margin="7px" justifyContent="flex-start">
            <Review name={reviewText[0].name} program={reviewText[0].program} image={reviewText[0].image} fifth="active icon" comment="" boxHeight="70px" borderColor="transparent"></Review>
            <Text txt={reviewText[0].text} size="16px" align="left" weight="regular"></Text>
        </FlexBox>

        <FlexBox  dir="column" borderRadius="15px" width="251px" height="262px" weight="regular" bgImage="" bgColor="#E5E5FC" color="#101010" padding="10px" margin="7px" justifyContent="flex-start">
            <Review name={reviewText[1].name} program={reviewText[1].program} image={reviewText[1].image} fifth="active icon" comment="" boxHeight="70px" borderColor="transparent"></Review>
            <Text txt={reviewText[1].text} size="16px" align="left" weight="regular"></Text>
        </FlexBox>

        <FlexBox  dir="column" borderRadius="15px" width="251px" height="262px" weight="regular" bgImage="" bgColor="#E5E5FC" color="#101010" padding="10px" margin="7px" justifyContent="flex-start">
            <Review name={reviewText[2].name} program={reviewText[2].program} image={reviewText[2].image} fifth="active icon" comment="" boxHeight="70px" borderColor="transparent"></Review>
            <Text txt={reviewText[2].text} size="16px" align="left" weight="regular"></Text>
        </FlexBox>

        <FlexBox  dir="column" borderRadius="15px" width="251px" height="262px" weight="regular" bgImage="" bgColor="#E5E5FC" color="#101010" padding="10px" margin="7px" justifyContent="flex-start">
            <Review name={reviewText[3].name} program={reviewText[3].program} image={reviewText[3].image} fifth="active icon" comment="" boxHeight="70px" borderColor="transparent"></Review>
            <Text txt={reviewText[3].text} size="16px" align="left" weight="regular"></Text>
        </FlexBox>

        <FlexBox  dir="column" borderRadius="15px" width="251px" height="262px" weight="regular" bgImage="" bgColor="#E5E5FC" color="#101010" padding="10px" margin="7px" justifyContent="flex-start">
            <Review name={reviewText[4].name} program={reviewText[4].program} image={reviewText[4].image} fourth="icon" comment="" boxHeight="70px" borderColor="transparent"></Review>
            <Text txt={reviewText[4].text} size="16px" align="left" weight="regular"></Text>
        </FlexBox>

      </HorizontalScrollContainer>
    )
}
