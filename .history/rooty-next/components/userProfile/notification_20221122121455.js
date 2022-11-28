import { FlexBox } from "../../styles/globals";
import Text from "../text";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Notification({
    message="messsage"
}){
    return(
        <FlexBox width="100%" alignContent="space-between" padding="15px" border="1px solid #BFBFBF">
            <FlexBox dir="column" width="80%" alignItems="flex-start">
                <Text txt="Today" size="14px" color="#545454" padding="3px"></Text>
                <Text txt={message} size="16px" weight="600" padding="3px"></Text>
            </FlexBox>
            <FlexBox>
                <ArrowForwardIosIcon width="20%"></ArrowForwardIosIcon>
            </FlexBox>
        </FlexBox>
    )
}