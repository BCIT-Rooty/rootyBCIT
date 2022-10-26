import styled from "styled-components"
import { FlexBox, ImgPlaceholder } from "../styles/globals"
import Text from "../components/text"
import GradientCard from "../components/gradientCard"
import CloseIcon from '@mui/icons-material/Close';
import IconText from "../components/iconText";
import { motion, AnimatePresence} from "framer-motion"
import { useState } from "react";
import DownloadPopUp from "../components/downloadPopUp";

const ClosingIcon = styled(CloseIcon)`
position: absolute;
right: 15px;
top: 15px;
cursor: pointer
`



export default function Article({
    article = "",
    contest ="",
    txt = "",
    bgImage = "http://placekitten.com/600/240",
    onClick = () => {}
}){
    const [showDownload, setShowDownload] = useState("default")

    return(
        <FlexBox height="700px" alignItems="flex-start" position="absolute" top="0px">
            <FlexBox width="100vw" dir="column" padding="0px 15px 60px 15px">
                <ClosingIcon fontSize='large' onClick={onClick}></ClosingIcon>
                <GradientCard txt={txt} bgImage={bgImage} width="100vw" height="240px" borderRadius='10px 10px 0px 0px' size="24px" margin='0px' padding="0px 0px 15px 25px"></GradientCard>
                {article}
                {contest === "yes" && 
                    <FlexBox width="100vw" height="fit-content" bgColor="#F8F8F8" alignItems="flex-start" dir="column"  padding="0px 15px 20px 15px">
                        <IconText onDownload={()=> setShowDownload("active")} txt="bcitBigInfo.zip" textDecor="underline" color="blue" onClick=""></IconText>
                        <Text padding="10px 20px" txt="Inspiration for what we're looking forward" size="16px" weight="bold"></Text>
                        <ImgPlaceholder bgImage="/contestInspo.png" width="100px" height="180px" margin="20px"></ImgPlaceholder>
                        <AnimatePresence exitBeforeEnter>
                            {showDownload === "active" && <FlexBox position="absolute" left="0" top="0" zIndex="30">
                                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 0.2, delay:0}}} exit={{opacity:0}}>
                                    <DownloadPopUp onClose={()=>setShowDownload("default")} txt="Successfully Downloaded 😁"></DownloadPopUp>
                                </motion.div>
                            </FlexBox>
                            }
                        </AnimatePresence>
                    </FlexBox>
                }
      </FlexBox>
    </FlexBox>
    )
}



