import { prisma } from "../../../server/db/client";

export default async function handler(req, res) {
    const { heartsItem, heart } = req.body;
    console.log('heartsItem API', heartsItem)
    console.log('heart API', heart)
    let post = await prisma.post.findUnique({
        where: {
            postId: +heartsItem
        },
        include: {
            category: true,
            Photos: true,
            author: true,
        }

    });
    console.log('post API', post)

    if (heart === "false") {
        await prisma.favorite.create({
            data: {
                userId: 1,
                postId: +heartsItem
            }
        })
    } else if (heart === "true") {
        await prisma.favorite.delete({
            where: {
                favoriteId: 1 // here i need to have the postId in the where but i cant do that rn because only the PK of the favourite table is allowed in the where (ask sam tomorrow)
            }
        })
    }
    res.status(200).json({ post });
}
