// for making it work check the user id with the id we have here and if there were not the same it will be the other person sending chat not us



import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import ChatNavBar from "../../components/chat/chatNavBar";
import axios from "axios";
import MyMessage from "../../components/chat/myMessage";
import NotMyMessage from "../../components/chat/notMyMessage";
import ChatHeader from "../../components/chat/chatHeader";
import { FlexBox, Wrapper } from "../../styles/globals";
import Pusher from "pusher-js";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { prisma } from "../../server/db/client";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')


export default function ACertainChatRoom(props) {
  const theChatRoomId = props.theId;
  const newChatRoomId = `${props.theId}`
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [userId, setUserId] = useState("");

  const scrollContainer = useRef()

  useEffect(() => {
    scrollContainer.current.scrollTo({top: Number.MAX_SAFE_INTEGER, behavior: "smooth"})
  }, [chats])

  useEffect(() => {
    const pusher = new Pusher("70d9960be5691b5baa3a", {
      cluster: "us3",
      encrypted: true,
    });

    const channel = pusher.subscribe(newChatRoomId);
    channel.bind("send-message", function (data) {
      if (data.thisUser == props.thisUserId) {
        // console.log(data);
        setChats((chats) => [...chats, <MyMessage key={data.messageId} time={formatTimeAgo(data.time)} text={data.txt} />]);
      } else {
        setChats((chats) => [...chats, <NotMyMessage key={data.messageId} time={formatTimeAgo(data.time)} text={data.txt} />]);
      }
    });

    return () => {
      pusher.unsubscribe(newChatRoomId);
      pusher.disconnect();
    };
  }, []);

  useEffect(() => {
    (async function yo() {
      await axios.post("/api/allChat", { userId: props.theId }).then((res) => {
        const oldPosts = res.data.map((m) => {
          // console.log(formatTimeAgo(m.createdAt))
          // console.log(m.author);
          if (m.isItText) {
            if (m.author.userId == props.thisUserId) {
              return <MyMessage key={m.messageId} time={formatTimeAgo(m.createdAt)} text={m.content} />
            } else {
              return <NotMyMessage key={m.messageId} time={formatTimeAgo(m.createdAt)} text={m.content} />
            }
          } else {
            if (m.userId == props.thisUserId) {
            return <MyMessage key={m.messageId} time={formatTimeAgo(m.createdAt)} type="messageImage" bgImage={m.content} />
          } else {
            return <NotMyMessage key={m.messageId} time={formatTimeAgo(m.createdAt)} type="messageImage" bgImage={m.content} />
            }
          }
        });
        setChats(oldPosts);
      });
    })();
  }, []);


  async function sendTextToTheBackEnd(inputText, messageId, time) {
    await axios.post("/api/socketio", { txt: inputText, id: newChatRoomId , isItText: true, messageId, thisUser: props.thisUserId, time});
  }

  async function handleSendButton(e) {
    e.preventDefault();
    if (message.length) {
      await axios.post("/api/allChat/makeOneChat", {data: message, room: newChatRoomId, thisUserId: props.thisUserId}).then(res => {
        sendTextToTheBackEnd(message, res.data.messageId, res.data.createdAt);
      })
      setMessage("");
    }
  }

  function handleChangeText(input) {
    setMessage(input);
  }

  function formatTimeAgo(time) {
      

    if (!time) {
      return ''
    }
    if (typeof time === 'string') {
      time = new Date(time)
    }
    return timeAgo.format(time)
  }

  return (
    <>
    <ChatHeader userName={props.userName} margin="0px 9px 20px 0px" position="fixed"/>
      <Wrapper
        // justifyContent="flex-start"
        alignItems="flex-start"
        height="fit-content"
        padding="0 0 80px 0"
        // dir="column-reverse"
      >
            <FlexBox
              dir="column"
              justifyContent="flex-end"
              alignItems="flex-start"
              width="100%"
              height="fit-content"
            >
              <FlexBox ref={scrollContainer} justifyContent="flex-end" width="100%" minHeight="50vh" height="90vh" bottom="70px" overflowY="scroll" overflowX="hidden">
                <FlexBox dir="column" width="100%">
                  {chats.map((m) => m)}
                </FlexBox>
              </FlexBox>
              <ChatNavBar
                position="fixed"
                margin="30px 0 0 0"
                value={message}
                onChangingTheTextForChat={handleChangeText}
                onSubmitButtonClicked={handleSendButton}
              />
            </FlexBox>
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

  console.log(session);
  const theUserSignIn = await prisma.user.findUnique({
    where: {
      email: session.user.email
    }
  })
  const theId = +context.params.chatRoomId;
  const thisUserId = JSON.parse(JSON.stringify(theUserSignIn.userId))
  return {
    props: { theId, thisUserId },
  };
}
