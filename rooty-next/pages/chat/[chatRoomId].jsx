import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import ChatNavBar from "../../components/chat/chatNavBar";
import axios from "axios";
import MyMessage from "../../components/chat/myMessage";
import NotMyMessage from "../../components/chat/notMyMessage";

export default function ACertainChatRoom(props) {
  const theChatRoomId = props.theId;
  const [message, setMessage] = useState("");
  const socket = io();
  const [chats, setChats] = useState([]);
  var userIdGlobal;

  useEffect(() => {
    userIdGlobal = Math.floor(Math.random() * 10000) + 1;
    fetch("/api/socketio").finally(() => {
      socket.on("connect", () => {
        joinRoom(theChatRoomId);
        // The userID doesn't exits now because that we don't have users now!
        socket.on("receive-message", (message, userId, hexCode) => {
          console.log("This is someone else", message, userId);
          // setChats([...chats, <NotMyMessage text={message} />])
        });
      });
    });

    window.onbeforeunload = function () {
      socket.emit("avoid-duplicate");
    };
  }, []);

  function joinRoom(room) {
    console.log("Joined room", room);
    socket.emit("join-room", room, userIdGlobal);
  }

  async function sendTextToTheBackEnd(inputText, room) {
    socket.emit("send-text", inputText, room);
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
      {chats.map((m) => m)}
      <ChatNavBar
        value={message}
        onChangingTheTextForChat={handleChangeText}
        onSubmitButtonClicked={handleSendButton}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const theId = +context.params.chatRoomId;
  return {
    props: { theId },
  };
}
