import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import SubmitButton from "../../components/sohrabsButtons/SubmitButton";
import TextInput from "../../components/sohrabsInputs/TextInput";
import { fakeDbMessage } from "../../server/database";
import * as db from "../../server/database";
import ChatNavBar from "../../components/chat/chatNavBar";
import axios from "axios";

export default function ACertainChatRoom(props) {
  const router = useRouter();
  const { asPath } = useRouter();
  const cleanPath = asPath.split("#")[0].split("?")[0];
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
      });

      // The userID doesn't exits now because that we don't have users now!
      socket.on("receive-message", (message, userId) => {
        console.log(message, userId);
      });

      window.onbeforeunload = function () {
        socket.emit("avoid-duplicate");
      };
    });
  }, []);

  function joinRoom(room) {
    console.log("Joined room", room);
    socket.emit("join-room", room, userIdGlobal);
  }

  function sendTextToTheBackEnd(inputText, room) {
    socket.emit("send-text", inputText, room);
  }

  function handleSendButton(e) {
    e.preventDefault();
    if (message.length) {
      sendTextToTheBackEnd(message, theChatRoomId);
    }
  }

  function handleChangeText(input) {
    setMessage(input);
  }

  return (
    <>
      <ChatNavBar
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
