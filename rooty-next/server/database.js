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




