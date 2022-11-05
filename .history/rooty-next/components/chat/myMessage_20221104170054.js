import { FlexBox } from "../../styles/globals";
import Text from "../text";
import { ImgPlaceholder } from "../../styles/globals";

export default function MyMessage({
    text="default message",
    image="",
    type="",
}){
    return(
        <FlexBox width="100%" justifyContent="flex-end" padding="0 15px 0 15px">
        <FlexBox dir="column" maxWidth="80%" minHeight="45px" padding="10px 10px 10px 10px" bgColor="#4F4DB0" borderRadius="16px 16px 0px 16px" margin="5px">
            {type==="messageImage" && <ImgPlaceholder bgImage={image} width="100%" height="150px" borderRadius="5px"></ImgPlaceholder>}
            <Text txt={text} color="white"></Text>
        </FlexBox>
        </FlexBox>
    )
}