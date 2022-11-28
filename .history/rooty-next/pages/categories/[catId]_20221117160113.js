import Item from '../../components/Item';
import { getItemsForEachCategory } from '../../server/database.js';
import { useRouter } from 'next/router';
import { FlexBox, Wrapper } from '../../styles/globals';
import { ImgPlaceholder } from '../../styles/globals';
import Text from '../../components/text';
import GradientCard from '../../components/gradientCard';
import { Search } from 'semantic-ui-react';
import CardWithSearch from '../../components/gradientCard/cardWithSearch';
import { prisma } from '../../server/db/client';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function OneCategory({ parsedItems, parsedCategoryName }) {
    const r = useRouter();
    const categoryName = parsedCategoryName.map((category) => category.categoryName);
    const image = parsedCategoryName.map((category) => category.image)
    const router = useRouter()
    function handleLinkClick() {
        const link = `/categories`
        router.push(link)
    }


    return (
            <Wrapper alignItems="start" height="fit-content">
                <FlexBox dir="column" width="100%">
                <FlexBox position="relative" top="40px" left="-155px"><ArrowBackIosIcon fontSize="large" onClick={() =>handleLinkClick()}></ArrowBackIosIcon></FlexBox>
                    <FlexBox width="100%" dir="column">
                        <CardWithSearch bgImage={image} txt={categoryName}></CardWithSearch>
                    </FlexBox>
                <div>
                    {
                        parsedItems.map((item) => {
                            return (
                            <div key={item.postId}>
                                <Item
                                    onClick={
                                        () => r.push({
                                            pathname: `/posts/${item.postId}`,
                                        })}
                                   
                                    name={item.title} rating={item.rating} price={item.price} description={item.description} compensation={item.compensation} image={item.Photos[0].postPhotoUrl} />
                            </div>
                        )
                        })
                    }
                </div>
            </FlexBox>
            </Wrapper>
        )}


export async function getServerSideProps(context) { // we need to use getServerSideProps because we need to fetch data from the database, and we can't do that on the client side, only on the server side, so we need to use getServerSideProps, which is a next.js function that runs on the server side. (IS THIS ALL TRUE?!?!?!)
    const categoryItems = await prisma.post.findMany({
        where: {
            categoryId: +context.params.catId
        },
        include: {
            category: true,
            Photos: true
        }
    });
    const categoryName = await prisma.category.findMany({
        where: {
            categoryId: +context.params.catId
        }
    });
    
    let parsedItems = JSON.parse(JSON.stringify(categoryItems));
    let parsedCategoryName = JSON.parse(JSON.stringify(categoryName));
    // console.log('parsdedName', parsedItems[0].Photos)
    return {
        props: { parsedItems, parsedCategoryName }
    }
}


