import Review from "../../components/reviews/review";
import { FlexBox, Wrapper } from "../../styles/globals";
import Text from "../../components/text";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Notification from "../../components/userProfile/notification";
import { useRouter } from 'next/router';

export default function Notifications(){
    const r = useRouter();

    function handleLinkClick() {
        const link = `/home`
        r.push(link)
    }

    return( 
<Wrapper alignItems="flex-start">
    <FlexBox dir="column" width="100%" >
    <FlexBox width="100%" justifyContent="flex-start" padding="30px 0 10px 30px"><ArrowBackIosIcon fontSize="large" onClick={() =>handleLinkClick()}></ArrowBackIosIcon></FlexBox>
    <FlexBox width="100%" justifyContent="flex-start"><Text txt="Notifications" size="24px" color="#232323" weight="bold" padding="20px"></Text></FlexBox>
    <Notification message="We have prepared some tips on how to get your first client! Check them out!"></Notification>
    <Notification message="Welcome to Rooty!"></Notification>
     </FlexBox>
</Wrapper>
)}