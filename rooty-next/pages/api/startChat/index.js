// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {prisma} from "../../../server/db/client"

export default async function handler(req, res) {

    const {author, thisUserEmail} = req.body
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
        
        if (ifThereIsAChat.length === 0) {
            const createAChat = await prisma.chatRoom.create({
                data: {
                    userOneId: thisUser.userId,
                    userTwoId: author.userId,
                }
            })
            res.status(200).json({ createAChat })
        } else {
            res.status(200).json({ ifThereIsAChat })
        }
        res.status(200).json({ name: 'John Doe' })
    } else {
        res.status(200).json({ name: 'John Doe' })
    }
  }
  