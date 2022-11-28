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
import ItemDescNavbar from "../../components/navbar/itemDescNavbar";
import ReviewActiveStars from "../../components/reviews/reviewActiveStars";

export default function ItemDescript({parsedItems}) {

let userName = parsedItems[0].author.name + " " + parsedItems[0].author.lastname;
let description = parsedItems[0].description;
let title = parsedItems[0].title;
let image = parsedItems[0].image;
let rating = parsedItems[0].rating;
let compensation = parsedItems[0].compensation;
let authorImage = parsedItems[0].author.image;
let authorId = parsedItems[0].authorId;
let postId = parsedItems[0].postId;
let postPhoto = parsedItems[0].Photos[0].postPhotoUrl

let categoryText = parsedItems[0].category.categoryName;
let authorName = parsedItems[0].author.name;
const router = useRouter()
function handleLinkClick() {
    const link = `/categories/${parsedItems[0].categoryId}`
    router.push(link)
}
function startChat() {
    const link = `/chat`
    router.push(link)
}
    

    return ( 
        
        
        <Wrapper alignItems="flex-start" height="fit-content" dir="column" padding="0 0 50px 0">
                {/* <FlexBox dir="column" width="100%"> */}
                <FlexBox width="100%"  top="0px" bgImage={postPhoto} height="300px" boxShadow="">
                     <FlexBox position="relative" top="-100px" left="-160px">
                        <ArrowBackIosIcon fontSize="large" onClick={() =>handleLinkClick()}></ArrowBackIosIcon>
                    </FlexBox>
            {/* <ImgPlaceholder bgImage={postPhoto} width="100%" height="328px"></ImgPlaceholder> */}
                </FlexBox>
                <FlexBox width="100%" dir="column">
                    <ReviewActiveStars name={userName} nameSize="21px" comment="" program="D3" boxWidth="73px" image="/camera-man.jpg"></ReviewActiveStars>
                <FlexBox dir="column" alignItems="left" width="100%" padding="0 30px 0 30px" minHeight="100px" border="0.5px solid rgba(191, 191, 191, 1)">
                    <Text txt={title} size="21px" weight="600"></Text>
                    <Text size="15px" txt={categoryText} color="grey"></Text>
                </FlexBox>
                <FlexBox  dir="column" alignItems="left" width="100%" padding="0 30px 0 30px" minHeight="100px" border="0.5px solid rgba(191, 191, 191, 1)">
                    <Text txt={description}></Text>
                </FlexBox>
                <FlexBox dir="column">
                    <FlexBox dir="column" justifyContent="flex-start" width="100%" padding="20px 30px 0 30px">
                            <FlexBox justifyContent="space-between" width="100%">
                                <Text txt="Service Satisfaction"></Text>
                                <FlexBox alignItems="flex-start"><Icon className="star"></Icon><Text txt="4.0"></Text></FlexBox>
                            </FlexBox>
                            <FlexBox justifyContent="space-between" width="100%">
                                <Text txt="Seller Response"></Text>
                                <FlexBox alignItems="flex-start"><Icon className="star"></Icon><Text txt="4.0"></Text></FlexBox>
                            </FlexBox>
                            <FlexBox justifyContent="space-between" width="100%" padding="0 2px 0 0">
                                <Text txt="Would Recommend"></Text>
                                <FlexBox alignItems="flex-start"><Icon className="star"></Icon><Text txt="4.5"></Text></FlexBox>
                            </FlexBox>
                    </FlexBox>
                </FlexBox>
                <ReviewHorizontalScroll bgImage1="/face5.jpg" bgImage2="/face4.jpg" bgImage3="/face3.jpg" bgImage4="/face2.jpg" bgImage5="/face1.jpg"></ReviewHorizontalScroll>
                </FlexBox>
            {/* </FlexBox> */}
            <ItemDescNavbar position="fixed" top="92vh" onClick={() =>startChat()}></ItemDescNavbar>
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
            category: true,
            Photos: true
        }
    });

    
    
    let parsedItems = JSON.parse(JSON.stringify(items));
    console.log(parsedItems);
    return {
        props: { parsedItems }
    }
}