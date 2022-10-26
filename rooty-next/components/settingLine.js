import { FlexBox } from '../styles/globals';
import Text from './text';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Icon } from 'semantic-ui-react'

export default function SettingLine({
    name="edit",
    txt="Enter Text",
    onClick=()=>{}
}) {

    return (
        <FlexBox padding="7px 35px" width="100vw" onClick={onClick} justifyContent="start">
            <Icon name={name} size="large"></Icon>
            <Text txt={txt} size="15px" padding="0px 0px 10px 20px" width="80vw" borderBottom="1px solid #BEBEBE" weight="300"></Text>
            <ArrowForwardIosIcon padding/>
        </FlexBox>
    )
}
