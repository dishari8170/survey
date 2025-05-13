import dbConnect from "@/lib/dbConnect";

import UserDB from "@/models/UserDB"


export default async function handler(req, res) {


await  dbConnect()

    if (req.method === 'POST' && req.cookies && req.cookies._id) {


       const ty= await UserDB.updateOne({_id:req.cookies._id}, {$set: req.body})

        return res.status(200).json(ty)

    }else {

        res.redirect(302, '/');

    }

}