import { FlexBox, ImgPlaceholder } from "../../styles/globals";
import Text from "../../components/text";

export default function UserProfile({
    bgImage = "/camera-man.jpg",
    name = "Sohrab Radmehr",
    program = "Digital Design and Development"
}){

    return(
        <FlexBox padding="20px" width="100vw" justifyContent="start" alignItems="flex-end" bottomBorder="0.5px solid rgba(191, 191, 191, 1)" minHeight="100px">
          <ImgPlaceholder bgImage={bgImage} borderRadius="80px" width="80px" height="80px"></ImgPlaceholder>
          <FlexBox dir="column" margin="0px 0px 0px 20px" alignItems="start">
              <Text size="21px" weight="700" txt={name}></Text>
              <Text size="15px" weight="300" txt={program} padding="5px 0px 20px 0px"></Text>
          </FlexBox>
      </FlexBox>
    )
}