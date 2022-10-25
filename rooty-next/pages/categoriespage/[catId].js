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

export default function OneCategory({ parsedItems }) {
    const r = useRouter();

    return (
            <Wrapper>
                <FlexBox dir="column" width="100%">
                    <FlexBox width="100%" dir="column">
                        <CardWithSearch bgImage="/3081629.jpg" txt="Broadcast & Media"></CardWithSearch>
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
                                    name={item.title} rating={item.rating} price={item.price} description={item.description} compensation={item.compensation} image={item.image} />
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
    });
    let parsedItems = JSON.parse(JSON.stringify(categoryItems));
    console.log('categoryItemss', categoryItems)
    return {
        props: { parsedItems }
    }
}


