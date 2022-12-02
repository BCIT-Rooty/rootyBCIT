// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {prisma} from "../../../server/db/client"

export default async function handler(req, res) {

    const {availability, email} = req.body

    const changeUserInfo = await prisma.user.update({
        where: {
          email: email
        },
        data: {
            status: availability
        },
      });

    res.status(200).json({ name: 'John Doe' })
  }
  