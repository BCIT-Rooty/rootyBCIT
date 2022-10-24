// import { prisma } from "./db/client";







export const items = [
    {
        id: 1,
        name: 'item1',
        rating: 5,
        description: 'item1 description',
        categoryId: 1
    }
];

export const fakeDbChat = [
    {
        chatRoomId: 18,
        user_id_1: 1,
        User_id_2: 2,
    }
]

export const fakeDbMessage = [
    {
        message_id: 1,
        content: "This is the first message",
        user_id: 1,
        chatRoomId: 1
    }, 
    {
        message_id: 2,
        content: "This is the second message",
        user_id: 2,
        chatRoomId: 1
    }
]

export function writeChatToTheDataBase(inputText, dateDB, userIdGlobal, room) {
    fakeDbMessage.push({
        content: inputText, user_id: userIdGlobal, chatRoomId: room
    })
    // console.log(fakeDbMessage)
}

export function getAllChatWithRoomId(roomId) {
    const newFakeDb = fakeDbMessage.filter(m => m.chatRoomId == roomId)
    return newFakeDb
}


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
