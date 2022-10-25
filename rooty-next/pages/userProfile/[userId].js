// import { users, getItemsForUser } from '../../server/database';
import { prisma } from '../../server/db/client';

export default function UserProfile({ parsedItems }) {

    // let userName = parsedItems.map(user => user.name + ' ' + user.lastName);
    // console.log('THIS IS THE USERNAME', userName)
    let userId = 1



    return (
        <div>
            <h1>{parsedItems.name + ' ' + parsedItems.lastname}</h1>
            <div>
                <br></br>
                <br></br>
                <span>
                    <div>Account<br></br>
                        <a>My Profile</a><br></br>
                        <a href={`userPosts/${parsedItems.userId}`}>My Posts</a><br></br>
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

    export async function getServerSideProps(context) {
        const userItems = await prisma.user.findUnique({
            where: {
                userId: +context.params.userId
            },
        })
        let parsedItems = JSON.parse(JSON.stringify(userItems))
        console.log('HERE CUNT', parsedItems)
        return {
            props: { parsedItems }
        }
    }