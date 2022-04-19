import { NextApiRequest, NextApiResponse } from "next";
import { users } from "../../data/user"


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { paramid } = req.query;

  if (req.method === 'GET') {
    const user = users.find(user => user.id === parseInt(paramid))
    res.status(200).json(user)
  }
}