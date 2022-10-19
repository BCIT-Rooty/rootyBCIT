import { generateUploadURL } from "../../../components/s3.js"

export default async function (req, res) {
    const url = await generateUploadURL();
    res.status(200).json({ url });
  }
  