import { Icon } from "semantic-ui-react";



export const categoryList = [
    { id: 1, name: 'BROADCAST & MEDIA', image: "/2205_w037_n003_408b_p1_408.jpg"},
    { id: 2, name: 'FINANCE & BUSINESS', image: "/3081629.jpg" },
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
        image: "/camera-man.jpg" 
    },
    {
        id: 2,
        name: '1-2 Minute Motion Graphics editor',
        rating: "3.8/5",
        description: 'item2 description',
        compensation: "$25",
        categoryId: 1,
        image: "/vector-drawing.jpg" 
    },
    {
        id: 10,
        name: 'Audio mixing for Video editing',
        rating: "4.5/5",
        description: 'item2 description',
        compensation: "$40",
        categoryId: 1,
        image: "/video-edit.jpg" 
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



export const reviewText = [
    {id: 1, name: "Ben", program: "D3", image: "/face5.jpg", text: 'Working with Joyce was quick, easy, fun, flexible and a pure delight. She not only delivered the projects on all their given timelines, but also the quality of the logo was very impressive and unique.'},
    {id: 2, name: "Jasmin", program: "Real Estate", image: "/face4.jpg", text: 'Joyce is an EXCELLENT resource and gave us high quality work in a very timely fashion. He was very responsive and produced excellent results. Highly Highly recommended.'},
    {id: 3, name: "Elizabeth", program: "Accounting", image: "/face3.jpg", text: 'As usual, Joyce did great work and was very easy to communicate with. Handled feedback well and was able to be flexible to bring forth exactly what the client wanted.'},
    {id: 4, name: "Meghan", program: "Arts and Design", image: "/face2.jpg", text: 'Joyce was friendly, and delivered her work on time. It was a relatively simple project (that ultimately had to be cut a little short due to changes on my end). Her work is really fantastic'},
    {id: 4, name: "Denis", program: "Electrical Engineering", image: "/face1.jpg", text: 'You definitely have some great talent, but the delays and the lack of attention to detail and was holding us back from getting the items we needed, and on time.'}
]