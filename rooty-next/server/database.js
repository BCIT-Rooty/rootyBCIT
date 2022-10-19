import { Icon } from "semantic-ui-react";



export const categoryList = [
    { id: 1, name: 'FINANCE & BUSINESS', image: "/2205_w037_n003_408b_p1_408.jpg"},
    { id: 2, name: 'BROADCAST & MEDIA', image: "/3081629.jpg" },
    { id: 3, name: 'TUTORING', image: "/3081629.jpg" },
    { id: 4, name: 'ARTS & DESIGN', image: "/2205_w037_n003_408b_p1_408.jpg" },
    { id: 5, name: 'MARKETING', image: "/2205_w037_n003_408b_p1_408.jpg" },
    { id: 6, name: 'COMPUTING', image: "/3081629.jpg" },
];



export const items = [
    {
        id: 1,
        name: 'Video Editor using Premiere Pro and After Effects',
        rating: "4.2/5",
        description: 'item1 description',
        compensation: "$15",
        // barter: "or " <Icon />,
        categoryId: 1,
        image: "/free-stock-videos-1.jpeg" 
    },
    {
        id: 2,
        name: '1-2 Minute Motion Graphics editor',
        rating: "3.8/5",
        description: 'item2 description',
        compensation: "$25",
        categoryId: 1,
        image: "/motion+graphics+animation+nyc.jpeg" 
    },
    {
        id: 3,
        name: 'item3',
        rating: 3,
        description: 'item3 description',
        categoryId: 2
    },
    {
        id: 4,
        name: 'item4',
        rating: 2,
        description: 'item4 description',
        categoryId: 2
    },
    {
        id: 3,
        name: 'item3',
        rating: 3,
        description: 'item3 description',
        categoryId: 3
    },
    {
        id: 4,
        name: 'item4',
        rating: 2,
        description: 'item4 description',
        categoryId: 3
    },
    {
        id: 3,
        name: 'item3',
        rating: 3,
        description: 'item3 description',
        categoryId: 4
    },
    {
        id: 4,
        name: 'item4',
        rating: 2,
        description: 'item4 description',
        categoryId: 4
    },
    {
        id: 3,
        name: 'item3',
        rating: 3,
        description: 'item3 description',
        categoryId: 5
    },
    {
        id: 4,
        name: 'item4',
        rating: 2,
        description: 'item4 description',
        categoryId: 5
    },
];



export async function getItemsForEachCategory(categoryId){
    return items.filter(item => item.categoryId === categoryId)
};

