import {prisma} from "../../../server/db/client"




export default function handler(req, res) {
    console.log(req.body)
    res.status(200).json({name: "bow"})
  }
  