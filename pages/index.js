import OSIdeBar from "@/component/OSIdeBar";
import PendingTask from "@/component/PendingTask";


export default function abc (){


   return <OSIdeBar>

       <div className="d-flex ">

           <div className="rounded-2 d-flex  m-3 w-75  text-center text-white"
                style={{height: "300px", backgroundColor: "darkblue",}}>
               <PendingTask dp={""}/>
               <div className="bg-white shadow-lg rounded-2 w-100 m-3"></div>

           </div>
           <div className=" w-25  d-flex rounded-2 m-3 text-center text-white"
                style={{height: "300px", backgroundColor: "darkblue",}}><PendingTask dp={""}/>

               <div className="lina shadow-lg rounded-2 w-100 m-3"></div>
           </div>
       </div>


       <div className="container">

           <div className="d-flex justify-content-around">
               {Array.from({ length: 7 }, (_, i) => (

                   <div className="rounded dayes text-center " >
Day <br/> {i}
                   </div>
               ))}

           </div>

       </div>


       <div className="d-flex">
           <div className="w-50 m-3 bg-danger rounded-2 mina" style={{height: "300px",}}></div>
           <div className="w-50 m-3 bg-info rounded-2 mina " style={{height: "300px",}}></div>

       </div>

   </OSIdeBar>


}

