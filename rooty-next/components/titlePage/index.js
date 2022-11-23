import { FlexBox } from "../../styles/globals"
import Text from "../text"
import Button from "../button"

export default function TitlePage({
    txt="Title Page",
    type="",
    margin="0px",
    onClick
}){
    return(
        <FlexBox width="100vw" justifyContent="space-between" alignItems="flex-end" bottomBorder="0.5px solid rgba(191, 191, 191, 1)" padding="0 0 7px 20px" minHeight="105px" margin={margin}>
        <Text txt={txt} size="24px" weight="bold"></Text>
        {type === "Edit" && <FlexBox>
                <Button bgColor="#4F4DB0" txt={type} height="30px" width="70px" margin="0 20px 0 0" onClick={onClick}></Button>
            </FlexBox>
        }
        {type === "Done" && <FlexBox>
                <Button bgColor="#4F4DB0" txt={type} height="30px" width="70px" margin="0 20px 0 0" onClick={onClick}></Button>
            </FlexBox>
        }
      </FlexBox>
    )
}