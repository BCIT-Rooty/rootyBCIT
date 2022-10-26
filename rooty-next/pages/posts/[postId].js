import { categoryList } from "../../server/database";
import CategoryCard from "../../components/categoryCard";
import { FlexBox, ImgPlaceholder, Wrapper } from "../../styles/globals";
import Review from "../../components/reviews/review";
import Text from "../../components/text";
import { prisma } from "../../server/db/client";
import { Icon } from "semantic-ui-react";
import ReviewHorizontalScroll from "../../components/reviews/reviewCards";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React from 'react';
import { useRouter } from "next/router";

export default function ItemDescript({parsedItems}) {

let userName = parsedItems[0].author.name + " " + parsedItems[0].author.lastname;
let description = parsedItems[0].description;
let title = parsedItems[0].title;
const router = useRouter()
function handleLinkClick() {
    const link = `/categories/${parsedItems[0].categoryId}`
    router.push(link)
}
    

    return (
        <Wrapper alignItems="flex-start">
            <FlexBox dir="column" width="100%">
            <FlexBox position="relative" top="40px" left="-140px"><ArrowBackIosIcon fontSize="large" onClick={() =>handleLinkClick()}></ArrowBackIosIcon></FlexBox>
                <ImgPlaceholder bgImage="/3081629.jpg" width="100%" height="328px"></ImgPlaceholder>
                <Review name={userName} nameSize="21px" comment="" program="here should be a program of the user" boxWidth="73px" image="/2205_w037_n003_408b_p1_408.jpg"></Review>
                <FlexBox dir="column" alignItems="left" width="100%" padding="0 30px 0 30px" minHeight="108px" border="0.5px solid rgba(191, 191, 191, 1)">
                    <Text txt={title} size="21px"></Text>
                    <Text size="15px" txt='make a coloumn in the db its gonna show category it falls into' color="grey"></Text>
                </FlexBox>
                <FlexBox  dir="column" alignItems="left" width="100%" padding="0 30px 0 30px" minHeight="130px" border="0.5px solid rgba(191, 191, 191, 1)">
                    <Text txt={description}></Text>
                </FlexBox>
                <FlexBox dir="column" justifyContent="flex-start" width="100%" padding="20px 30px 0 30px">
                        <FlexBox justifyContent="space-between" width="100%">
                            <Text txt="Service Satisfaction"></Text>
                            <FlexBox alignItems="flex-start"><Icon className="star"></Icon><Text txt="4.0"></Text></FlexBox>
                        </FlexBox>
                        <FlexBox justifyContent="space-between" width="100%">
                            <Text txt="Seller Response"></Text>
                            <FlexBox alignItems="flex-start"><Icon className="star"></Icon><Text txt="4.0"></Text></FlexBox>
                        </FlexBox>
                        <FlexBox justifyContent="space-between" width="100%">
                            <Text txt="Would Recommend"></Text>
                            <FlexBox alignItems="flex-start"><Icon className="star"></Icon><Text txt="4.5"></Text></FlexBox>
                        </FlexBox>
                </FlexBox>
                <ReviewHorizontalScroll bgImage1="/face5.jpg" bgImage2="/face4.jpg" bgImage3="/face3.jpg" bgImage4="/face2.jpg" bgImage5="/face1.jpg"></ReviewHorizontalScroll>
            </FlexBox>
        </Wrapper>
    )


}


export async function getServerSideProps(context){
    let items = await prisma.post.findMany({
        where: {
            postId: +context.params.postId
        },
        include: {
            author: true,
        }
    });


    let parsedItems = JSON.parse(JSON.stringify(items));
    return {
        props: { parsedItems }
    }
}