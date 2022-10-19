import styled from "styled-components";
import { FlexBox } from "../../styles/globals";

export default function Button({
    txt="Button Text Here",
    size="16px",
    color = "white",
    bgColor="#4F4DB0",
    width="150px",
    height="40px",
    padding="20px",
    borderRadius="10px",
    textAlign="center",
    margin="5px",
    fontWeight="600"
}){

    const ButtonClick = styled(FlexBox)`
        color: ${props=>props.color};
        text-align: ${props=>props.textAlign};
        font-weight: ${props=>props.fontWeight}
    `

    return(
        <ButtonClick size={size} width={width} height={height} bgColor={bgColor} padding={padding} borderRadius={borderRadius} color={color} textAlign={textAlign} margin={margin} fontWeight={fontWeight}>{txt}</ButtonClick>
    )

}