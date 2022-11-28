import { FlexBox } from "../../styles/globals";
import Text from "../text";
import Rating from '@mui/material/Rating';
import Button from "../button";
import { TextInput } from "../inputs";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function LeaveReview(){
    const [description, setDescription] = useState("");
    const router = useRouter();
    return(
    <FlexBox width="94vw" height="500px" padding="20px" border="black 1px solid" filter="box-shadow: 0px 0px 4px 0px #00000040" borderRadius="16px">
        <FlexBox width="100%" height="100%" dir="column" alignItems="flex-start" justifyContent="flex-start">

            <FlexBox dir="column" alignItems="flex-start" margin="10px 0">
                <Text txt="Write a review" weight="700" size="24px" ></Text>
                <Text txt="Sohrab Radmehr - Service" weight="500" size="15px" ></Text>
            </FlexBox>

            <FlexBox dir="column" width="100%" alignItems="flex-start" margin="10px 0">
                <Rating sx={{ fontSize: 47 }}></Rating>
            </FlexBox>

            <FlexBox dir="column" width="100%" alignItems="flex-start" margin="10px 0">
                <TextInput
                placeholder="Write in detail about your experience"
                type="textarea"
                border="solid 1px #545454"
                onChangingTheText={setDescription}
                width="80vw"
                minHeight="200px"
            ></TextInput>
            </FlexBox>

            <FlexBox>
                <Button></Button>
            </FlexBox>

        </FlexBox>
    </FlexBox>
    )
}