import OSIdeBar from "@/component/OSIdeBar";
import {dh} from "@/lib/Dh";

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

<div className="mina w-100 p-lg-5">



    <div className="" dangerouslySetInnerHTML={{__html:data.data}}></div>
</div>
    </OSIdeBar>

    </>







}