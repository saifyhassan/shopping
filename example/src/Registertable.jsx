import React, { useState, useEffect } from "react";
import { getusers,activeusers,inactiveusers } from '../src/apiregister';
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-dt/js/dataTables.dataTables.js";
import "datatables.net-dt/js/dataTables.dataTables.min.js"
import * as $ from "jquery"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Registertable() {

    const [users, setUsers] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        $(document).ready(function () {
            $("#registertable").DataTable()
        })
        getallusers();
    }, [])

    const getallusers = async () => {
        let response = await getusers();
        setUsers(response.data)
    }

    const valueonSubmit = async()=>{
        await activeusers(id,users)
        //  alert(id)
        window.location.reload()

    }

    const valueonSubmit2 = async()=>{
        await inactiveusers(id,users)
        //  alert(id)
        window.location.reload()

    }

    return (
        <div className="row container-fluid">

            <div className="row" style={{ marginTop: "-150px" }}>
                <div className="col-md-5">

                </div>
                <div className="col-md-6">
                    <h2 style={{textAlign:"center",marginBottom:"25px"}}>User Records</h2>
                    <table id="registertable" border="2">
                            <thead>
                                <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Number</th>
                                <th>Value</th>
                                <th>Active</th>
                                <th>Inactive</th>
                                </tr>
                               
                            </thead>
                            <tbody>
                                {users.map((user)=>(
                                   <tr>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.number}</td>
                                        <td>{user.action}</td>
                                    
                                         <td><Link to={`usertable/${user._id}`}><button onClick={() => valueonSubmit()}>Active</button></Link></td>

                                         <td><Link to={`usertable/${user._id}`}><button onClick={() => valueonSubmit2()}>Inactive</button></Link></td>
                                         
                                        {/* <td><button>Inactive</button></td> */}
                                        {/* <button onClick={()=>{deleteUserData(user._id)}}>Delete</button> */}
                                   </tr> 
                                ))}
                            </tbody>
                        </table>

                 </div>
                <div className="col-md-1">

                </div>
            </div>

        </div>
    )
}
export default Registertable