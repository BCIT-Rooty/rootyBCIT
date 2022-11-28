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
    <FlexBox width="94vw" height="550px" padding="20px" border="black 1px solid" filter="box-shadow: 0px 0px 4px 0px #00000040" borderRadius="16px">
        <FlexBox width="100%" height="100%" dir="column" alignItems="flex-start" justifyContent="center">

            <FlexBox dir="column" alignItems="flex-start" margin="10px 0">
                <Text txt="Write a review" weight="700" size="26px" padding="3px 0"></Text>
                <Text txt="Sohrab Radmehr - Service" weight="500" size="15px" color="grey"></Text>
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

            <FlexBox width="100%" alignItems="flex-start" margin="10px 0" dir="column">
            <Button width="84vw" margin="10px 0px" type="button" txt="Post Review" bgColor="#4F4DB0" borderRadius="16px"></Button>
            <Button width="84vw" margin="10px 0px" type="button" txt="Cancel" color="black" bgColor="#FFFFFF" borderRadius="16px" border="1px solid black"></Button>
            </FlexBox>

        </FlexBox>
    </FlexBox>
    )
}