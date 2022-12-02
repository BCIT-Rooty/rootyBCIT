import styled from "styled-components";

export const TextContain = styled.div`
    display:flex;
    font-family: ;
    width: ${props=>props.width};
    height: ${props=>props.height};
    font-size: ${props=>props.fontSize};
    font-weight: ${props=>props.fontWeight};
    text-align: ${props=>props.textAlign};
    color: ${props=>props.textColor};
    padding: ${props=>props.padding};
    background-color: ${props=>props.bgColor};
    text-decoration: ${props=>props.textDecor};
    line-height: normal;
    border-bottom: ${props=>props.borderBottom};
    justify-content: ${props=>props.justifyContent};
    max-width: ${props=>props.maxWidth}
`

export const TextSpan = styled.span`
`

export default function Text({
    txt='Text Here',
    size="16px",
    weight="400",
    align="left",
    color="black",
    padding="0px",
    maxWidth="900px",
    value,
    bgColor="transparent",
    textDecor="none",
    width,
    height,
    borderBottom,
    justifyContent,
    onChangingTheText = () => {},
    onClick=()=>{}
}){

    return (
    <TextContain onChange={(e) => onChangingTheText(e.target.innerText)} onClick={onClick} width={width} maxWidth={maxWidth} height={height} fontSize={size} fontWeight={weight} textAlign={align} textColor={color} padding={padding} bgColor={bgColor} textDecor={textDecor} borderBottom={borderBottom} justifyContent={justifyContent}>
        {txt}
    </TextContain>
    )
}