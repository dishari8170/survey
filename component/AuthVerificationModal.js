import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, InputGroup, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import Swal from 'sweetalert2';
import 'animate.css';
import {
    FaArrowCircleLeft,
    FaCheckCircle,
    FaEnvelope,
    FaLock,
    FaPhone,
    FaRecycle,
    FaUserAlt,
    FaUserPlus
} from "react-icons/fa";
import {ErrorMessage, Field, Formik} from "formik";
import * as Yup from 'yup';
import MyFormWithBS4 from "@/component/MyFormWithBS4";


const AuthVerificationModal = ({ show, onHide }) => {
    const [contactMethod, setContactMethod] = useState('email'); // 'phone' or 'email'
    const [contactValue, setContactValue] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpField, setShowOtpField] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [countdown, setCountdown] = useState(0);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    const handleSendOtp = async () => {
        if (!validateContact()) return;

        setIsLoading(true);
        try {
            const response = await fetch('/api/sendotp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone: contactValue }),
            });

            const data = await response.json();
            if (response.ok) {
                setShowOtpField(true);
                setCountdown(30);
                await showAlert('OTP Sent!', `We've sent a code to your ${contactMethod}`, 'success');
            } else {
                await showAlert('Failed', data.message || `Failed to send OTP`, 'error');
            }
        } catch (error) {
            showAlert('Network Error', 'Please check your connection', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (otp.length !== 5) {
            showAlert('Invalid OTP', 'Please enter the 6-digit code', 'error');
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch('/api/verifyotp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify( {phone:contactValue,otp:otp}),
            });

            const data = await response.json();

            if (data._id) {
                showAlert('Welcome!', 'You have successfully logged in', 'success')
                    .then(() => {


                            localStorage.setItem("user", JSON.stringify(data));


                            if (data.name===""){

                                setShowbs(true)

                            }else {
                                window.location.href="/dashboard"
                            }

                            //

                        }


                    );
            } else {
                await showAlert('Verification Failed', 'The code you entered is incorrect', 'error');
            }
        } catch (error) {
            await showAlert('Network Error', 'Please try again later', 'error');




        } finally {
            setIsLoading(false);
        }
    };

    const validateContact = () => {
        if (!contactValue) {
            showAlert(`Invalid ${contactMethod}`, `Please enter your ${contactMethod}`, 'error');
            return false;
        }
        if (contactMethod === 'phone' && !/^\d{10,15}$/.test(contactValue)) {
            showAlert('Invalid Phone', 'Please enter a valid phone number', 'error');
            return false;
        }
        if (contactMethod === 'email' && !/^\S+@\S+\.\S+$/.test(contactValue)) {
            showAlert('Invalid Email', 'Please enter a valid email address', 'error');
            return false;
        }
        return true;
    };

    const showAlert = (title, text, icon) => {
        return Swal.fire({
            title,
            text,
            icon,
            background: '#1a1a2e',
            color: '#e6e6e6',
            confirmButtonColor: '#4e54c8'
        });
    };

    const handleContactChange = (e) => {
        const value = contactMethod === 'phone'
            ? e.target.value.replace(/\D/g, '')
            : e.target.value;
        setContactValue(value);
    };

    const handleOtpChange = (index, value) => {
        const newOtp = otp.split('');
        newOtp[index] = value.replace(/\D/g, '');
        setOtp(newOtp.join('').slice(0, 5));
        if (value && index < 5) {
            document.getElementById(`otp-${index + 1}`)?.focus();
        }
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phoneNumber: Yup.string()
            .matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'Invalid phone number')
            .required('Phone number is required'),
        country: Yup.string().required('Country is required'),
        state: Yup.string().required('State is required'),
        pincode: Yup.string()
            .matches(/^[1-9][0-9]{5}$/, 'Invalid pincode')
            .required('Pincode is required'),
    });
    useEffect(()=>{const styleElement = document.createElement('style');
        styleElement.innerHTML = styles;
        document.head.appendChild(styleElement);


        },[])



    const [showbs,setShowbs] = useState(false);


    return (<>

            <Modal
                show={showbs}
                onHide={(u=>{

                })}
                centered
                backdrop="static"
                className="auth-modal "
                contentClassName="bg-dark border-0"
                style={{ background: 'linear-gradient(145deg, #16213e, #0f3460)' }}
            >
                <Modal.Header
                    closeButton
                    closeVariant="white"
                    className="border-0 text-white"
                    style={{
                        background: 'linear-gradient(90deg, #4e54c8, #8f94fb)',
                        borderTopLeftRadius: 'calc(0.3rem - 1px)',
                        borderTopRightRadius: 'calc(0.3rem - 1px)'
                    }}
                >
                    <Modal.Title className="fw-bold">

                        Complete Your Registration

                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className="py-4">
                    <div className="text-center mb-4">
                        <div className="position-relative d-inline-block">
                            <div className="verification-icon h1">

                               <FaUserAlt className={"text-white"}/>

                            </div>
                        </div>
                        <h4 className="fw-bold mt-3 text-white">
                Put Your Basic details
                        </h4>


                    </div>


                        <div className="animate__animated animate__fadeIn text-white">





                          <MyFormWithBS4/>








                        </div>



                </Modal.Body>

                <Modal.Footer className="border-0 d-flex justify-content-center">
                    <small className="text-white">
                        <FaLock className={"mx-2 mb-1"}/>
                        Your information is secure and will not be shared
                    </small>
                </Modal.Footer>
            </Modal>



        <Modal
            show={show}
            onHide={onHide}
            centered
            backdrop="static"
            className="auth-modal "
            contentClassName="bg-dark border-0"
            style={{ background: 'linear-gradient(145deg, #16213e, #0f3460)' }}
        >
            <Modal.Header
                closeButton
                closeVariant="white"
                className="border-0 text-white"
                style={{
                    background: 'linear-gradient(90deg, #4e54c8, #8f94fb)',
                    borderTopLeftRadius: 'calc(0.3rem - 1px)',
                    borderTopRightRadius: 'calc(0.3rem - 1px)'
                }}
            >
                <Modal.Title className="fw-bold">
                    <i className={`bi bi-${contactMethod === 'phone' ? 'phone' : 'envelope'}-fill me-2`} />
                    {contactMethod === 'phone' ? 'Phone' : 'Email'} Verification
                </Modal.Title>
            </Modal.Header>

            <Modal.Body className="py-4">
                <div className="text-center mb-4">
                    <div className="position-relative d-inline-block">
                        <div className="verification-icon h1">

                            {contactMethod === 'phone'?<FaPhone/>:<FaEnvelope/>}

                        </div>
                    </div>
                    <h4 className="fw-bold mt-3 text-white">
                        {showOtpField ? 'Enter Verification Code' : `Verify Your ${contactMethod === 'phone' ? 'Phone' : 'Email'}`}
                    </h4>
                    <p className="text-white">
                        {showOtpField
                            ? `We sent a 6-digit code to your ${contactMethod}`
                            : `We'll send you a one-time verification code`}
                    </p>
                </div>

                {!showOtpField ? (
                    <div className="animate__animated animate__fadeIn">
                        <ToggleButtonGroup
                            type="radio"
                            name="contact-method"
                            value={contactMethod}
                            onChange={(val) => setContactMethod(val)}
                            className="mb-3 w-100"
                        >
                            <ToggleButton
                                id="phone-toggle"
                                value="phone"
                                variant={contactMethod === 'phone' ? 'primary' : 'outline-primary'}
                                className="d-flex align-items-center justify-content-center"
                            >
                                <FaPhone/> Phone
                            </ToggleButton>
                            <ToggleButton
                                id="email-toggle"
                                value="email"
                                variant={contactMethod === 'email' ? 'primary' : 'outline-primary'}
                                className="d-flex align-items-center text-white justify-content-center"
                            >
                                <FaEnvelope/> Email
                            </ToggleButton>
                        </ToggleButtonGroup>

                        <Form.Group className="mb-4 text-white">
                            <Form.Label className="fw-bold text-white">
                                {contactMethod === 'phone' ? 'Phone Number' : 'Email Address'}
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Text className="bg-dark border-secondary text-white">
                                    {contactMethod === 'phone'?<div className={"d-flex align-items-center justify-content-around" }>+91</div>:<FaEnvelope/>}

                                </InputGroup.Text>
                                <Form.Control
                                    type={contactMethod === 'phone' ? 'tel' : 'email'}
                                    className="bg-dark text-white border-secondary"
                                    value={contactValue}
                                    onChange={handleContactChange}
                                    placeholder={contactMethod === 'phone' ? 'e.g. 9876543210' : 'your@email.com'}
                                />
                            </InputGroup>
                        </Form.Group>

                        <Button
                            variant="primary"
                            className="w-100 py-2 fw-bold gradient-btn"
                            onClick={handleSendOtp}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" />
                                    Sending OTP...
                                </>
                            ) : (
                                <>
                                    <FaCheckCircle className={"mx-2"}/>
                                    Send Verification Code
                                </>
                            )}
                        </Button>
                    </div>
                ) : (
                    <div className="animate__animated animate__fadeIn text-white">
                        <Form.Group className="mb-4">
                            <Form.Label className="fw-bold ">Verification Code</Form.Label>
                            <div className="d-flex justify-content-center text-white">
                                {[0, 1, 2, 3, 4].map((index) => (
                                    <Form.Control
                                        key={index}
                                        type="text"
                                        className="bg-dark text-white border-secondary text-center mx-1 otp-input"
                                        value={otp[index] || ''}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                        maxLength={1}
                                        id={`otp-${index}`}
                                    />
                                ))}
                            </div>
                        </Form.Group>

                        <div className="d-flex justify-content-between align-items-center mb-4 text-white">
                            <small className=" text-white">
                                {countdown > 0 ? (
                                    `Resend code in ${countdown}s`
                                ) : (
                                    <Button variant="link" className="p-0 text-decoration-none" onClick={handleSendOtp}>
                                        <FaRecycle/>                                        Resend Code
                                    </Button>
                                )}
                            </small>
                            <small>
                                <Button variant="link" className="p-0 text-decoration-none text-white" onClick={() => setShowOtpField(false)}>
                                    <i className="bi bi-pencil-square me-1" />
                                    Change {contactMethod === 'phone' ? 'Number' : 'Email'}
                                </Button>
                            </small>
                        </div>

                        <Button
                            variant="primary"
                            className="w-100 py-2 fw-bold gradient-btn"
                            onClick={handleVerifyOtp}
                            disabled={isLoading || otp.length !== 5}
                        >
                            {isLoading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" />
                                    Verifying...
                                </>
                            ) : (
                                <>
                                    <i className="bi bi-shield-check me-2" />
                                    Verify & Continue
                                </>
                            )}
                        </Button>
                    </div>
                )}
            </Modal.Body>

            <Modal.Footer className="border-0 d-flex justify-content-center">
                <small className="text-white">
                    <FaLock className={"mx-2 mb-1"}/>
                    Your information is secure and will not be shared
                </small>
            </Modal.Footer>
        </Modal>

        </>
    );
};

// Add this to your global CSS
const styles = `
  .auth-modal .modal-content {
    background: linear-gradient(145deg, #16213e, #0f3460);
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  }
  
  .verification-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(145deg, #4e54c8, #8f94fb);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    box-shadow: 0 4px 15px rgba(78, 84, 200, 0.4);
  }
  
  .verification-icon i {
    font-size: 2rem;
  }
  
  .gradient-btn {
    background: linear-gradient(90deg, #4e54c8, #8f94fb);
    border: none;
    transition: all 0.3s;
  }
  
  .gradient-btn:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
  
  .otp-input {
    width: 45px;
    height: 60px;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 8px !important;
  }
  
  .btn-toggle {
    transition: all 0.3s;
  }
  
  .btn-toggle:not(.active) {
    background: transparent !important;
    color: #8f94fb;
  }
`;

// Add styles to document head


export default AuthVerificationModal;