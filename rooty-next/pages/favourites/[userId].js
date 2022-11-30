import Item from "../../components/Item";
// import { getItemsForUser } from '../../../server/database.js'
import { prisma } from "../../server/db/client";
import { Wrapper } from "../../styles/globals";

export default function userPosts({ parsedItems }) {
    return (
        <Wrapper padding="50px 0 0 0" height="fit-content" dir="column">
            <h1>My Favourites</h1>
            <br></br>
            <br></br>
            <div>
                {parsedItems.map((item) => {
                    return (
                        <div key={item.post.postId}>
                            <div key={item.post.id}>
                                <Item
                                    key={item.post.id}
                                    name={item.post.title}
                                    price={item.post.price}
                                    rating={item.post.rating}
                                    description={item.post.description}
                                    // image={item.post.Photos[0].postPhotoUrl}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </Wrapper>
    );
}

export async function getServerSideProps(context) {
    // we need to use getServerSideProps because we need to fetch data from the database, and we can't do that on the client side, only on the server side, so we need to use getServerSideProps, which is a next.js function that runs on the server side. (IS THIS ALL TRUE?!?!?!)
    const favoriteItems = await prisma.favorite.findMany({
        where: {
            userId: +context.params.userId,
        },
        include: {
            post: true,
        }
    });
    let parsedItems = JSON.parse(JSON.stringify(favoriteItems));
    console.log("LOOK HERE", parsedItems)

    return {
        props: { parsedItems },
    };
}
