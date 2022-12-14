import {prisma} from "../../../server/db/client"


export default async function handler(req, res) {
    const allChat = await prisma.message.findMany({
        where: {
            chatRoomId: req.body.userId
        }, 
        include: {
            author: true
        }
    })
    res.status(200).json(allChat)
  }
  