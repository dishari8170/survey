import UserDB from "@/models/UserDB"

import dbConnect from "@/lib/dbConnect";


const axios = require('axios');


import nodemailer from "nodemailer";


async function emai(email, sub, textx) {
    let transporter = nodemailer.createTransport(({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'rajuhaldarx@gmail.com',
            pass: 'wamddzpphtntxtoh'
        }
    }));


    transporter
        .sendMail({
            from: "rajuhaldarx@gmail.com",
            to: email,
            subject: sub,
            html: textx,

        })
        .catch((error) => {
            console.log(error);
        });
}


function formatPhoneNumber(phoneNumber) {

    phoneNumber = phoneNumber.replace(/\s+/g, '');
    phoneNumber = phoneNumber.replace('+91', '');

    return phoneNumber;
}


async function sms_otp(number, otp) {
    const username = 'skyskraper';
    const password = 'Solutions1';
    const sender = 'RSCMGX';
    const sendto = number;
    const message = `Welcome to ODGTAXPRO. Your One Time Password (OTP) verification code is ${otp}. Please enter OTP to proceed.`;
    const pEID = '1201172681763215829';
    const templateid = '1207172726949939165';


    // const url = `http://45.249.108.20/api.php?username=${username}&password=${password}&sender=${sender}&sendto=${sendto}&message=${encodeURIComponent(message)}&PEID=${pEID}&templateid=${templateid}`;
    //
    // await axios.get(url)
    //     .then(response => {
    //         console.log('Response:', response.data);
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
}

function generateRandomNumbers(count) {

    const randomNumber = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;// Math.floor(Math.random() * 100000); // Generates a random number between 0 and 999999


    return randomNumber;
}

export default async function handler(req, res) {
    await dbConnect();

    // const {method}=req;


    switch (req.method) {
        case "GET": {
            // const r = await posts.find({},{dp:1,caption:1})
            // // const r= await Gallery.deleteMany()
            // return res.status(200).json(r)
            //
            //
            //
            //
            // const r = await posts.aggregate([
            //
            //     // {
            //     //     $lookup:{
            //     //         from:"users",
            //     //         localField:"userid",
            //     //         foreignField:"_id",
            //     //         as:"user_data"
            //     //
            //     //     }
            //     //
            //     // },
            //
            //     {
            //         $lookup: {
            //             from: 'users',
            //             localField: 'userid',
            //             foreignField: '_id',
            //             as: 'user'
            //         }
            //     },
            //     {
            //         $unwind: '$user'
            //     },
            //
            //
            //
            // ])
            //
            //


            return res.status(200).json("r");
        }


        case "POST": {


            let o = "12345";
            generateRandomNumbers(6);


            if (req.body.phone.includes('@')) {

              await  emai(req.body.phone, "OTP For ODGTAXPRO  -" + o, "Thank You. <br/> Hare is Your OTP -" + o);


            } else {


                await sms_otp(formatPhoneNumber(req.body.phone), o);


            }


            // await sms_otp(req.body.phone, o);

if(req.body.phone.includes('@')) {

    let dr = await UserDB.updateOne({"email": req.body.phone}, {
        $set: {
            email: req.body.phone,
            otp: o
        }
    }, {upsert: true})


    return res.status(200).json(dr)

}else {


    let dr = await UserDB.updateOne({"phone": formatPhoneNumber(req.body.phone)}, {
        $set: {
            phone: formatPhoneNumber(req.body.phone),
            otp: o
        }
    }, {upsert: true})


    return res.status(200).json(dr)

}




        }
        case "DELETE": {


        }
        default: {
            return res.status(200).json("invalid")
        }


    }


}


// photo -->quntity ->unlimited | ek--> ek
//fetch --/->uniq id
