import { FlexBox, Wrapper, ImgPlaceholder } from "../../styles/globals";
import Text from "../text";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


export default function ChatHeader({
    image="/face3.jpg",
    postTitle="Logo Design",
    userName="Samantha Brown",
    margin="9px",
    position

}){
    return(
        <FlexBox position={position} width="100%" height="60px" justifyContent="flex-start" padding="0 3px 10px 3px" margin={margin} bottomBorder="0.5px #545454 solid" bgColor="white" dir="column">
                <FlexBox width="100%" justifyContent="flex-start" padding="30px 0 10px 30px"><ArrowBackIosIcon fontSize="large" onClick={() =>handleLinkClick()}></ArrowBackIosIcon></FlexBox>
                <FlexBox width="20%"><ImgPlaceholder margin="0 5px 0 20px" height="50px" width="50px" bgImage={image} borderRadius="50%"></ImgPlaceholder></FlexBox>
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