import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import SubmitButton from "../../components/sohrabsButtons/SubmitButton";
import TextInput from "../../components/sohrabsInputs/TextInput";
import { fakeDbMessage } from "../../server/database";
import * as db from "../../server/database";
import ChatNavBar from "../../components/chat/chatNavBar";
import axios from "axios";
import MyMessage from "../../components/chat/myMessage";
import NotMyMessage from "../../components/chat/notMyMessage";
import crypto from "crypto";
import { promisify } from "util";
export default function ACertainChatRoom(props) {
  const router = useRouter();
  const { asPath } = useRouter();
  const cleanPath = asPath.split("#")[0].split("?")[0];
  const theChatRoomId = props.theId;
  const [message, setMessage] = useState("");
  const socket = io.connect("/api/socketio");
  const [chats, setChats] = useState([]);
  const [lastMessageId, setLastMessageId] = useState("");
  var userIdGlobal;
  const randomBytes = promisify(crypto.randomBytes);

  useEffect(() => {
    userIdGlobal = Math.floor(Math.random() * 10000) + 1;
    joinRoom(theChatRoomId);

    window.onbeforeunload = function () {
      socket.emit("avoid-duplicate");
    };
  }, []);

  useEffect(() => {
    receiveMessage();
  }, []);

  function receiveMessage() {
    // The userID doesn't exits now because that we don't have users now!
    socket.on("receive-message", (message, userId, hexCode) => {
      console.log(hexCode);
      console.log(lastMessageId);
      const shouldThisValuesPass = checkTheTwoHexCodes(hexCode);
      console.log(shouldThisValuesPass);
      if (lastMessageId === hexCode) {
        return;
      } else {
        console.log("This is someone else", message, userId);
        // setChats([...chats, <NotMyMessage text={message} />])
      }
    });
  }

  function checkTheTwoHexCodes(hexCode) {
    console.log(lastMessageId, hexCode === lastMessageId);
    return hexCode === lastMessageId;
  }

  async function hexCodeGenerator() {
    const rawBytes = await randomBytes(16);
    const stringRawBytes = rawBytes.toString("hex");
    return stringRawBytes;
  }

  function joinRoom(room) {
    console.log("Joined room", room);
    socket.emit("join-room", room, userIdGlobal);
  }

  async function sendTextToTheBackEnd(inputText, room) {
    await hexCodeGenerator().then((res) => {
      setLastMessageId(res);
      console.log(res);
      socket.emit("send-text", inputText, room, res);
      setChats([...chats, <MyMessage key={res} text={inputText} />]);
    });
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
