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
           <div className="w-50 m-3 bg-danger rounded-2 mina" style={{height: "300px",}}>

               <div className="achievements-container">
                   <h2>Your Achievements</h2>
                   <div className="trophies">
                       <img src="/icon/Gold Medal.png" className="trophy" alt="Gold Medal"/>
                       <img src="/Medal Purple.png" className="trophy" alt="Purple Medal"/>
                       <img src="/Medal Red.png" className="trophy" alt="Red Medal"/>
                       <img src="/Silver Medal.png" className="trophy" alt="Silver Medal"/>

                   </div>
               </div>

           </div>
           <div className="w-50 m-3 bg-info rounded-2 mina " style={{height: "300px",}}>
               <div className="m-2 table-responsive pb-3" style={{height: "280px",}}>

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

