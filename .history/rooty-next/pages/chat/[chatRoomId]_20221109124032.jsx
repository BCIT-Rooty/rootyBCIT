import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import ChatNavBar from "../../components/chat/chatNavBar";
import axios from "axios";
import MyMessage from "../../components/chat/myMessage";
import NotMyMessage from "../../components/chat/notMyMessage";
import { FlexBox, Wrapper } from "../../styles/globals";

export default function ACertainChatRoom(props) {
  const theChatRoomId = props.theId;
  const [message, setMessage] = useState("");
  const socket = io();
  const [chats, setChats] = useState([]);
  const [userId, setUserId] = useState("");
  var userIdGlobal;
  let oldPosts;

  useEffect(() => {
    userIdGlobal = Math.floor(Math.random() * 10000) + 1;
    fetch("/api/socketio").finally(() => {
      socket.on("connect", () => {
        joinRoom(theChatRoomId);
        console.log(socket.id);
        setUserId(socket.id);
        (async function yo() {
          await axios
            .post("/api/allChat", { userId: props.theId })
            .then((res) => {
              console.log(res);
              oldPosts = res.data.map((m) => <MyMessage text={m.content} />);
            });
        })();
        // The userID doesn't exits now because that we don't have users now!
        socket.on("receive-message", (message, userId, frontId) => {
          if (frontId == socket.id) {
            return;
          } else {
            console.log("This is someone else", message, userId, frontId);
            getNewData()
            // setChats([...oldPosts, <MyMessage text={message} />]);
          }
        });
      });
    });
    window.onbeforeunload = function () {
      socket.emit("avoid-duplicate");
    };
  }, []);

  useEffect(() => {
    (async function yo() {
      await axios.post("/api/allChat", { userId: socket.id }).then((res) => {
        const oldPosts = res.data.map((m) => <MyMessage text={m.content} />);
        setChats(oldPosts);
      });
    })();
  }, []);

  function getNewData() {
    (async function yo() {
      await axios
        .post("/api/allChat", { userId: props.theId })
        .then((res) => {
          console.log(res);
          oldPosts = res.data.map((m) => <MyMessage text={m.content} />);
          setChats(oldPosts);
        });
    })();
  }

  function joinRoom(room) {
    console.log("Joined room", room);
    socket.emit("join-room", room, userIdGlobal);
  }

  async function sendTextToTheBackEnd(inputText, room) {
    socket.emit("send-text", inputText, room, userId);
    setChats([...chats, <MyMessage text={inputText} />]);
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
      <Wrapper>
        <FlexBox dir="column" justifyContent="flex-end">
      {chats.map((m) => m)}
      <ChatNavBar
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
