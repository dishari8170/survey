import OSIdeBar from "@/component/OSIdeBar";
import {dh} from "@/lib/Dh";
import Vimeo from "@u-wave/react-vimeo";
import {useEffect, useState} from "react";
import {FaAlignRight, FaArrowLeft, FaClock, FaHeart, FaStar} from "react-icons/fa";
import {FaCircleArrowLeft, FaCircleArrowRight} from "react-icons/fa6";

export async function getServerSideProps(ctx) {

    if (ctx.query.id) {

        const res = await fetch(dh.api+"/single?id="+ctx.query.id);
        const data = await res.json()
        return { props: { data } }

    }else {
        return { props: { data:"" } }
    }

}
export default ({data}) => {
    const [videox, setVideo] = useState(false);

    useEffect(()=>{

        setVideo(true)
    },[])

    return <>



        <OSIdeBar>




            <div className="mina w-100 ">

                {videox&&(<Vimeo responsive={true} video="347119375"/>)}

                <div className="card p-2 m-3">
                <div className="row align-items-center mt-2">

                    <div className="col-2"><FaCircleArrowLeft className={"h2"}/></div>
                    <div className="col-3 d-flex h4 align-items-center"><FaClock className={"me-2"}/> 55:00 minutes</div>

                    <div className="col-3">


                    </div>

                    <div className="col-3 d-flex align-items-center justify-content-end">

                        <div className="btn btn-outline-secondary me-4"><FaStar className={"mb-1 "}/></div>

                        <div className="btn btn-outline-info mb-1"> Mark as Complete</div>
                    </div>
                    <div className="col-1 "><FaCircleArrowRight className={"h2 float-end"}/></div>


                </div>
            </div>
                <div className="mx-3" dangerouslySetInnerHTML={{__html:data.data}}></div>



            </div>


        </OSIdeBar>

    </>







}