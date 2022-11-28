import { FlexBox } from "../../styles/globals";
import Text from "../text";

export default function LeaveReview(){
    return(
    <FlexBox width="94vw" height="500px" border="black 1px solid" filter="drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.2))" borderRadius="16px">
        <Text txt="Write a review" weight="700" size="24px" ></Text>

    </FlexBox>
    )
}