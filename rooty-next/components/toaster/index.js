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
//   borderRadius = "10px",
  textAlign = "center",
//   margin = "5px",
  fontWeight = "500",
  border = "none",
  iconName="warning sign",
  buttonMargin="0px 0px 0px 10px"
}) {

  return (<FlexBox 
    bgColor={bgColor} 
    width={width} 
    height={height} 
    padding={padding} 
    // borderRadius={borderRadius}
    textAlign={textAlign}
    // margin={margin}
    fontWeight={fontWeight}
    border={border}
    color={color}
    >
    {txt}
    <Icons name={iconName} buttonMargin={buttonMargin}></Icons>
    </FlexBox>);
}
