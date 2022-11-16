import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import ChatNavBar from "../../components/chat/chatNavBar";
import axios from "axios";
import MyMessage from "../../components/chat/myMessage";
import NotMyMessage from "../../components/chat/notMyMessage";
import { FlexBox, Wrapper } from "../../styles/globals";
const socket = io.connect("http://localhost:3001");

export default function ACertainChatRoom(props) {
  const theChatRoomId = props.theId;
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [userId, setUserId] = useState("");
  var userIdGlobal;
  let oldPosts;

  useEffect(() => {
    userIdGlobal = Math.floor(Math.random() * 10000) + 1;
    socket.emit("join_room", props.theId);
    return () => {
      socket.emit("avoid-duplicate", {room : props.theId});
    }
  }, []);

  useEffect(() => {
    (async function yo() {
      await axios.post("/api/allChat", { userId: props.theId }).then((res) => {
        const oldPosts = res.data.map((m) => <MyMessage key={m.messageId} text={m.content} />);
        setChats(oldPosts);
      });
    })();
  }, []);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      getNewData()
    });
  }, [socket]);

  function getNewData() {
    (async function yo() {
      await axios.post("/api/allChat", { userId: props.theId }).then((res) => {
        // console.log(res);
        oldPosts = res.data.map((m) => <MyMessage key={m.messageId} text={m.content} />);
        setChats(oldPosts);
      });
    })();
  }

  function joinRoom(room) {
    console.log("Joined room", room);
    socket.emit("join_room", room);
  }

  async function sendTextToTheBackEnd(inputText, room) {
    await axios.post("/api/allChat/makeOneChat", {data: inputText, room})
    socket.emit("send_message", inputText, room, userId);
    // setChats([...chats, <MyMessage text={inputText} />]);
  }

  function handleSendButton(e) {
    e.preventDefault();
    if (message.length) {
      sendTextToTheBackEnd(message, theChatRoomId);
      setMessage("");
    }
  }

  function handleChangeText(input) {
    setMessage(input);
  }

  return (
    <>
      <Wrapper
        justifyContent="flex-start"
        alignItems="flex-start"
        height="fit-content"
        padding="0 0 80px 0"
      >
        <FlexBox
          dir="column"
          justifyContent="flex-end"
          alignItems="flex-start"
          width="100%"
          height="fit-content"
        >
          <FlexBox dir="column" width="100%">
            {chats.map((m) => m)}
          </FlexBox>
          <ChatNavBar
            position="fixed"
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
