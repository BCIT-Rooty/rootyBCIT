import { useEffect } from "react";
import { FlexBox, Wrapper } from "../../styles/globals";
import {prisma} from "../../server/db/client";
import DialogBox from "../../components/chat/dialogueBox"
import { useRouter } from "next/router";
import Text from "../../components/text";
// import { unstable_getServerSession } from "next-auth/next";
// import { authOptions } from "../api/auth/[...nextauth]";


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
        <FlexBox width="100%" justifyContent="start" alignItems="flex-end" border="0.5px solid rgba(191, 191, 191, 1)" padding="0 0 9px 40px" margin="0 0 20px 0" minHeight="100px"><Text txt="Chats" size="24px" weight="bold"></Text></FlexBox>

        { allTheChatsThatUserWasInJson.map(m => <DialogBox key={`allChats_${allTheChatsThatUserWasInJson.indexOf(m)}`} {...m} userName={m.userTwo.name} onClick={handleClickChat} />)}

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

  // const session = await unstable_getServerSession(
  //   context.req,
  //   context.res,
  //   authOptions
  // );
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }

  // let sessionObj = JSON.parse(JSON.stringify(session));

  const allTheChatsThatUserWasInJson = JSON.parse(JSON.stringify(allChatsForThisUser))
  console.log(allTheChatsThatUserWasInJson);

  return {
    props: {
      allTheChatsThatUserWasInJson
    }
  }
}