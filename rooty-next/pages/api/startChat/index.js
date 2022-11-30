// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {prisma} from "../../../server/db/client"

export default async function handler(req, res) {

    const {author, thisUserEmail, postId} = req.body
    // console.log(author, thisUserEmail)

    const thisUser = await prisma.user.findUnique({
        where: {
            email: thisUserEmail            
        }
    })

    console.log("here")
    if (thisUser.userId !== author.userId) {

        const ifThereIsAChat = await prisma.chatRoom.findMany({
            where: {
                userOneId: thisUser.userId,
                userTwoId: author.userId
            }
        })

        const ifThereIsAChat2 = await prisma.chatRoom.findMany({
            where: {
                userTwoId: thisUser.userId,
                userOneId: author.userId
            }
        })
        
        
        function allNewChats() {
            ifThereIsAChat2.map(m => {
            if(ifThereIsAChat.indexOf(m) !== -1 ){
                return
            } else {
                ifThereIsAChat.push(m)
            }
            })
        }

        allNewChats()


        if (ifThereIsAChat.length === 0) {
            const createAChat = await prisma.chatRoom.create({
                data: {
                    userOneId: thisUser.userId,
                    userTwoId: author.userId,
                    postId: postId
                }
            })
            res.status(200).json({  theChat: createAChat.chatRoomId })
        } else {
            res.status(200).json({ theChat: ifThereIsAChat[0].chatRoomId})
        }
    } else {
        res.status(200).json({ name: 'John Doe' })
    }
  }
  