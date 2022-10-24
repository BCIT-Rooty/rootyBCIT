import Item from '../../components/Item'
import { getItemsForUser } from '../../server/database.js'
import { prisma }  from '../../server/prisma.js'



export default function userPosts({ userItems }) {

    return (
        <div>
            <h1>My Posts</h1>
            <br></br>
            <br></br>
            <div>
                {
                    userItems.map((item) => {
                        return (
                            <>
         
                            <div key={item.id}>
                                <Item key={item.id} name={item.name} rating={item.rating} description={item.description} />
                                <br></br>
                                <br></br>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}


export async function getServerSideProps(context) {                                                                                     // we need to use getServerSideProps because we need to fetch data from the database, and we can't do that on the client side, only on the server side, so we need to use getServerSideProps, which is a next.js function that runs on the server side. (IS THIS ALL TRUE?!?!?!)
    const userItems = await prisma.post.findMany({
        where: {
            
    })
    console.log("LOOK HERE",userItems)

    return {
        props: { userItems }
    }
}
