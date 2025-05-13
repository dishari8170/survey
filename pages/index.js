import AuthVerificationModal from "@/component/AuthVerificationModal";
import {useEffect, useState} from "react";

export default function Home() {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {setShowModal(true)},[])
    return <AuthVerificationModal
        show={showModal}
        onHide={() => {






        }}
    />
}