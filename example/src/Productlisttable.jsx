// import React,{useState,useEffect} from "react";
// import {getusers} from '../src/productlistapi';
// //  import { Link } from "react-router-dom";
// function Productlisttable() {
    
//     const [users,setUsers]=useState([]);
//     useEffect(()=>{
//         getallusers();
//     },[])

//     const getallusers=async()=>{
//         let response=await getusers();
//         setUsers(response.data)
//     }

//     // const deleteUserData = async (id) =>{
//     //     await deleteusers(id);
//     //     getallusers();
//     // }
//     return (
//         <div className="row container-fluid">
           
//            <div className="row" style={{marginTop:"px"}}>
//                 <div className="col-md-5">

//                 </div>
//                 <div className="col-md-6">
//                         <h2>Product List</h2>
//                         <table border="2" style={{textAlign:"center"}}>
//                             <thead>
//                                 <th>Product Image</th>
//                                 <th>Product Description</th>
//                                 <th>Product Name</th>
//                                 <th>Product Price</th>
                               
//                             </thead>
//                             <tbody>
//                                 {users.map((user)=>(
//                                    <tr>
//                                         <td>{user.image1}</td>
//                                         <td>{user.discription}</td>
//                                         <td>{user.name}</td>
//                                         <td>{user.price}</td>

                                      
//                                         {/* <td><Link to={`/dash2/editadminform/${user}`}><button>productlist</button></Link></td> */}
//                                         {/* <button onClick={()=>{deleteUserData(user._id)}}>Delete</button> */}
//                                    </tr> 
//                                 ))}
//                             </tbody>
//                         </table>
//                 </div>
//                 <div className="col-md-1">

//                 </div>
//             </div>

//          </div>
//     )
// }
// export default Productlisttable