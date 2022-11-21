import FolderZipIcon from '@mui/icons-material/FolderZip'
import { FlexBox, Wrapper } from '../../styles/globals'
import Text from '../text'

export default function DownloadPopUp({
    txt="Insert Text Here",
    size="20px",
    align="center",
    onClose=()=>{},
    height="100vh",
    padding="20px",
    txt2="",
    size2="0px",
    align2="center",
    height2="150px",
    width2="200px",
    padding2="0"
}
){
    return(
        <Wrapper onClick={onClose} height={height} position="fixed" bgColor="rgba(0, 0, 0, 0.6)">
        <FlexBox borderRadius="10px" bgColor="#4F4DB0" height={height2} width={width2} border="" padding={padding} dir="column">
            <Text txt={txt} size={size} align={align} color="white" padding={padding2}></Text>
            <Text txt={txt2} size={size2} align={align2} color="white"></Text>
        </FlexBox>
        </Wrapper>
    )
}