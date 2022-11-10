import styled from "styled-components";
import { FlexBox } from "../../styles/globals";
import { Icons } from "../button";



export default function Toaster({
  txt = "Button Text Here",
  bgColor = "#F7F7FC",
  width = "100vw",
  height = "40px",
  padding = "10px",
  color= "red",
  textAlign = "center",
  margin,
  fontWeight = "500",
  border = "none",
  iconName="warning sign",
  buttonMargin="0px 0px 0px 10px",
  maxWidth
}) {

  return (<FlexBox 
    bgColor={bgColor} 
    width={width} 
    height={height} 
    padding={padding} 
    textAlign={textAlign}
    fontWeight={fontWeight}
    border={border}
    color={color}
    maxWidth={maxWidth}
    margin={margin}
    >
    {txt}
    <Icons name={iconName} buttonMargin={buttonMargin}></Icons>
    </FlexBox>);
}
