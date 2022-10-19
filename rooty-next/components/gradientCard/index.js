import styled from 'styled-components' 
import Text from '../text'
import { FlexBox } from '../../styles/globals'

export default function GradientCard({
    width="210px",
    height="210px",
    bgImage="http://placekitten.com/210/210",
    txt="Enter Article Text Here",
    margin="0px 20px 0px 0px",
    borderRadius="10px",
    size="21px",
    align="center",
    weight="bold",
    onClick=()=>{}
}){



  return(
    <FlexBox onClick={onClick} width={width} height={height} borderRadius={borderRadius} margin={margin} bgImage={bgImage} linearGradient="linear-gradient(to bottom, rgba(79, 77, 176, 0), rgba(79, 77, 176, 1))" alignItems="flex-end" padding="10px">
        <Text txt={txt} size={size} align={align} color="white" weight={weight}></Text>
    </FlexBox>
  )
}