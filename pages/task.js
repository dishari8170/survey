import OSIdeBar from "@/component/OSIdeBar";
import {useEffect, useState} from "react";
import axios from "axios";





export default function StaticPage() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get("/api/gettask")
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);
    return (
        <OSIdeBar>
            <div className="p-3 mina"
                 style={{height: "100vh",}}>
                <div className="h2 text-center  text-white fw-bolder">All Task</div>

                <div className="fixed-table w-100  vh-100">
                    <table className="table table-bordered w-100">
                        <thead className="table-info text-center">
                        <tr>
                            <th>Task</th>
                            <th>DAY</th>
                            <th>Status</th>
                            <th>Priority</th>

                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">


                        {tasks.map(task => (
                            <tr key={task._id}>

                                <td>{task.task}</td>
                                <td>{task.day} </td>
                                <td>incomplete</td>
                                <td>{task.priority}</td>
                                <td>{task.day}</td>
                            </tr>
                        ))}
                        <tr>
                            <td>Design UI</td>
                            <td>2 </td>
                            <td className="text-success">Completed</td>
                            <td className="text-danger">High</td>
                            <td>
                                <button className="btn btn-sm btn-info">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Code Backend</td>
                            <td>3 </td>
                            <td className="text-warning">In Progress</td>
                            <td className="text-primary">Medium</td>
                            <td>
                                <button className="btn btn-sm btn-info">View</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </OSIdeBar>
    );
}
