import styled from "styled-components";
import Image from 'next/image';
import { FlexBox, Wrapper, ImgPlaceholder } from "../styles/globals";
import Text from "./text";
import { Icon } from "semantic-ui-react";
import { Heart } from "./icons/icons";

export default function Item({ id, name, rating, compensation, image, onClick=()=>{} }) {


  return (
        <FlexBox onClick={onClick} key={id} width="338px" height="154px" bgColor="#F7F7FC" borderRadius="8px" margin="20px" filter="drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.2))">
          <ImgPlaceholder bgImage={image} width='138px'></ImgPlaceholder>
          <FlexBox dir="column" padding="12px" height="154px" width="228px" alignItems="start" justifyContent="space-between">
            <FlexBox alignItems="baseline">
              <Text txt={name} size="16px" weight="regular" align="left"></Text>
              <Heart></Heart>
            </FlexBox>
            <FlexBox alignItems="left" justifyContent="space-between" width="100%">
              <Text txt={rating} size="15px" weight="regular"></Text>
              {/* <FlexBox alignItems="flex-end">
                  <div class="ui disabled rating" role="radiogroup" tabindex="0"><i tabindex="-1" aria-checked="false" aria-posinset="1" aria-setsize="5" class="active icon" role="radio"></i><i tabindex="-1" aria-checked="false" aria-posinset="2" aria-setsize="5" class="active icon" role="radio"></i><i tabindex="-1" aria-checked="true" aria-posinset="3" aria-setsize="5" class="active icon" role="radio"></i><i tabindex="-1" aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon" role="radio"></i><i tabindex="-1" aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon" role="radio"></i></div>
              </FlexBox> */}  
              {/* --- rating stars in case we want them */}
              <FlexBox alignItems="baseline" justifyContent="space-around" width="40%">
                  <Text txt={compensation} size="15px" weight="bold"></Text>
                  <Text txt="or "></Text>
                  <Icon name="exchange"></Icon>
              </FlexBox>
            </FlexBox>
            
          </FlexBox>
        </FlexBox>
  );
};

