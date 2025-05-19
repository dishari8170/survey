import OSIdeBar from "@/component/OSIdeBar";
import {dh} from "@/lib/Dh";
import Vimeo from "@u-wave/react-vimeo";
import UploadX from "@/component/UploadX";

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


    return <>



        <OSIdeBar>


            <UploadX className={"col-md-6"} height={280} cb={p=>{




            }}/>
            <div className="mina w-100 p-lg-5">

                <Vimeo responsive={true} className= {"w-100"} video="347119375"/>

                <div className="" dangerouslySetInnerHTML={{__html:data.data}}></div>
            </div>
        </OSIdeBar>

    </>







}