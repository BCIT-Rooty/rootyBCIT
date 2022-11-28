import { Server } from "socket.io";
import date from "date-and-time";
import * as db from "../../../components/dbFunctions/databaseFunctions";
import { prisma } from "../../../server/db/client";
const Pusher = require("pusher");

export default async function ioHandler(req, res) {
  switch (req.method) {
    case "GET":
      res.status(200).json({ name: "John Doe" });
      break;
    case "POST":
      const { txt, id, messageId } = req.body;
      const pusher = new Pusher({
        appId: process.env.appId,
        key: process.env.key,
        secret: process.env.secret,
        cluster: process.env.cluster,
      });

      await pusher.trigger(id, "send-message", {
        txt,
        messageId
      });

      res.status(200).json({ txt });
      break;
    case "PUT":
      res.status(200).json({ name: "John Doe" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT"]);
      res.status(405).end(`Method ${req.method} is not allowed`);
  }
}
