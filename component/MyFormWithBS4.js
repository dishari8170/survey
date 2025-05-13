import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string()
        .matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'Invalid phone number')
        .required('Phone number is required'),
    country: Yup.string().required('Country is required'),
    state: Yup.string().required('State is required'),
    pincode: Yup.string()
        .matches(/^[1-9][0-9]{5}$/, 'Invalid pincode')
        .required('Pincode is required'),
});

const MyFormWithBS4 = () => {
    const handleSubmit = (values, { setSubmitting }) => {


        axios.post("/api/updatepro",values).then((response) => {

            setSubmitting(false);

            window.location.href="/dashboard";
        })


    };

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                phone: '',
                country: '',
                state: '',
                pincode: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name:
                        </label>
                        <Field type="text" id="name" name="name" className="form-control" />
                        <ErrorMessage name="name" component="div" className="invalid-feedback d-block" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email Address:
                        </label>
                        <Field type="email" id="email" name="email" className="form-control" />
                        <ErrorMessage name="email" component="div" className="invalid-feedback d-block" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                            Phone Number:
                        </label>
                        <Field type="text" id="phone" name="phone" className="form-control" />
                        <ErrorMessage name="phone" component="div" className="invalid-feedback d-block" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="country" className="form-label">
                            Country:
                        </label>
                        <Field type="text" id="country" name="country" className="form-control" />
                        <ErrorMessage name="country" component="div" className="invalid-feedback d-block" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="state" className="form-label">
                            State:
                        </label>
                        <Field type="text" id="state" name="state" className="form-control" />
                        <ErrorMessage name="state" component="div" className="invalid-feedback d-block" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="pincode" className="form-label">
                            Pincode:
                        </label>
                        <Field type="text" id="pincode" name="pincode" className="form-control" />
                        <ErrorMessage name="pincode" component="div" className="invalid-feedback d-block" />
                    </div>

                    <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default MyFormWithBS4;