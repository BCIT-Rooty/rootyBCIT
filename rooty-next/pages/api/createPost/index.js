import {prisma} from "../../../server/db/client"
import * as db from "../../../components/dbFunctions/databaseFunctions"

export default async function handler(req, res) {
    const returnOfFunction = await db.createPost(req.body)
    if (returnOfFunction === "everythingWorks") res.status(200).json({name: "bow"})
  }
  