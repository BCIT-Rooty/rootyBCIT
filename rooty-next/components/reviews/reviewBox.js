import { FlexBox } from "../../styles/globals";
import GradientCard from "../gradientCard";
import { HorizontalScrollContainer } from "../../styles/globals";
import { reviewText } from "../../server/database";
import Review from "./review";
import Text from "../text";
import { Icon } from "semantic-ui-react";

export default function ReviewBox({
    bgImage1=""
}){

    return(
        <FlexBox  dir="column" borderRadius="15px" width="251px" height="262px" weight="regular" bgImage="" bgColor="#E5E5FC" color="#101010" padding="10px" margin="7px" justifyContent="flex-start">
            <Review name={reviewText[0].name} program={reviewText[0].program} image={bgImage1} fifth="active icon" comment="" boxHeight="70px" borderColor="transparent"></Review>
            <Text txt={reviewText[0].text} size="16px" align="left" weight="regular"></Text>
        </FlexBox>
    )
}
