import { FlexBox } from "../../styles/globals"
import Text from "../text"
import Button from "../button"

export default function TitlePage({
    txt="Title Page",
    type="",
    margin="0px",
    onClick,
    txt2="Cocoa",
    type2=true,
}){
    return(
        <FlexBox width="100vw" justifyContent="space-between" alignItems="flex-end" bottomBorder="0.5px solid rgba(191, 191, 191, 1)" padding="0 0 5px 20px" minHeight="100px" margin={margin}>
        {type2 === true && <Text txt={txt} size="24px" weight="bold" width="fit-content"></Text>}
        {type === "Welcome" && <FlexBox>
            <Text txt={txt} size="24px" weight="bold" width="fit-content" padding="0 6px 0 0"></Text>
            <Text txt={txt2} size="24px" weight="bold" width="fit-content" color="#4F4DB0"></Text>
        </FlexBox>
       }
        {type === "Edit" && <FlexBox>
                <Button bgColor="#4F4DB0" txt={type} height="30px" width="70px" margin="0 20px 0 0" onClick={onClick}></Button>
            </FlexBox>
        }
        {type === "Done" && <FlexBox>
                <Button bgColor="#4F4DB0" txt={type} height="30px" width="70px" margin="0 20px 0 0" onClick={onClick}></Button>
            </FlexBox>
        }
        {type === "Cancel" && <FlexBox>
                <Button bgColor="#4F4DB0" txt={type} height="30px" width="70px" margin="0 20px 0 0" onClick={onClick}></Button>
            </FlexBox>
        }
      </FlexBox>
    )
}