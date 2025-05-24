import OSIdeBar from "@/component/OSIdeBar";
import PendingTask from "@/component/PendingTask";
import React, {useEffect} from "react";
import {FaPlay, FaInfoCircle, FaPlusCircle, FaMedal, FaRunning, FaTrophy} from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import axios from "axios";




export async function getServerSideProps(ctx) {

    // const gp= ctx.req.cookies["_id"];
    //
    // let userx= [];
    //
    // if (gp) {
    //
    //
    //
    //
    // }else {
    //
    //
    // }
    axios.get("/api/dashboard").then((res) => {


    })


    return { props: {logined:false } }


}


export default function Dashboard(logined){





   return <OSIdeBar>

       <div className="d-flex ">

           <div className="rounded-2 d-flex  m-3 w-75  text-center text-white"
                style={{height: "250px", background: "linear-gradient(135deg, #1a2980, #26d0ce)",}}>

               <div className="bg-white shadow-lg rounded-2 w-100 m-3 p-3" >
                   <h4 className="text-dark mb-3">Training Progress</h4>
                   <div className="progress" style={{height: "30px"}}>
                       <div
                           className="progress-bar progress-bar-striped progress-bar-animated"
                           role="progressbar"
                           style={{width: "65%", backgroundColor: "#1a2980"}}
                           aria-valuenow="65"
                           aria-valuemin="0"
                           aria-valuemax="100"
                       >
                           65% Complete
                       </div>
                   </div>
                   <div className="d-flex justify-content-around mt-4">
                       <div className="text-center">
                           <FaMedal className="text-warning" size={30}/>
                           <p className="text-dark mt-2">5 Achievements</p>
                       </div>
                       <div className="text-center">
                           <FaRunning className="text-primary" size={30}/>
                           <p className="text-dark mt-2">12 Sessions</p>
                       </div>
                       <div className="text-center">
                           <FaTrophy className="text-success" size={30}/>
                           <p className="text-dark mt-2">Top 20%</p>
                       </div>
                   </div>
               </div>


           </div>


           <div className="w-25 d-flex rounded-3 m-3 text-center text-white"
                style={{height: "250px", background: "linear-gradient(135deg, #11998e, #38ef7d)"}}>
               <div className="bg-white shadow-lg rounded-2 w-100 m-3 p-3">
                   <h5 className="text-dark">Quick Actions</h5>
                   <button className="btn btn-primary w-100 mb-2">New Training</button>
                   <button className="btn btn-outline-primary w-100 mb-2">Resume Training</button>
                   <button className="btn btn-outline-success w-100">Share Progress</button>
               </div>
           </div>
       </div>


       <div className="card mx-3 p-3 " style={{backgroundColor: "darkblue"}}>

           <div className="d-flex justify-content-around">
               {Array.from({length: 7}, (_, i) => (

                   <div className="rounded dayes text-center "
                        style={{backgroundImage: i > 3 ? "url(/inc.png)" : i < 3 ? "url(/don.png)" : "url(/mis.png)"}}
                        key={i}>
                       Day <br/> {i+1}
                   </div>
               ))}

           </div>

       </div>


       <div className="d-flex">
           <div className="w-50 m-3  rounded-2" style={{height: "300px", backgroundColor: "darkblue"}}>

               <div className="shadow m-3 mina rounded-3">
                   <h5 className={"p-3"}>Achievements</h5>
                   <div className="d-flex justify-content-around">
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
           <div className="w-50 mt-3  rounded-2 mina px-3" style={{height: "300px",}}>
               <div className="m-2 mb-0 table-responsive " style={{height: "270px",}}>
                   <div className=" h5 pb-0 pt-0">Leaderboard</div>

                   <table className="table  bg-white table-striped text-center  rounded ">
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

       <div className="d-flex pb-5">
           <div className="w-100 mx-3 p-4 rounded-3 bg-white shadow-sm" style={{minHeight: "300px"}}>
               <div className="d-flex justify-content-between align-items-center mb-4">
                   <h3 className="fw-bold text-dark m-0">
                       <BsGraphUp className="me-2" style={{color: "#0d6efd"}}/>
                       Your Training Programs
                       <span className="text-muted fs-6 ms-2">({[..."abcd"].length} active)</span>
                   </h3>
                   <button className="btn btn-sm btn-outline-primary">
                       <FaPlusCircle className="me-1"/>
                       New Program
                   </button>
               </div>

               <div className="fw-medium">
                   {[..."abcd"].map((item, index) => (
                       <div
                           key={index}
                           className="p-3 d-flex justify-content-between align-items-center shadow-sm rounded-3 mb-3 row mx-0 hover-shadow"
                           style={{
                               backgroundColor: "#f8f9fa",
                               borderLeft: "4px solid #0d6efd",
                               transition: "all 0.3s ease"
                           }}
                       >
                           <div className="col-md-5">
                               <h5 className="fw-bold text-primary mb-1 d-flex align-items-center">
                                   <div className="me-2" style={{
                                       width: "8px",
                                       height: "8px",
                                       borderRadius: "50%",
                                       backgroundColor: "#0d6efd"
                                   }}></div>
                                   BISA Beauty Training License
                               </h5>
                               <p className="text-muted small mb-0">Welcome to Banx Management License Training</p>
                           </div>

                           <div className="col-md-4">
                               <div className="d-flex align-items-center mb-1">
                                   <div className="progress rounded-pill flex-grow-1" style={{height: "8px"}}>
                                       <div
                                           className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                                           role="progressbar"
                                           style={{width: `${(index + 1) * 25}%`}}
                                       ></div>
                                   </div>
                                   <span className="ms-2 small fw-bold" style={{minWidth: "40px"}}>
                            {Math.min((index + 1) * 25, 100)}%
                        </span>
                               </div>
                               <small className="text-muted">Last active: {index + 2} days ago</small>
                           </div>

                           <div className="col-md-3 d-flex justify-content-end">
                               <button className="btn btn-outline-primary btn-sm me-2 d-flex align-items-center">
                                   <FaInfoCircle className="me-1"/>
                                   Details
                               </button>
                               <button className="btn btn-primary btn-sm d-flex align-items-center">
                                   <FaPlay className="me-1" size={10}/>
                                   Continue
                               </button>
                           </div>
                       </div>
                   ))}
               </div>
           </div>
       </div>


   </OSIdeBar>


}

