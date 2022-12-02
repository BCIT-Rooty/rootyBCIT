import { FlexBox } from "../../styles/globals";
import Text from "../text";
import HandshakeIcon from '@mui/icons-material/Handshake';
import Button from "../button";

export default function ItemDescNavbar({
    position={position},
    top={top},
    onClick = () => {},
    priceOfTheService,
    isItNegotiable,
    shouldChat
}){
    console.log(priceOfTheService, isItNegotiable)
    return(
    <FlexBox width="100%" justifyContent="space-between" alignItems="center" bgColor="white" zIndex="20" padding="10px 16px 10px 29px" topBorder="1px #EDEDED solid" position={position} top={top}>
        <FlexBox>
            {priceOfTheService == 0 ?<Text txt={"free"} size="22px" weight="bold"></Text>:<Text txt={"$" + priceOfTheService} size="22px" weight="bold"></Text> }
            
           {(isItNegotiable && priceOfTheService !== 0 ) ? <><Text txt="or " size="22px" ></Text>
            <HandshakeIcon fontSize="large"></HandshakeIcon></> : <></>}
            
        </FlexBox>
        <FlexBox>
        <FlexBox>
        {(isItNegotiable && priceOfTheService !== 0 ) ?  <Text txt="Price Negotiable" size="15px" color="#6D6D6D" padding="8px"></Text> : <></>}
            {shouldChat? <></> :<Button
                onClick={onClick}
                        txt="Chat"
                        size="20px"
                        padding="22px"
                        width="120px"
                        color="white"
                        margin="0px"
                        border="solid 1px #545454"
                        bgColor="#4F4DB0"
                ></Button>}
            </FlexBox>
        </FlexBox>
    </FlexBox>
    )
}
