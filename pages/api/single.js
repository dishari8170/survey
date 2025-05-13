// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "@/lib/dbConnect";
import taskDB from "@/models/TaskDB";

export default async function handler(req, res) {

    try {
        await dbConnect();
        const st = await taskDB.findOne({},{task:1,day:1, priority:1,
        });


        res.status(200).json(st);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }












}
