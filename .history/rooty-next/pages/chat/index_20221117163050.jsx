import { useEffect } from "react";
import io from "socket.io-client";
import { FlexBox, Wrapper } from "../../styles/globals";
import {prisma} from "../../server/db/client";
import DialogBox from "../../components/chat/dialogueBox"
import { useRouter } from "next/router";
import Text from "../../components/text";


export default function Chat({allTheChatsThatUserWasInJson}) {

  const router = useRouter()
  
  function handleClickChat(chatRoom) {
    router.push(`/chat/${chatRoom}`)
  }

  return (
    <>
      <Wrapper
        padding="0 0 50px 0"
        justifyContent="flex-start"
        alignItems="flex-start"
        dir="column"
        height="fit-content"
      >
        <FlexBox width="100%" padding="20px" justifyContent="flex-start"><Text txt="Chats" size="24px" weight="bold"></Text></FlexBox>

        { allTheChatsThatUserWasInJson.map(m => <DialogBox {...m} userName={m.userTwo.name} onClick={handleClickChat} />)}

      </Wrapper>
    </>
  );
}



export async function getServerSideProps(context) {

  const allChatsForThisUser = await prisma.chatRoom.findMany({
    where:{
      userOneId: 1
    }, 
    include: {
      userTwo: true
    }
  })

  const allTheChatsThatUserWasInJson = JSON.parse(JSON.stringify(allChatsForThisUser))
  console.log(allTheChatsThatUserWasInJson);

  return {
    props: {
      allTheChatsThatUserWasInJson
    }
  }
}