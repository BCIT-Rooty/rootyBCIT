import Review from "../../components/reviews/review";
import { FlexBox, Wrapper } from "../../styles/globals";
import Text from "../../components/text";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Home(){

    return( 
<Wrapper alignItems="flex-start">
    <FlexBox dir="column" width="100%" >
    <FlexBox width="100%" justifyContent="flex-start" padding="30px 0 10px 30px"><ArrowBackIosIcon fontSize="large" onClick={() =>handleLinkClick()}></ArrowBackIosIcon></FlexBox>
    <FlexBox width="100%" justifyContent="flex-start"><Text txt="Reviews" size="24px" color="#232323" weight="bold" padding="20px"></Text></FlexBox>
    <FlexBox height="40px" width="100%" bgColor="#4F4DB0" justifyContent="flex-start"><Text txt="4.0 Rating(4)" color="#FFFFFF" padding="30px"></Text></FlexBox>
        <FlexBox dir="column" width="100%">
          <Review name="Gian" comment="Loved your design! But I would make a better one..." fifth="active icon" image="/face1.jpg"></Review>
          <Review name="Sohrab" comment="I'm just cute" program="Full Stack WebDev" image="/face2.jpg"></Review>
          <Review name="Ana" comment="I would teach you better time management... dm me" fourth="icon" image="/face3.jpg"></Review>
          <Review name="Joyce" comment="I absolutely love the illustrations, thank you!" fifth="active icon" image="/face4.jpg"></Review>
          <Review name="Renata" comment="Speeeeechlesssss" fifth="active icon" image="/face5.jpg"></Review>
          <Review name="Murad" comment="You're so much fun girl. So get 1 star and laugh" second="icon" third="icon" fourth="icon" program="Full Stack WebDev" image="/face1.jpg"></Review>
          {/* <Review name="Joyce" comment="" second="icon" third="icon" fourth="icon" program="IDSP" boxWidth="73px" image="/2205_w037_n003_408b_p1_408.jpg"></Review> --- this is a component for the service description page */}
        </FlexBox>
     </FlexBox>
</Wrapper>
)}
