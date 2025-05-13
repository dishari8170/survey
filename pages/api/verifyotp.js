
import UserDB from "@/models/UserDB"

import dbConnect from "@/lib/dbConnect";
export default async function handler(req, res) {
    await dbConnect();

    // const {method}=req;


    switch (req.method) {
        case "GET":{


            return res.status(200).json("r");
        }


        case "POST":{


            try {



            let dr=null;


            if (req.body.phone.includes('@')) {

                dr =  await  UserDB.findOne({email:req.body.phone,otp:req.body.otp})
            }else {

             dr   = await  UserDB.findOne({phone:req.body.phone,otp:req.body.otp})
            }





            if (dr){

                res.setHeader("Set-Cookie", `_id=${dr._id}; Path=/; Max-Age=${60* 60*60};`);

            }

            return res.status(200).json(dr)

            }
            catch (e) {
                console.log(e)
            }
        }
        case "DELETE":{
            // const r = await posts.deleteOne({_id:req.query.photoid})
            // // const r= await Gallery.deleteMany()
            // return res.status(200).json(r)``


        }
        default:{
            return res.status(200).json("invalid")
        }


    }






}






// photo -->quntity ->unlimited | ek--> ek
//fetch --/->uniq id
