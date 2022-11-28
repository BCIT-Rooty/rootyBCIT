import { FlexBox } from "../../styles/globals";
import Text from "../text";

export default function LeaveReview(){
    return(
    <FlexBox dir="column" width="94vw" height="500px" border="black 1px solid" filter="box-shadow: 0px 0px 4px 0px #00000040" borderRadius="16px">
        <Text txt="Write a review" weight="700" size="24px" ></Text>

    </FlexBox>
    )
}