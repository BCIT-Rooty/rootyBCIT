import styled from "styled-components";
import Image from 'next/image';
import { FlexBox, Wrapper, ImgPlaceholder } from "../styles/globals";
import Text from "./text";
import { Icon } from "semantic-ui-react";
import { Heart } from "./icons/icons";
import HandshakeIcon from '@mui/icons-material/Handshake';

export default function Item({ 
  id,
  name, 
  price, 
  rating, 
  compensation, 
  image, 

  dir="row",
  width="338px",
  height="154px",
  nameTxtSize="16px",
  heightTxtBox="154px",
  widthTxtBox="228px",
  padding="12px",
  imgBorderRadius="16px 0px 0px 16px",
  onClick=()=>{},
  onHeartClick=()=>{} 
  
  }) 
  {

 return (
       <FlexBox dir={dir} onClick={onClick} key={id} width={width} height={height} bgColor="#F7F7FC" borderRadius="16px" margin="20px" filter="drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.2))">
         <ImgPlaceholder bgImage={image} width='138px' borderRadius={imgBorderRadius}></ImgPlaceholder>
         <FlexBox dir="column" height={heightTxtBox} width={widthTxtBox} padding={padding} alignItems="start" justifyContent="space-between">
           <FlexBox alignItems="baseline" justifyContent="space-between" width="100%">
             <Text txt={name} size={nameTxtSize} weight="regular" align="left"></Text>
             <Heart link onClick={onHeartClick}></Heart>
           </FlexBox>
           <FlexBox alignItems="left" justifyContent="space-between" width="100%">
             <Text txt={rating + "/5"} size="15px" weight="regular"></Text>
             <FlexBox alignItems="flex-end" justifyContent="space-around" width="50%">
                 {/* <Text txt={compensation} size="15px" weight="bold"></Text> */}
                 <Text txt={"$" + price} size="15px" weight="bold"></Text>
                 <Text txt="or "></Text>
                 <HandshakeIcon></HandshakeIcon>
             </FlexBox>
           </FlexBox>
           
         </FlexBox>
       </FlexBox>
  );
};

