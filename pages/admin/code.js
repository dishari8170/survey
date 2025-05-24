import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import {Field, Form, Formik} from "formik";
import {Modal} from "react-bootstrap";
import OAdminSidebar from "@/component/OAdminSidebar";
import {FaGraduationCap} from "react-icons/fa";


export default function Code() {





    const [show,setShow]=useState(false);
    const [eir,setEir]=useState(null);
    const rtp=useRef("")

    useEffect(()=>{



        loaddataU()

    },[])

    const  [getudat,setudat]=useState([])


    const  [trin,settrin]=useState([])

    const [getc,setc] = useState(0);





    function loaddataU(s="0") {

        axios.get("/api/code").then(value => {

            setc(value.data.total);

            setudat(value.data.data);

            // const up = document.getElementById("loadingx")
            // up.style.display = "none";


        })

        axios.get("/api/course").then(value => {


            settrin(value.data.data);

            // const up = document.getElementById("loadingx")
            // up.style.display = "none";


        })

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
                        initialValues={eir ? eir : {title: "", count:0,id:"",subtitle:""}}

                        onSubmit={async (values, {resetForm}) => {
                            try {

                                await axios.post("/api/code", values);
                                window.location.reload()
                                resetForm();
                            } catch (error) {
                                console.error("Error saving task", error);
                            }
                        }}
                    >
                        {({errors, touched,values,setFieldValue}) => (
                            <Form>
                                <div className="">
                                    <div>
                                        <label>Title:</label>
                                        <Field className="form-control" name="title"/>
                                    </div>
                                    <Field className="form-control" name="subtitle" type={"hidden"}/>

                                    <label>Training ID:</label>

                                    <Field as="select" name="role" className="form-select col-md-6" id="id">
                                        {trin.map((dd, index) => {

                                            return <option value={dd._id} onClick={r=>{
                                                setFieldValue("subtitle",dd.title);
                                            }}>{dd.title} </option>

                                        })}


                                    </Field>

                                    <div className="my-2">
                                        <label className="mb-2">Total:</label>
                                        <Field className="form-control" name="count" defaultValue={0} type="number" />


                                    </div>


                                    <button type="submit" className="btn btn-dark form-control mt-3">Save
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>

            </Modal>

            <div className=" bg-light text-dark h-100 p-3">

                <div className="bg-dark text-white p-3 mb-3 d-flex align-items-center pe-5 justify-content-between">

                    <h2 className="text-center mb-4 mt-3">
                        <FaGraduationCap className="me-2 "/>
                        Trainings Codes
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


                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{course.title}</h5>
                                    {course.subtitle &&
                                        <h6 className="card-subtitle mb-2 text-muted">{course.subtitle}</h6>}
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Total: {course.count}</li>
                                        <li className="list-group-item">Code: {course.code}</li>

                                    </ul>
                                </div>

                                <div className="card-footer bg-transparent border-top-0 ">

                                    <button className="btn btn-primary btn-sm  mb-2" onClick={i => {

                                        setEir(course)
                                        setShow(true)
                                    }}>
                                        Modify
                                    </button>


                                    <button className="btn me-2 btn-sm float-end mb-2 btn-outline-danger"
                                            onClick={o => {

                                                axios.delete(`/api/code?_id=${course._id}`).then(values => {
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
        </OAdminSidebar>
    );

}


