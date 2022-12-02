import { FlexBox, ImgPlaceholder, HorizontalScrollContainer } from "../../styles/globals";
import Text from "../../components/text";

const portfolioImage = [
    ["/vid1.gif"],
    ["/vid2.gif"],
    ["/vid3.gif"],
    ["/vid4.gif"]
]

export default function PostProfileDescript({
    type1="",
    // type2="",
    headTxt="Header Text",
    descriptTxt="Enter Body Text Here",
    type1Text="Logo Animations",
    // type2Text="App Development"
}){
    return(
        <FlexBox dir="column" alignItems="left" width="100vw" padding="20px" height="fit-content" bottomBorder="0.5px solid rgba(191, 191, 191, 1)">
        <Text txt={headTxt} size="21px" weight="700" padding="0 0 15px 0"></Text>
        <Text size="15px" txt={descriptTxt}></Text>
        {type1 === "image1" && <FlexBox dir="column" alignItems="left" height="fit-content"  width="60vw">
            <Text size="15px" weight="600" txt={type1Text} padding="0 0 15px 0"></Text>
            <HorizontalScrollContainer justifyContent="flex-start" alignItems="flex-start" maxWidth="900px" height="fit-content" padding="5px 0px" width="92vw">
                <FlexBox padding="0px">
                    {portfolioImage.map((o) => (
                        <ImgPlaceholder key={o} bgImage={o[0]} borderRadius="16px" height="160px" width="160px" margin="5px 10px 5px 0"></ImgPlaceholder>
                    ))}
                </FlexBox>
            </HorizontalScrollContainer>      
        </FlexBox>
        }
        {/* {type2 === "image2" && <FlexBox dir="column" alignItems="left" height="fit-content" width="60vw">
            <Text size="15px" weight="600" txt={type2Text} padding="25px 0 15px 0"></Text>
            <HorizontalScrollContainer justifyContent="flex-start" alignItems="flex-start" maxWidth="900px" height="fit-content" padding="5px 0px" width="92vw">
                <FlexBox padding="0px">
                {portfolioImage.map((o) => (
                        <ImgPlaceholder key={o} bgImage={o[0]} borderRadius="16px" height="160px" width="160px" margin="5px"></ImgPlaceholder>
                    ))}
                </FlexBox>
            </HorizontalScrollContainer>      
        </FlexBox>
        } */}
      </FlexBox>
    )
}