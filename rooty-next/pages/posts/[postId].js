import { categoryList } from "../../server/database";
import CategoryCard from "../../components/categoryCard";
import { useRouter } from 'next/router';
import { FlexBox, ImgPlaceholder, Wrapper } from "../../styles/globals";
import Review from "../../components/review";
import Text from "../../components/text";
import { prisma } from "../../server/db/client";


export default function itemDescript({parsedItems}) {


console.log(parsedItems[0])

let userName = parsedItems[0].author.name + " " + parsedItems[0].author.lastname;
let description = parsedItems[0].description;
let title = parsedItems[0].title;
let image = parsedItems[0].image;
let rating = parsedItems[0].rating;
let compensation = parsedItems[0].compensation;
let authorImage = parsedItems[0].author.image;
let authorId = parsedItems[0].authorId;
let postId = parsedItems[0].postId;
let categoryId = parsedItems[0].categoryId;
let authorName = parsedItems[0].author.name;

    return (
        <Wrapper alignItems="flex-start">
            <FlexBox dir="column" width="100%">
                <ImgPlaceholder bgImage="/3081629.jpg" width="100%" height="328px"></ImgPlaceholder>
                <Review name={userName} nameSize="21px" comment="" program="smth here" boxWidth="73px" image="/2205_w037_n003_408b_p1_408.jpg"></Review>
                <FlexBox dir="column" alignItems="left" width="100%" padding="0 30px 0 30px" minHeight="108px" border="0.5px solid rgba(191, 191, 191, 1)">
                    <Text txt={title} size="21pt"></Text>
                    <Text txt='make a coloumn in the db for this'></Text>
                </FlexBox>
                <FlexBox dir="column" alignItems="left" width="100%" padding="0 30px 0 30px" minHeight="158px" border="0.5px solid rgba(191, 191, 191, 1)">
                    <Text txt={description}></Text>
                </FlexBox>

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
    console.log('categoryItemss', items)
    return {
        props: { parsedItems }
    }
}