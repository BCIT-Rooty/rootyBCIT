
import { prisma } from "../../server/db/client";



export default async function handler(req, res) {
    const categories = await prisma.category.findMany();
    res.status(200).json(categories);
} 


