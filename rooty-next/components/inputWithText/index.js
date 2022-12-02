import { FlexBox } from "../../styles/globals";
import Text from "../text";
import Input, { TextInput } from "../inputs";

export default function InputWithText({
  type,
  txt,
  padding = "20px 0 20px 20px",
  textPadding = "0 0 10px 0",
  bgImage,
  margin = "0 0 0 -20px",
  value,
  defaultValue,
  bottomBorder,
  topBorder = "0.5px solid black",
  onChangingTheText = () => {},
}) {
  return (
    <FlexBox
      topBorder={topBorder}
      width="100vw"
      margin={margin}
      justifyContent="start"
      bottomBorder={bottomBorder}
    >
      {type === "textarea" && (
        <FlexBox dir="column" alignItems="start" padding={padding}>
          <Text txt={txt} padding={textPadding}></Text>
          <TextInput
            type={type}
            bgImage={bgImage}
            defaultValue={defaultValue}
            value={value}
            onChangingTheText={onChangingTheText}
          ></TextInput>
        </FlexBox>
      )}
      {type !== "textarea" && (
        <FlexBox dir="column" alignItems="start" padding={padding}>
          <Text txt={txt} padding={textPadding}></Text>
          <Input
            type={type}
            bgImage={bgImage}
            defaultValue={defaultValue}
            value={value}
            onChangingTheText={onChangingTheText}
            onInsertPhotoInsideS3={onChangingTheText}
          ></Input>
        </FlexBox>
      )}
    </FlexBox>
  );
}

// api for update user profile with the vlues that were put in fro the edit profile page
// need an axios.get to set the default value of the input fields to the current user's values
