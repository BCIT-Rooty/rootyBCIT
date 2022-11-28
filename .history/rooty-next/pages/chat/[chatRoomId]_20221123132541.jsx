// for making it work check the user id with the id we have here and if there were not the same it will be the other person sending chat not us



import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ChatNavBar from "../../components/chat/chatNavBar";
import axios from "axios";
import MyMessage from "../../components/chat/myMessage";
import NotMyMessage from "../../components/chat/notMyMessage";
import ChatHeader from "../../components/chat/chatHeader";
import { FlexBox, Wrapper } from "../../styles/globals";
import Pusher from "pusher-js";

export default function ACertainChatRoom(props) {
  const theChatRoomId = props.theId;
  const newChatRoomId = `${props.theId}`
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const pusher = new Pusher("70d9960be5691b5baa3a", {
      cluster: "us3",
      encrypted: true,
    });

    const channel = pusher.subscribe(newChatRoomId);
    channel.bind("send-message", function (data) {
      setChats((chats) => [...chats, <MyMessage text={data.txt} />]);
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
          if (m.isItText) {
            return <MyMessage key={m.messageId} text={m.content} />
          } else {
            return <MyMessage type="messageImage" bgImage={m.content} />
          }
        });
        setChats(oldPosts);
      });
    })();
  }, []);


  async function sendTextToTheBackEnd(inputText) {
    await axios.post("/api/socketio", { txt: inputText, id: newChatRoomId , isItText: true});
  }

  async function handleSendButton(e) {
    e.preventDefault();
    if (message.length) {
      await axios.post("/api/allChat/makeOneChat", {data: message, room: newChatRoomId})
      sendTextToTheBackEnd(message);
      setMessage("");
    }
  }

  function handleChangeText(input) {
    setMessage(input);
  }

  return (
    <>
    <ChatHeader margin="0px 9px 20px 0px" position="fixed"/>
      <Wrapper
        // justifyContent="flex-start"
        alignItems="flex-start"
        height="fit-content"
        padding="0 0 80px 0"
        dir="column-reverse"
      >
            <FlexBox
              dir="column"
              justifyContent="flex-end"
              alignItems="flex-start"
              width="100%"
              height="fit-content"
            >
              <FlexBox dir="column" justifyContent="flex-end" width="100%" height="50%">
                {chats.map((m) => m)}
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
  const theId = +context.params.chatRoomId;
  return {
    props: { theId },
  };
}
