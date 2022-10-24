import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import SubmitButton from "../../components/buttons/SubmitButton";
import TextInput from "../../components/inputs/TextInput";
import { fakeDbMessage } from "../../server/database";
import * as db from "../../server/database";

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

  return (
    <>
      <form>
        <TextInput
          inputTitle={"Send a message"}
          value={message}
          onChangingTheText={setMessage}
        />
        <SubmitButton
          onSubmitButtonClicked={handleSendButton}
          textInsideTheButton={"Done"}
        />
      </form>
    </>
  );
}

export async function getServerSideProps(context) {
  const theId = +context.params.chatRoomId;
  return {
    props: { theId },
  };
}
