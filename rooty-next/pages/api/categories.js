import CategoryCard from "../../components/categoryCard";
import { prisma } from "../../server/db/client";



export default async function handler(req, res) {
    const categories = await prisma.category.findMany();
    console.log('THIS IS CATEGORIES', categories)
    let category = categories.map(category => category.categoryName)
    console.log( "here?", category )
    res.status(200).json(categories);
} 


