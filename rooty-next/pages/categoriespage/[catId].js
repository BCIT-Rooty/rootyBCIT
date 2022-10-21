import Item from '../../components/Item';
import { useRouter } from 'next/router';
import { prisma } from '../../server/db/client';

export default function OneCategory({ ParsedItems }) {
    const r = useRouter();

    return (
        <div>
            {
                ParsedItems.map((item) => {

                    return (
                        <div key={item.postId}>
                            <Item
                                onClick={
                                    () => r.push({
                                        pathname: `${item.PostId}/itemDescript`,
                                    })}
                                name={item.title} rating={item.rating} description={item.description} compensation={item.compensation} image={item.image} />
                        </div>
                    )
                })
            }
        </div>
    )
}


export async function getServerSideProps(context) { // we need to use getServerSideProps because we need to fetch data from the database, and we can't do that on the client side, only on the server side, so we need to use getServerSideProps, which is a next.js function that runs on the server side. (IS THIS ALL TRUE?!?!?!)
    const categoryItems = await prisma.post.findMany({
        where: {
            categoryId: +context.params.catId
          },
    });
    let ParsedItems = JSON.parse(JSON.stringify(categoryItems));
    console.log('categoryItemss', categoryItems)
    return {
        props: { ParsedItems }
    }
}