import { FlexBox } from "../../styles/globals";
import Text from "../text";

export default function NotMyMessage({
    text="default message"

}){
    return(
        <FlexBox width="100%" justifyContent="flex-start" padding="0 15px 0 15px">
        <FlexBox maxWidth="80%" minHeight="45px" padding="10px 10px 10px 10px" bgColor="#F7F7FC" borderRadius="16px 16px 16px 0px" margin="5px">
            <Text txt={text} color="#0F1828"></Text>
        </FlexBox>
        </FlexBox>
    )
}