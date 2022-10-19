import FolderZipIcon from '@mui/icons-material/FolderZip'
import { FlexBox, Wrapper } from '../../styles/globals'
import Text from '../text'

export default function DownloadPopUp({
    txt="Insert Text Here",
    size="20px",
    align="center",
    onClose=()=>{}
}
){
    return(
        <Wrapper onClick={onClose} height="100vh" position="absolute" bgColor="rgba(0, 0, 0, 0.6)">
        <FlexBox borderRadius="10px" bgColor="#4F4DB0" height="150px" width="200px" border="">
            <Text txt={txt} size={size} align={align} color="white"></Text>
        </FlexBox>
        </Wrapper>
    )
}