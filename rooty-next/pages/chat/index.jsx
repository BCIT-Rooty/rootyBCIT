import { useEffect } from "react";
import { FlexBox, Wrapper } from "../../styles/globals";
import {prisma} from "../../server/db/client";
import DialogBox from "../../components/chat/dialogueBox"
import { useRouter } from "next/router";
import Text from "../../components/text";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";


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

        { allTheChatsThatUserWasInJson.map(m => <DialogBox key={`allChats_${allTheChatsThatUserWasInJson.indexOf(m)}`} {...m} postTitle={m.PostId.title}  userName={m.userTwo.name} onClick={handleClickChat} />)}

      </Wrapper>
    </>
  );
}



export async function getServerSideProps(context) {

  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const userWeAre = await prisma.user.findUnique({
    where: {
      email:session.user.email
    }
  })


  const allChatsForThisUser = await prisma.chatRoom.findMany({
    where:{
      userOneId: userWeAre.userId
    }, 
    include: {
      userTwo: true,
      PostId: true
    }
  })

  const allChatsForThisUser2 = await prisma.chatRoom.findMany({
    where:{
      userTwoId: userWeAre.userId
    }, 
    include: {
      userTwo: true,
      PostId: true
    }
  })

  function allNewChats() {
    allChatsForThisUser2.map(m => {
      if(allChatsForThisUser.indexOf(m) !== -1 ){
        return
      } else {
        allChatsForThisUser.push(m)
      }
    })
  }

  allNewChats()
  // let sessionObj = JSON.parse(JSON.stringify(session));

  const allTheChatsThatUserWasInJson = JSON.parse(JSON.stringify(allChatsForThisUser))
  console.log(allTheChatsThatUserWasInJson);

  return {
    props: {
      allTheChatsThatUserWasInJson
    }
  }
}