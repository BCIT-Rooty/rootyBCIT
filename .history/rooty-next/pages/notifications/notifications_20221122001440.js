import Review from "../../components/reviews/review";
import { FlexBox, Wrapper } from "../../styles/globals";
import Text from "../../components/text";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Notifications(){
    return( 
<Wrapper alignItems="flex-start">
    <FlexBox dir="column" width="100%" >
    <FlexBox width="100%" justifyContent="flex-start" padding="30px 0 10px 30px"><ArrowBackIosIcon fontSize="large" onClick={() =>handleLinkClick()}></ArrowBackIosIcon></FlexBox>
    <FlexBox width="100%" justifyContent="flex-start"><Text txt="Reviews" size="24px" color="#232323" weight="bold" padding="20px"></Text></FlexBox>
    <FlexBox height="40px" width="100%" bgColor="#4F4DB0" justifyContent="flex-start"><Text txt="4.0 Rating(4)" color="#FFFFFF" padding="30px"></Text></FlexBox>
     </FlexBox>
</Wrapper>
)}