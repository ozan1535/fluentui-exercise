import { NextApiRequest, NextApiResponse } from "next";
import { users } from "../../data/user";
import { user } from "../../IModels/IUser";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'GET') {
        res.status(200).json(users);
    } else if(req.method === 'POST') {
        const name = req.body.name;
        const phone = req.body.phone;
        const email = req.body.email;
        const id = parseInt(req.body.id);
        const newUser: user = {
            id,
            name,
            phone,
            email
        }

        users.push(newUser);
        res.status(201).json(newUser);
    }
}