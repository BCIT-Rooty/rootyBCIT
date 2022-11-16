import { FlexBox } from "../../styles/globals";
import Text from "../text";

export default function MyMessage({
    text="default message"

}){
    return(
        <FlexBox maxWidth="80%" minHeight="45px" padding="10px 10px 10px 10px" bgColor="#4F4DB0" borderRadius="10px 10px 0px 10px" margin="5px">
            <Text txt={text} color="white"></Text>
        </FlexBox>
    )
}