import styled from 'styled-components' 
import Text from '../text'
import { FlexBox } from '../../styles/globals'
import { Search } from 'semantic-ui-react'
import GradientCard from '.'

export default function CardWithSearch({
    width="195px",
    height="195px",
    bgImage="http://placekitten.com/210/210",
    bgColor="",
    txt="Enter Text Here",
    borderRadius="10px",
    size="24px",
    align="left",
    weight="bold",
    padding="10px",
    linearGradient="linear-gradient(to bottom, rgba(79, 77, 176, 0), rgba(79, 77, 176, 1))",
    color="white"
}){



  return(
    <FlexBox bgImage={bgImage} width="100%" height="328px" borderRadius="0px" margin="0px" alignItems="flex-end" linearGradient={linearGradient}>
        <FlexBox dir="column" margin="20px">
        <Text txt={txt} size={size} align={align} color={color} weight={weight} padding={padding}></Text>
        <FlexBox margin="12px"><Search size="large"
                        placeholder='Search...'
                        onResultSelect={(e, data) =>
                        dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })}/></FlexBox>
        </FlexBox>
    </FlexBox>
  )
}
