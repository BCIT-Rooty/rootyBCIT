// import { users, getItemsForUser } from '../../server/database';
import { prisma } from '../../server/db/client';

export default function UserProfile({}) {

    // let userName = parsedItems.map(user => user.firstName + ' ' + user.lastName);
    // let userId = 1

    
      
    return (
        <div>
            <h1>{userName[0]}</h1>
            <div>
            <br></br>
            <br></br>
                <span>
                    <div>Account<br></br>
                    <a>My Profile</a><br></br>
                    <a href={`userProfile/${userId}`}>My Posts</a><br></br>
                    <a>Favourites list</a><br></br>
                    <a>Recently viewed (?)</a><br></br>
                    <a>Notifications</a><br></br>
                    <a></a>
                    </div>
                </span>
                <br></br>
                <span>
                <div>Account Settings<br></br>
                    <a>Accessability</a><br></br>
                    <a>Security</a><br></br>
                    <a>Recently viewed (?)</a><br></br>
                    <a></a>
                    </div>
                </span>
            </div>
        </div>
    )
    }

    // export async function getServerSideProps(context) {
    //     const userItems = await prisma.post.findMany({
    //         where: {
    //             authorId: +context.params.userId
    //         },
    //     })
    //     let parsedItems = JSON.parse(JSON.stringify(userItems))
    //     return {
    //         props: { parsedItems }
    //     }
    // }