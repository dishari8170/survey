import {useRouter} from "next/router";
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import OAdminSidebar from "@/component/OAdminSidebar";
import {Modal} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import {FaGraduationCap} from "react-icons/fa";

export default function Sub() {

    const router = useRouter();
    const { _id,title } = router.query;

    const  [getudat,setudat]=useState([])

    const [getc,setc] = useState(0);

    function loaddataU(s="0") {

        if(!_id){
            return;
        }
        axios.get("/api/sub?limit=10&pro=title,intro&skip="+s+"&search="+_id+"&on=category").then(value => {

            setc(value.data.total);

            setudat(value.data.data);

            // const up = document.getElementById("loadingx")
            // up.style.display = "none";


        })

    }

    useEffect(() => {
        if (_id) {

            loaddataU()

        }
    }, [_id]);








    const [Editor,seteditor] = useState(null);


    const [show,setShow]=useState(false);
    const [eir,setEir]=useState(null);
    const rtp=useRef("")

    useEffect(()=>{


        seteditor(dynamic(() => import("@/component/Editor/index")))

        loaddataU()

    },[])





    async function setvalueofdes  (rtzg)  {


        rtp.current=rtzg


    }

    return (<OAdminSidebar>


        <Modal show={show} onHide={() => {
            setShow(false)
        }} fullscreen={true}>
            <Modal.Header closeButton>
                <Modal.Title>Add/Edit Training </Modal.Title>
            </Modal.Header>
            <Modal.Body>


                <Formik
                    initialValues={eir ? eir : {title: "", intro: "", data: rtp.current}}

                    onSubmit={async (values, {resetForm}) => {
                        try {
                            values.data = rtp.current;
                            values.category=_id;

                            await axios.post("/api/sub", values);
                            window.location.reload()
                            resetForm();
                        } catch (error) {
                            console.error("Error saving task", error);
                        }
                    }}
                >
                    {({errors, touched,values}) => (
                        <Form>
                            <div className="">
                                <div>
                                    <label>Title:</label>
                                    <Field className="form-control" name="title"/>
                                </div>

                                <div className="my-2">
                                    <label className="mb-2">Intro:</label>
                                    <Field className="form-control" as={"textarea"} name="intro"/>


                                </div>

                                <div className="mt-2 bg-dark p-3 rounded-2">

                                    {Editor ? <Editor form={setvalueofdes} value={values.data??""}></Editor> : ""}
                                </div>

                                <button type="submit" className="btn btn-dark form-control mt-3">Save Training
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>

        </Modal>

        <div className=" bg-light text-dark h-100 p-3">

            <div className="bg-dark text-white p-3 mb-3 d-flex align-items-center pe-5 justify-content-between">

                <h2 className="text-center mb-4 mt-3 d-flex">
                    <FaGraduationCap className="me-2 "/>
                    {title}
                </h2>

                <div className="">
                    <div className="btn btn-primary" onClick={o => {
                        setEir({})
                        setShow(true)
                    }}>Add
                    </div>
                </div></div>
            <div className="row   justify-content-around">
                {getudat.map((course, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mb-3">

                        <div

                            className="card h-100 shadow-sm" >
                            <div className="card-body">
                                <h3 className="card-title h5"><FaGraduationCap className={"h1 mx-2"}/>{course.title}</h3>
                                <p className="card-text text-muted">{course.intro&&course.intro.substring(0, 400)}</p>
                            </div>
                            <div className="card-footer bg-transparent border-top-0 ">

                                <button className="btn btn-primary btn-sm  mb-2" onClick={i => {

                                    setEir(course)
                                    setShow(true)
                                }}>
                                    Modify
                                </button>

                                <button className="btn btn-outline-warning btn-sm  mb-2 ms-3 " onClick={d => {

                                    window.location.href = `/admin/task?_id=${course._id}&title=${encodeURIComponent( title+" -> "+course.title)}`
                                }}>
                                    Enter
                                </button>

                                <button className="btn me-2 btn-sm float-end mb-2 btn-outline-danger" onClick={o => {

                                    axios.delete(`/api/sub?_id=${course._id}`).then(values => {
                                        window.location.reload()
                                    })
                                }}>
                                    Delete
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>


        </div>
    </OAdminSidebar>);

}

