import styled from "styled-components";
import Image from 'next/image';
import { FlexBox, Wrapper, ImgPlaceholder } from "../styles/globals";
import Text from "./text";
import { Icon } from "semantic-ui-react";
import { Heart } from "./icons/icons";
// import Avatar from '@mui/material/Avatar';


export default function Review({
    name="name",
    comment="Comment",
    program="D3",
    image="/3081629.jpg",
    one="active icon", 
    second="active icon", 
    third="active icon", 
    fourth="active icon", 
    fifth="icon",
    boxWidth="108px",
    nameSize="16px"
    // showStars=true
}) {

    return (
          <FlexBox width="100%" minHeight={boxWidth} border= "0.5px solid rgba(191, 191, 191, 1)">
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                <FlexBox width = "25%">
                    <ImgPlaceholder height="50px" width="50px" bgImage={image} borderRadius="50%"></ImgPlaceholder>
                </FlexBox>
                <FlexBox dir="column" alignItems="flex-start" margin="10px" width = "80%">
                    <FlexBox justifyContent="space-between" alignItems="flex-start" width="100%">
                        <Text txt={name} weight="bold" size={nameSize}></Text>
                        <FlexBox padding="0 10px 0 10px">
                        <div className="ui disabled rating" role="radiogroup" tabIndex="0">
                        <i tabIndex="-1" aria-checked="false" aria-posinset="1" aria-setsize="5" className={one} role="radio"></i>
                        <i tabIndex="-1" aria-checked="false" aria-posinset="2" aria-setsize="5" className={second} role="radio"></i>
                        <i tabIndex="-1" aria-checked="true" aria-posinset="3" aria-setsize="5" className={third} role="radio"></i>
                        <i tabIndex="-1" aria-checked="false" aria-posinset="4" aria-setsize="5" className={fourth} role="radio"></i>
                        <i tabIndex="-1" aria-checked="false" aria-posinset="5" aria-setsize="5" className={fifth} role="radio"></i>
                        </div>
                        </FlexBox>
                    </FlexBox>
                    <Text txt={program}></Text>
                    <Text txt={comment}></Text>
                </FlexBox>
          </FlexBox>
    );
  };

//   {{showStars}===true && 
//                         <div className="ui disabled rating" role="radiogroup" tabIndex="0">
//                         <i tabIndex="-1" aria-checked="false" aria-posinset="1" aria-setsize="5" className={one} role="radio"></i>
//                         <i tabIndex="-1" aria-checked="false" aria-posinset="2" aria-setsize="5" className={second} role="radio"></i>
//                         <i tabIndex="-1" aria-checked="true" aria-posinset="3" aria-setsize="5" className={third} role="radio"></i>
//                         <i tabIndex="-1" aria-checked="false" aria-posinset="4" aria-setsize="5" className={fourth} role="radio"></i>
//                         <i tabIndex="-1" aria-checked="false" aria-posinset="5" aria-setsize="5" className={fifth} role="radio"></i>
//                         </div>
//                         }