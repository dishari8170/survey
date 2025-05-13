import React, {useEffect, useRef, useState} from "react";




import axios from "axios";
import {FaEnvelope, FaEye, FaKey, FaTrash} from "react-icons/fa";



import {useRouter} from "next/router";
import OSIdeBar from "@/component/OSIdeBar";

export default ()=>{
    const  [getudat,setudat]=useState([])
    const  [isOpen,setIsOpen]=useState(false)

    const [getc,setc] = useState(0);

    const [dp,setdp] = useState("");
    const [onx,setonx] = useState("name");

    const rroute=useRouter();



    function loaddataU(s="0") {

        axios.get("/api/usrz?limit=10&pro=name,_id,gender,email,phone,pincode,country,code,state,dp,bd,email,phone,bio,address&skip="+s+"&search="+dp+"&on="+onx).then(value => {

            setc(value.data.total);

            setudat(value.data.data);

            // const up = document.getElementById("loadingx")
            // up.style.display = "none";


        })

    }

    useEffect(() => {
        loaddataU()
    }, []);








    return<OSIdeBar>





<div className="pt-1"></div>


        <div className="container-fluid py-3  rounded shadow h-100 w-100 me-2 mina ">


            <div className="px-lg-3 text-center">

                <div className="d-flex justify-content-between align-items-center bg-dark shadow-sm p-3 rounded-2">



                    <div className="text-dark  d-flex align-items-center ">

                        <input className="p-1 me-2 rounded" id="xyz" onChange={i=>{

                            setdp(i.target.value)
                        }}/>

                        <select name="" id=""  className={"form-control"} onChange={r=>{

                            setonx(r.target.value);

                        }}>


                            <option value="name">Name</option>
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                            <option value="code">CLIENT ID</option>
                            <option value="country">Country</option>
                            <option value="state">State</option>
                        </select>
                        <div className="btn btn-primary float-end my-2 mx-3" onClick={u => {



                            loaddataU()




                        }}>
                            Search
                        </div>

                    </div>


                </div>

                <table className="table  table-bordered table-striped table-dark align-items-center align-middle mt-3 rounded">
                    <thead>
                    <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Name</th>
                        <th scope="col">phone</th>
                        <th scope="col">email</th>
                        <th scope="col">country</th>
                        <th scope="col">state</th>
                        <th scope="col">pincode</th>
                        <th scope="col">action</th>
                    </tr>
                    </thead>
                    <tbody>


                    {getudat.map((et, ind) => {


                        return <tr key={ind}>

                            <td>{et.code}</td>
                            <td>{et.name}</td>
                            <td>{et.phone}</td>
                            <td>{et.email}</td>
                            <td>{et.country}</td>
                            <td>{et.state}</td>
                            <td>{et.pincode}</td>

                            <td className=" ">
                                <div className="d-flex justify-content-evenly align-items-center">



                                    <FaTrash onClick={y => {


                                        axios.delete("/api/usrz?_id=" + et._id).then(o => {

                                            window.location.reload()
                                        })

                                    }}/>


                                </div>
                            </td>


                        </tr>


                    })
                    }
                    </tbody>
                </table>

                {/*<ul className="pagination flex-wrap">*/}

                {/*    {[...Array(Math.ceil(getc / 10))].map((_, index) => {*/}
                {/*        return <li className={"page-item"} key={index}>*/}
                {/*            <div className="page-link " style={{cursor: "pointer"}} onClick={y => {*/}

                {/*                const up = document.getElementById("loadingx")*/}
                {/*                up.style.display = "flex";*/}
                {/*                loaddataU(index * 10);*/}


                {/*            }}>{index * 10}</div>*/}
                {/*        </li>*/}
                {/*    })}*/}


                {/*</ul>*/}
            </div>
        </div>
    </OSIdeBar>

}