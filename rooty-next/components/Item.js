import styled from "styled-components";
import Image from 'next/image';
import { FlexBox, Wrapper, ImgPlaceholder } from "../styles/globals";
import Text from "./text";
import { Icon } from "semantic-ui-react";
import { Heart } from "./icons/icons";
import HandshakeIcon from '@mui/icons-material/Handshake';
import Button from "./button";

export default function Item({ 
  id,
  name, 
  price, 
  rating, 
  compensation, 
  image,
  remove="default",
  heart="show", 
  isItNegotiable,
  dir="row",
  width="338px",
  height="154px",
  nameTxtSize="16px",
  heightTxtBox="154px",
  widthTxtBox="228px",
  padding="12px",
  imgBorderRadius="16px 0px 0px 16px",
  onClick=()=>{},
  margin="20px",
  onNext=()=>{},
  isNegotiable
}) {


 return (
       <FlexBox dir={dir} onClick={onClick} key={id} width={width} height={height} bgColor="#F7F7FC" borderRadius="16px" margin={margin} filter="drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.2))">
         <ImgPlaceholder bgImage={image} width='138px' borderRadius={imgBorderRadius}></ImgPlaceholder>
         <FlexBox dir="column" height={heightTxtBox} width={widthTxtBox} padding={padding} alignItems="start" justifyContent="space-between">
           <FlexBox alignItems="baseline" justifyContent="space-between" width="100%">
             <Text txt={name} size={nameTxtSize} weight="regular" align="left"></Text>
             {heart === "show" &&  <Heart></Heart>}
           </FlexBox>
           <FlexBox alignItems="left" justifyContent="space-between" width="100%">
              {remove === "default" &&  <Text txt={rating + "/5"} size="15px" weight="regular"></Text>}
              {remove === "remove" &&  <Button type="next" onNext={onNext} txt="Delete" size="15px" weight="regular" width="80px" bgColor="#4F4DB0" margin="0" height="20px"></Button>}
             <FlexBox alignItems="flex-end" justifyContent="space-around" width="50%">
             {price == 0 ?<Text txt={"free"} size="15px" weight="bold"></Text>:<Text txt={"$" + price} size="15px" weight="bold"></Text> }
            
            {(isNegotiable && price !== 0 ) ? <><Text txt="or " size="15px" ></Text>
             <HandshakeIcon></HandshakeIcon></> : <></>}
             
             </FlexBox>
           </FlexBox>
           
         </FlexBox>
       </FlexBox>
  );
};

