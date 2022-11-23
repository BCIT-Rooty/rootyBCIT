import { FlexBox } from "../../styles/globals";
import Text from "../../components/text";
import Button from "../../components/button"
import Input, { TextInput } from "../../components/inputs";

export default function AddPortfolio({
    defaultValue,
    value
}) {
    return ( <FlexBox dir="column"  margin="0 0 0 -20px" padding="20px 0 20px 20px" alignItems="start" width="100vw">
        <FlexBox justifyContent="space-between" width="90vw">
          <Text txt="Edit Portfolio Title"></Text>
          <Button bgColor="#4F4DB0" txt="Add" height="30px" width="70px"></Button>
        </FlexBox>
        <Input type="text" defaultValue={defaultValue} value={value} margin="15px 0 0 0"></Input>
        <Input type="file" bgImage="/face2.jpg" margin="15px 0 0 0"></Input> 
      </FlexBox>
    )


}