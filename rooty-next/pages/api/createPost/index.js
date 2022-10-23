import {prisma} from "../../../server/db/client"
import * as db from "../../../components/dbFunctions/databaseFunctions"



export default function handler(req, res) {
    console.log(req.body)
    db.createPost(req.body)
    res.status(200).json({name: "bow"})
  }
  