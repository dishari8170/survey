import OSIdeBar from "@/component/OSIdeBar";
import PendingTask from "@/component/PendingTask";


export default function abc (){


   return <OSIdeBar>

       <div className="d-flex ">

           <div className="rounded-2 d-flex  m-3 w-75  text-center text-white"
                style={{height: "280px", backgroundColor: "darkblue",}}>
               <PendingTask dp={""}/>
               <div className="bg-white shadow-lg rounded-2 w-100 m-3"></div>

           </div>
           <div className=" w-25  d-flex rounded-2 m-3 text-center text-white"
                style={{height: "280px", backgroundColor: "darkblue",}}><PendingTask dp={""}/>

               <div className="lina shadow-lg rounded-2 w-100 m-3"></div>
           </div>
       </div>


       <div className="card mx-3 p-3 " style={{ backgroundColor:"darkblue"}}>

           <div className="d-flex justify-content-around">
               {Array.from({ length: 7 }, (_, i) => (

                   <div className="rounded dayes text-center " style={{backgroundImage:i>3?"url(/inc.png)":i<3?"url(/don.png)":"url(/mis.png)"}} key={i} >
Day <br/> {i}
                   </div>
               ))}

           </div>

       </div>


       <div className="d-flex">
           <div className="w-50 m-3  rounded-2" style={{height: "300px", backgroundColor:"darkblue"}}>

               <div className="shadow m-3 mina rounded-3">
                   <h5 className={"p-3"}>Achievements</h5>
                   <div className="d-flex justify-content-around" >
                       <div className="" style={{width: "60px"}}>

                           <img src="/icon/Gold Medal.png" className=" img-fluid" alt="Gold Medal"/>

                       </div>
                            <div className="" style={{width: "60px"}}>

                           <img src="/icon/Medal%20Purple.png" className=" img-fluid" alt="Gold Medal"/>

                       </div>
                            <div className="" style={{width: "60px"}}>

                           <img src="/icon/Silver%20Medal.png" className=" img-fluid" alt="Gold Medal"/>

                       </div>
                            <div className="" style={{width: "60px"}}>

                           <img src="/icon/Medal%20Red.png" className=" img-fluid" alt="Gold Medal"/>

                       </div>


                   </div>
                   <div className="d-flex justify-content-around">
                       <div className="" style={{width: "60px"}}>

                           <img src="/icon/Silver%20Medal.png" className=" img-fluid" alt="Gold Medal"/>

                       </div>
                       <div className="" style={{width: "60px"}}>

                           <img src="/icon/Medal%20Purple.png" className=" img-fluid" alt="Gold Medal"/>

                       </div>

                       <div className="" style={{width: "60px"}}>

                           <img src="/icon/Gold Medal.png" className=" img-fluid" alt="Gold Medal"/>

                       </div>

                   </div>
               </div>

           </div>
           <div className="w-50 m-3 bg-info rounded-2 mina px-3" style={{height: "300px",}}>
               <div className="m-2 table-responsive" style={{height: "280px",}}>
                   <div className="p-2 h5 pb-0">Leaderboard</div>

                   <table className="table table-primary table-striped text-center p-5">
                       <thead>
                       <tr>
                           <th>Rank</th>
                           <th>Name</th>
                           <th>Points</th>
                       </tr>
                       </thead>
                       <tbody>
                       <tr>
                           <td>🏆 1</td>
                           <td>Alice</td>
                           <td>1000</td>
                       </tr>
                       <tr>
                           <td>🥈 2</td>
                           <td>Bob</td>
                           <td>950</td>
                       </tr>
                       <tr>
                           <td>🥉 3</td>
                           <td>Charlie</td>
                           <td>900</td>
                       </tr>
                       <tr>
                           <td>4</td>
                           <td>David</td>
                           <td>850</td>
                       </tr>
                       <tr>
                           <td>5</td>
                           <td>Emma</td>
                           <td>800</td>
                       </tr>
                         <tr>
                           <td>5</td>
                           <td>Emma</td>
                           <td>800</td>
                       </tr>
                        <tr>
                           <td>5</td>
                           <td>Emma</td>
                           <td>800</td>
                       </tr>
                        <tr>
                           <td>5</td>
                           <td>Emma</td>
                           <td>800</td>
                       </tr>
                        <tr>
                           <td>5</td>
                           <td>Emma</td>
                           <td>800</td>
                       </tr>
                        <tr>
                           <td>5</td>
                           <td>Emma</td>
                           <td>800</td>
                       </tr>
                        <tr>
                           <td>5</td>
                           <td>Emma</td>
                           <td>800</td>
                       </tr>

                       </tbody>
                   </table>
               </div>


           </div>

       </div>

   </OSIdeBar>


}

