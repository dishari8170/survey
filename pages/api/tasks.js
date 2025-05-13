// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "@/lib/dbConnect";
import taskDB from "@/models/TaskDB";

export default async function handler(req, res) {

    await dbConnect()


    const st=await taskDB.create(req.body);

    // const st=await taskDB.findOne({_id:"6821b9071991ff46e191fb50"})

    res.status(200).json(st);










}
