import axios from "axios";
const url="http://localhost:7000"
export const addUser1=async(user1)=>{
    return await axios.post(`${url}`,user1);
}