import styled from 'styled-components'
import { FlexBox } from '../../styles/globals'
import { useState } from 'react'
import Input from '../inputs'
import { Icon } from 'semantic-ui-react'

export default function Counter(){
    const [count, setCount] = useState(0)

    const Decrease = () => {
        setCount(Math.max(0, count - 1))
    }
    const Increase = () => {
        setCount(Math.min(5, count + 1))
    }
    
    return(
        <FlexBox width="120px" border="2px solid #545454" borderRadius="16px">
            <FlexBox onClick={Decrease} width="100%" height="38px">
                <Icon name="minus" width="200px" ></Icon>
            </FlexBox>
            <Input width="41px" borderRadius="0px" bgColor="white" value={count} height="100%" border="1px solid #545454" padding="10px 15px"></Input>
            <FlexBox onClick={Increase} width="100%" height="38px">
                <Icon name="add" width="200px" ></Icon>
            </FlexBox>
        </FlexBox>
    )
}