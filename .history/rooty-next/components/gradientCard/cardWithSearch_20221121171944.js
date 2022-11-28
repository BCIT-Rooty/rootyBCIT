import styled from 'styled-components' 
import Text from '../text'
import { FlexBox } from '../../styles/globals'
import { Search } from 'semantic-ui-react'
import GradientCard from '.'
import Input from '../inputs'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function CardWithSearch({
    width="100%",
    height="328px",
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
    <FlexBox bgImage={bgImage} width={width} height={height} borderRadius="0px" margin="0px" alignItems="flex-end" linearGradient={linearGradient}>
                              <FlexBox position="relative" top="40px" left="-155px">
                            <ArrowBackIosIcon fontSize="large" onClick={() =>handleLinkClick()}></ArrowBackIosIcon>
                        </FlexBox>
        <FlexBox dir="column" margin="20px">
        <Text txt={txt} size={size} align={align} color={color} weight={weight} padding={padding}></Text>
        <FlexBox margin="12px">
          {/* <Search size="large"
                        placeholder='Search services'
                        onResultSelect={(e, data) =>
                        dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })}/> */}
                        {/* <Input type="search" bgImage="/face4.jpg" padding="0 0 0 45px"></Input> */}
                        <Input bgImage="/icons8-search-48.png" bgSize="30px" type="email" placeholder='Search services' padding='0 0 0 55px' width="90vw" maxWidth="900px" justifyContent="flex-start"></Input>
                        </FlexBox>
        </FlexBox>
    </FlexBox>
  )
}
