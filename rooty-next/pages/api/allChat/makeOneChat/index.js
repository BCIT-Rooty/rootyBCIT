import { prisma } from "../../../../server/db/client";

export default async function handler(req, res) {
  const { data, room } = req.body;
 const newRoom = parseInt(room)
  const message = await prisma.message.create({
    data: {
      content: data,
      userId: 1,
      chatRoomId: newRoom,
    },
  });
  console.log(message)
  res.status(200).json(message);
}
