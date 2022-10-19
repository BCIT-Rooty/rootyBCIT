
export const categoryList = [
    { id: 1, name: 'FINANCE & BUSINESS' },
    { id: 2, name: 'BROADCAST & MEDIA' },
    { id: 3, name: 'TUTORING' },
    { id: 4, name: 'ARTS & DESIGN' },
    { id: 5, name: 'MARKETING' },
];

export const items = [
    {
        id: 1,
        name: 'item1',
        rating: 5,
        description: 'item1 description',
        categoryId: 1
    },
    {
        id: 2,
        name: 'item2',
        rating: 4,
        description: 'item2 description',
        categoryId: 1
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

