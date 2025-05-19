import AuthVerificationModal from "@/component/AuthVerificationModal";
import {useEffect, useState} from "react";


export async function getServerSideProps(context) {
    const cookieId = context.req.cookies._id; // Read the cookie

    // if (!cookieId) {
    //     return {
    //         redirect: {
    //             destination: '/dashboard',
    //             permanent: false,
    //         },
    //     };
    // }

    return {
        props: {xyz: cookieId??false},
    };
}


export default function Home({xyz}) {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
if  (xyz) {
    window.location.href = "/dashboard"
}
else
{
    setShowModal(true)
}
        // setShowModal(true)
    }, [])
    return <AuthVerificationModal
        show={showModal}
        onHide={() => {


        }}
    />
}