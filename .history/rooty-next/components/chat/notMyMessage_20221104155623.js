import { FlexBox } from "../../styles/globals";
import Text from "../text";
import { ImgPlaceholder } from "../../styles/globals";

export default function NotMyMessage({
    text="default message",
    image=""

}){
    return(
        <FlexBox width="100%" justifyContent="flex-start" padding="0 15px 0 15px">
        <FlexBox dir="column" maxWidth="80%" minHeight="45px" padding="10px 10px 10px 10px" bgColor="#F7F7FC" borderRadius="16px 16px 16px 0px" margin="5px" alignItems="flex-start">
            <ImgPlaceholder bgImage={image} margin="7px" width="85%" height="80%"></ImgPlaceholder>
            <Text txt={text} color="#0F1828"></Text>
        </FlexBox>
        </FlexBox>
    )
}