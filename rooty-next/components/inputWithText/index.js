import { FlexBox } from "../../styles/globals"
import Text from "../text"
import Input, {TextInput} from "../inputs"

export default function InputWithText({
    type,
    txt,
    padding="20px 0 20px 20px",
    textPadding="0 0 10px 0",
    bgImage,
    margin="0 0 0 -20px",
    value,
    defaultValue,
    bottomBorder,
    topBorder="0.5px solid black"
}) {
    return(<FlexBox topBorder={topBorder} width="100vw" margin={margin} justifyContent="start" bottomBorder={bottomBorder}>
        {type === "textarea" && <FlexBox dir="column" alignItems="start" padding={padding}>
        <Text txt={txt} padding={textPadding}></Text>
      <TextInput type={type} bgImage={bgImage} defaultValue={defaultValue} value={value}></TextInput>
    </FlexBox>
    }
    {type !== "textarea" && <FlexBox dir="column" alignItems="start" padding={padding} >
        <Text txt={txt} padding={textPadding}></Text>
      <Input type={type} bgImage={bgImage} defaultValue={defaultValue} value={value}></Input>
    </FlexBox>
    }
    </FlexBox>
    )
}