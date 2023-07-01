import axios from "axios";
const url="http://localhost:7000/wishlist"
export const addwishlist=async(user1)=>{
    alert(user1.discription)
    return await axios.post(`${url}`,user1);
}
export const getusers=async(id)=>{
    // alert(id)
    id=id || '';
    return await axios.get(`${url}/${id}`);
}