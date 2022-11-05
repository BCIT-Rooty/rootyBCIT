import styled from "styled-components";
import Image from 'next/image';
import { FlexBox, Wrapper, ImgPlaceholder } from "../styles/globals";
import Text from "./text";
import { Icon } from "semantic-ui-react";
import { Heart } from "./icons/icons";


export default function CategoryCard({ id, name, image, onClick=()=>{} }) {


    return (
          <FlexBox onClick={onClick} dir = "column" key={id} width="161px" height="147px" borderRadius="15px" margin="15px 10px 15px 10px" bgImage={image} alignItems="end" justifyContent="end">
            <FlexBox height="49px" width="100%" borderRadius="0px 0px 15px 15px" bgColor="#F6F6F9" padding="2px 2px 2px 7px" justifyContent="start">
            <Text txt={name} size="16px" weight="bold" align="left"></Text>
            </FlexBox>
          </FlexBox>
    )
  };