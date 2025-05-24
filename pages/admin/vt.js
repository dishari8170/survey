import {useRouter} from "next/router";
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import OAdminSidebar from "@/component/OAdminSidebar";
import {Modal} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import "animate.css"
import {FaClock, FaGraduationCap, FaPlayCircle, FaStar} from "react-icons/fa";
import Vimeo from "@u-wave/react-vimeo";
import {FaCircleArrowLeft, FaCircleArrowRight} from "react-icons/fa6";
import {dh} from "@/lib/Dh";

export default function Vt() {

    const router = useRouter();
    const { _id} = router.query;

    const  [dat,setData]=useState({})

    const [getc,setc] = useState(0);


    const [isplaying,setisplaying] = useState(false);

    function loaddataU(s="0") {

        if(!_id){
            return;
        }
        axios.get("/api/atask?get="+_id).then(value => {

setData(value.data);

        })

    }

    useEffect(() => {
        if (_id) {

            loaddataU()

        }
    }, [_id]);











    return (<OAdminSidebar>


        <div className="mina w-100 ">

            {dat._id&&<div className="w-100" key={dat._id}>

                {isplaying ? <Vimeo video={dat.video} key={"qwert"} responsive={true}/> :
                    <div className={"position-relative"}><img className={"img-fluid w-100"}
                                                              src={dh.ImUrl + dat.thumb}></img>

                        <FaPlayCircle onClick={p => {
                            setisplaying(true);
                        }}
                                      className={"display-1 fw-bold position-absolute top-50 start-50 translate-middle-x bg-dark p-4 rounded "}/>
                    </div>}


            </div>}

            {/*{dat.video && isplaying && ()}*/}

            <div className="card p-2 m-3">
                <div className="row align-items-center mt-2">

                    <div className="col-2"><FaCircleArrowLeft className={"h2"}/></div>
                    <div className="col-3 d-flex h4 align-items-center"><FaClock className={"me-2"}/> 55:00 minutes
                    </div>

                    <div className="col-3">


                    </div>

                    <div className="col-3 d-flex align-items-center justify-content-end">

                        <div className="btn btn-outline-secondary me-4"><FaStar className={"mb-1 "}/></div>

                        <div className="btn btn-outline-info mb-1"> Mark as Complete</div>
                    </div>
                    <div className="col-1 "><FaCircleArrowRight className={"h2 float-end"}/></div>


                </div>
            </div>
            <div className="mx-3" dangerouslySetInnerHTML={{__html: dat.data}}></div>


        </div>


    </OAdminSidebar>);

}

