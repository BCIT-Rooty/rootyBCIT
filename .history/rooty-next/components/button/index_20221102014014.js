import styled from "styled-components";
import { FlexBox } from "../../styles/globals";
import { Icon } from "semantic-ui-react";
import { useState } from "react";

export const Icons = styled(Icon)`
  padding: ${(props) => props.buttonMargin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
const ButtonClick = styled(FlexBox)`
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => props.fontWeight};
  border: ${(props) => props.border};
  font-size: ${(props) => props.fzsize};
`;

export default function Button({
  txt = "Button Text Here",
  size = "15px",
  color = "white",
  bgColor = "#ffffff",
  width = "150px",
  height = "40px",
  padding = "15px",
  borderRadius = "16px",
  textAlign = "center",
  margin = "5px 5px 8px 5px",
  whatIsTheStateOfTheAppForCategory,
  fontWeight = "600",
  value = "nothing",
  border = "none",
  ifThisIsTheCategoriesButtons = "false",
  onClick = () => {},
  onKeywordWantToRemove = () => {},
  onRemoveKeyword = () => {},
  type = "button",
  buttonMargin = "0px",
  cursor = "pointer",
  onNext = () => {},
  onPrev = () => {}
}) {


  if (ifThisIsTheCategoriesButtons) {
    if (whatIsTheStateOfTheAppForCategory == value) {
      bgColor = "#4F4DB0";
      color = "white";
      border = "#4F4DB0"
    }
  }


    const ButtonClick = styled(FlexBox)`
        color: ${props=>props.color};
        text-align: ${props=>props.textAlign};
        font-weight: ${props=>props.fontWeight};
        border: ${props=>props.border};
        font-size: ${props=>props.fzsize}
    `

  return (
    <FlexBox>
      {type === "button" && (
        <ButtonClick
          onClick={(e) => {
            onClick(e.target.innerText);
          }}
          fzsize={size}
          width={width}
          height={height}
          bgColor={bgColor}
          padding={padding}
          borderRadius={borderRadius}
          color={color}
          textAlign={textAlign}
          margin={margin}
          fontWeight={fontWeight}
          border={border}
          cursor={cursor}
        >
          {txt}
        </ButtonClick>
      )}

      {type === "keyword" && (
        <ButtonClick
          onClick={(e) => {
            onClick(e.target.innerText);
            if (ifThisIsTheCategoriesButtons) onKeywordWantToRemove(true);
          }}
          fzsize={size}
          width={width}
          height={height}
          bgColor={bgColor}
          padding={padding}
          borderRadius={borderRadius}
          color={color}
          textAlign={textAlign}
          margin={margin}
          fontWeight={fontWeight}
          border={border}
          cursor={cursor}
        >
          {txt}
          <Icons name="close" buttonMargin={buttonMargin} onClick={(e) => onRemoveKeyword(txt)}></Icons>
        </ButtonClick>
      )}

      {type === "add" && (
        <ButtonClick
          onClick={(e) => {
            onClick(e.target.innerText);
            if (ifThisIsTheCategoriesButtons) onKeywordWantToRemove(true);
          }}
          fzsize={size}
          width={width}
          height={height}
          bgColor={bgColor}
          padding={padding}
          borderRadius={borderRadius}
          color={color}
          textAlign={textAlign}
          margin={margin}
          fontWeight={fontWeight}
          border={border}
          cursor={cursor}
        >
          <Icons name="add" color="#ffffff" buttonMargin={buttonMargin}></Icons>
          {txt}
        </ButtonClick>
      )}
    </FlexBox>
  );
}
