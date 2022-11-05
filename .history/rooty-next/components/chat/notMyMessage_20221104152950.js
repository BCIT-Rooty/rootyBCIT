import { FlexBox } from "../../styles/globals";
import Text from "../text";

export default function notMyMessage({
    text="default message"

}){
    return(
        <FlexBox width="100%" justifyContent="flex-start" padding="0 15px 0 15px">
        <FlexBox maxWidth="80%" minHeight="45px" padding="10px 10px 10px 10px" bgColor="#4F4DB0" borderRadius="10px 10px 10px 0px" margin="5px">
            <Text txt={text} color="white"></Text>
        </FlexBox>
        </FlexBox>
    )
}