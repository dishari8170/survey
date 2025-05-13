
import dbConnect from "@/lib/dbConnect";



import revxz from "@/models/UserDB";


export default async function handler(req, res) {


    await dbConnect()

    if (req.method === "DELETE") {

        await revxz.deleteOne({_id: req.query._id});
        res.status(200).send("done");
    }
    const dox = {};
    const queryOptions = {};
    if (req.query.sort) {
        queryOptions.sort = {[req.query.sort]: parseInt(req.query.mode)};
    }
    if (req.query.limit) {
        queryOptions.skip = parseInt(req.query.skip) || 0;
        queryOptions.limit = parseInt(req.query.limit);
    }
    let yop = {}
    yop[req.query.search] = req.query.on
    const searchQuery = {};
    if (req.query.search) {

        searchQuery[req.query.on] = {$regex: new RegExp(req.query.search, 'i')};
    }
    let pro = {};
    if (req.query.pro) {

        req.query.pro.split(",").map((op, u) => {
            pro[op] = 1;
        })

    }

    if (req.query._id) {



        const  yp=  await revxz.findById(req.query._id )


        return   res.status(200).json(yp);
    }


    dox.data = await revxz.find(searchQuery, pro, queryOptions);
    dox.total = await revxz.countDocuments(searchQuery);
    res.status(200).json(dox);


}