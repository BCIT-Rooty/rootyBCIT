import { unstable_getServerSession } from "next-auth/next";
import { prisma } from "../../server/db/client";
import { authOptions } from '../api/auth/[...nextauth]';
import bcrypt from "bcrypt";


export default async function handle(req, res) {
    const { method } = req;

    switch (method) {
        case 'POST':
            // get the title and content from the request body
            const { name, lastname, email, password } = req.body
            console.log('REQ BODY', req.body)
            const user = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })

            const hash = await bcrypt.hash(password, 10);

            if (user) {
                res.status(400).json({ message: 'User already exists' })
                // sign them in
            } else {
                const newUser = await prisma.user.create({
                    data: {
                        name: name,
                        lastname: lastname,
                        email: email,
                        password: hash,
                        isActive: "true"
                    }
                })
                res.status(201).json(newUser)
            }
            break;
        case 'GET':

            break
        default:
            res.setHeader('Allow', ['POST', 'GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

