import { FlexBox } from "../../styles/globals";
import Text from "../text";
import Rating from '@mui/material/Rating';

export default function LeaveReview(){
    return(
    <FlexBox width="94vw" height="500px" padding="20px" border="black 1px solid" filter="box-shadow: 0px 0px 4px 0px #00000040" borderRadius="16px">
        <FlexBox width="100%" height="100%" dir="column" alignItems="flex-start" justifyContent="flex-start">

            <FlexBox dir="column" alignItems="flex-start">
                <Text txt="Write a review" weight="700" size="24px" ></Text>
                <Text txt="Sohrab Radmehr - Service" weight="500" size="15px" ></Text>
            </FlexBox>

            <FlexBox width="100%" alignItems="flex-start">
                <Rating sx={{ fontSize: 47 }}></Rating>
            </FlexBox>

        </FlexBox>
    </FlexBox>
    )
}