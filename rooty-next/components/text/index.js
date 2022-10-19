import styled from "styled-components";

export const TextContain = styled.div`
    display:flex;
    font-size: ${props=>props.fontSize};
    font-weight: ${props=>props.fontWeight};
    text-align: ${props=>props.textAlign};
    color: ${props=>props.textColor};
    padding: ${props=>props.padding};
    background-color: ${props=>props.bgColor};
    text-decoration: ${props=>props.textDecor};
    line-height: normal;
`

export default function Text({
    txt='Text Here',
    size="16px",
    weight="400",
    align="left",
    color="black",
    padding="0px",
    bgColor="transparent",
    textDecor="none"
}){

    return (
    <TextContain fontSize={size} fontWeight={weight} textAlign={align} textColor={color} padding={padding} bgColor={bgColor} textDecor={textDecor}>
        {txt}
    </TextContain>
    )
}