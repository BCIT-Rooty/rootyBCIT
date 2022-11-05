import { FlexBox, Wrapper, ImgPlaceholder } from "../../styles/globals";
import Text from "../text";


export default function ChatHeader({
    image="/face3.jpg",
    postTitle="Logo Design",
    userName="Samantha Brown",

}){
    return(
        <FlexBox width="88%" height="60px" justifyContent="flex-start" padding="0 3px 10px 3px" margin="9px" bottomBorder="1px #EDEDED solid">
                <FlexBox width="20%"><ImgPlaceholder margin="0 5px 0 5px" height="50px" width="50px" bgImage={image} borderRadius="50%"></ImgPlaceholder></FlexBox>
                <FlexBox width="90%" dir="column" alignItems="flex-start" margin="0 10px 0 13px">
                    <FlexBox width="100%" justifyContent="space-between">
                        <Text txt={postTitle} size="18px" padding="2px"></Text>
                    </FlexBox>
                    <FlexBox width="100%" justifyContent="space-between">
                        <Text txt={userName} size="15px" padding="2px"></Text>
                    </FlexBox>
                </FlexBox>
          </FlexBox>
    )
}