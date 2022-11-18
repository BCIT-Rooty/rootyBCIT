import styled from 'styled-components' 
import Text from '../text'
import { FlexBox } from '../../styles/globals'

export default function GradientCard({
    minWidth="195px",
    width,
    maxWidth="275px",
    height="195px",
    bgImage="http://placekitten.com/210/210",
    bgColor="",
    txt="Enter Article Text Here",
    margin="0px 20px 0px 0px",
    borderRadius="10px",
    size="18px",
    align="left",
    weight="bold",
    padding="10px",
    linearGradient="linear-gradient(to bottom, rgba(79, 77, 176, 0), rgba(79, 77, 176, 1))",
    color="white",
    onClick=()=>{}
}){



  return(
    <FlexBox onClick={onClick} width={width} minWidth={minWidth} maxWidth={maxWidth} height={height} borderRadius={borderRadius} margin={margin} bgImage={bgImage} linearGradient={linearGradient} alignItems="flex-end" padding="10px" bgColor={bgColor}>
        <Text txt={txt} size={size} align={align} color={color} weight={weight} padding={padding} ></Text>
    </FlexBox>
  )
}