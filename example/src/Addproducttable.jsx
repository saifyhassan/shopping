import React,{useState,useEffect} from "react";
import {getusers,deleteusers} from '../src/addproductapi';
 import { Link } from "react-router-dom";
function Addproductdetailes() {
    
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        getallusers();
    },[])

    const getallusers=async()=>{
        let response=await getusers();
        setUsers(response.data)
    }

    const deleteUserData = async (id) =>{
        await deleteusers(id);
        getallusers();
    }
    return (
        <div className="row container-fluid">
           
           <div className="row" style={{marginTop:"-105px"}}>
                <div className="col-md-5">

                </div>
                <div className="col-md-6">
                        <h2>Product Detailes</h2>
                        <table border="2" style={{textAlign:"center"}}>
                            <thead>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Product Description</th>
                            </thead>
                            <tbody>
                                {users.map((user)=>(
                                   <tr>
                                        <td>{user.name}</td>
                                        <td>{user.price}</td>
                                        <td>{user.discription}</td>
                                        <td><Link to={`/dash2/editadminform/${user._id}`}><button>Edit</button></Link></td>
                                        <button onClick={()=>{deleteUserData(user._id)}}>Delete</button>
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
export default Addproductdetailes