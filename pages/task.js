export default () => {


    return <>
        <div className="d-flex justify-content-center align-items-center"
             style={{ width: "100vw", height: "100vh", backgroundColor: "blue" }}>

            <div className="d-flex mina shadow-lg rounded-3 justify-content-center align-items-center"
                 style={{ width: "98vw", height: "98vh", backgroundColor: "black" }}>

                <div className="d-flex shadow-lg rounded-3 justify-content-center align-items-center"
                     style={{ width: "95vw", height: "95vh", backgroundColor: "blue", padding: "20px" }}>

                    <div className="table-responsive w-100 h-100">
                        <table className="table table-bordered w-100 h-100">
                            <thead className="table-info text-center">
                            <tr>
                                <th>Task</th>
                                <th>Time</th>
                                <th>Priority</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody className="text-center">
                            <tr>
                                <td>Design UI</td>
                                <td>2 hours</td>
                                <td className="text-success">Completed</td>
                                <td className="text-danger">High</td>
                                <td>
                                    <button className="btn btn-sm btn-info">view</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Code Backend</td>
                                <td>3 hours</td>
                                <td className="text-warning">In Progress</td>
                                <td className="text-primary">Medium</td>
                                <td>
                                    <button className="btn btn-sm btn-info">view</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>

    </>


}