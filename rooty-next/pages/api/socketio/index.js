import { Server } from 'socket.io'
import date from "date-and-time";
import * as db from "../../../components/dbFunctions/databaseFunctions"
import {prisma} from "../../../server/db/client"
// import { useState } from 'react';

export default function ioHandler(req, res)  {
  var userIdGlobal
    if (!res.socket.server.io) {
      console.log('First use, starting socket.io')
      const io = new Server(res.socket.server)

      var theChatRoomId;
      io.on("connection", (socket) => {
        userIdGlobal = socket.id
        // socket.join(theChatRoomId);
        socket.on("send-text", (inputText, room, userId) => {
          if (room == null) {
            socket.broadcast.emit("receive-message", inputText);
          } else {
            const dateDB = date.format(new Date(), "YYYY-DD-MM");
            db.createChat(inputText, dateDB, userIdGlobal, room);
            socket.broadcast.to(room).emit("receive-message", inputText, userIdGlobal, userId);
          }
        });
        socket.on("join-room", (room) => {         
          theChatRoomId = room
          socket.join(room);
          socket.leave(socket.id);
        });
        socket.on("avoid-duplicate", () => {
          socket.leave(theChatRoomId);
        });
        socket.on("disconnect", function () {
          // console.log("disconnected!");
        });
      });

      res.socket.server.io = io
    } else {
      console.log('socket.io already running')
    }
    res.end()
  }
  
  export const config = {
    api: {
      bodyParser: false
    }
  }