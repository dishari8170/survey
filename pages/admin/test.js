import Swal from "sweetalert2";
import {useEffect, useRef, useState} from "react";
import {Field, Form, Formik} from "formik";
import dynamic from "next/dynamic";
import axios from "axios";


export default (pro)=>{
    const [Editor,seteditor] = useState(null);


    const [ismcq,setmcq]= useState(true);
    const [opt,setopt]=useState(0);


    const rtp=useRef("")

    useEffect(()=>{


        seteditor(dynamic(() => import("@/component/Editor/index")))


    },[])



    async function setvalueofdes  (rtzg)  {


        rtp.current=rtzg

    }
    return <>


        <div className="p-4 border mt-5  text-black ">


            <div className=" mt-2 card">

                {Editor ? <Editor form={setvalueofdes}></Editor> : ""

                }
            </div>
        </div>


    </>
}