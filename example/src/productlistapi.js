import axios from "axios";
const url="http://localhost:7000/addproduct1"
// export const addUser1=async(user1)=>{
//     return await axios.post(`${url}`,user1);
// }

export const getusers=async(id)=>{
    //  alert(id)
    id=id || '';
    return await axios.get(`${url}/${id}`);
}