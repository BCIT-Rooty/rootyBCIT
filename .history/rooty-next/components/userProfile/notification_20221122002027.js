import { FlexBox } from "../../styles/globals";
import Text from "../text";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Notification(){
    return(
        <FlexBox width="100%" alignContent="space-between">
            <FlexBox dir="column" width="100%">
                <Text txt="Today" size="16px"></Text>
                <Text txt="Welcome to Rooty!" size="16px" weight="600"></Text>
            </FlexBox>
            <FlexBox>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </FlexBox>
        </FlexBox>
    )
}