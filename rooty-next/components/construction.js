import styled from "styled-components"
import { Wrapper, ImgPlaceholder, FlexBox } from "../styles/globals";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const BackIcon = styled(ArrowBackIosNewIcon)`
    position: absolute;
    left: 15px;
    top: 15px;
    cursor: pointer
`

export default function Construction({
    onClose=()=>{}
}){

    return(
        <Wrapper bgColor="white">
            <BackIcon fontSize='large' onClick={onClose}></BackIcon>
            <FlexBox bgImage="/construction.png" width="100vw" maxWidth="900px" height="700px" bgSize="contain" bgRepeat="no-repeat"></FlexBox>
        </Wrapper>
    )
}