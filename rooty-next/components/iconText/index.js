import FolderZipIcon from '@mui/icons-material/FolderZip'
import { FlexBox } from '../../styles/globals'
import Text from '../text'

export default function IconText({
    icon="FolderZipIcon",
    paddingBox="10px",
    txt="insert icon name",
    size="16px",
    textDecor="none",
    color="black",
    weight="bold",
    paddingText="10px 5px",
    onDownload=()=>{}
}){
    return(
        <FlexBox padding={paddingBox} onClick={onDownload}>
            <FolderZipIcon fontSize="medium"></FolderZipIcon>
            {/* <{icon} fontSize="medium"></{icon}> */}
            <Text padding={paddingText} txt={txt} size={size} weight={weight} textDecor={textDecor} color={color}></Text>
        </FlexBox>
    )
}