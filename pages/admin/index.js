import React, {useEffect, useRef, useState} from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import dynamic from "next/dynamic";

const TaskSchema = Yup.object().shape({
    task: Yup.string().required("Task is required"),
    video_id: Yup.string().required("video_id is required"),
    date: Yup.string().required("Date is required"),
    day: Yup.string().required("Day is required"),
});

const TaskForm = () => {
    const [Editor,seteditor] = useState(null);

    const rtp=useRef("")

    useEffect(()=>{


        seteditor(dynamic(() => import("@/component/Editor/index")))


    },[])

    async function setvalueofdes  (rtzg)  {


        rtp.current=rtzg

    }
    return (
        <Formik
            initialValues={{ task: "", video_id: "",  day: "" }}
            // validationSchema={TaskSchema}
            onSubmit={async (values, { resetForm }) => {
                try {
                    values.data=rtp.current
                    await axios.post("/api/tasks", values);
                    alert("Task saved successfully!");
                    resetForm();
                } catch (error) {
                    console.error("Error saving task", error);
                }
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className="card mina text-white fw-bolder border-black rounded-2 p-3 m-5">
                        <div>
                            <label>Task:</label>
                            <Field className="form-control" name="task"/>
                            {errors.task && touched.task ? <div>{errors.task}</div> : null}
                        </div>

                        <div className="my-2">
                            <label className="mb-2">video_id:</label>
                            <Field className="form-control" name="video_id"/>
                            {errors.video_id && touched.video_id ? <div>{errors.video_id}</div> : null}
                        </div>


                        <div>
                            <label>Day:</label>
                            <Field className="form-control" name="day"/>
                            {errors.day && touched.day ? <div>{errors.day}</div> : null}
                        </div>

                        <div className="mt-2 bg-dark p-3 rounded-2">


                            {Editor ? <Editor form={setvalueofdes}></Editor> : ""

                            }
                        </div>

                        <button type="submit" className="btn btn-dark form-control mt-3">Save Task</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default TaskForm;
