import axios from "axios";
const url="http://localhost:7000/regnew"


export const addUser1=async(user1)=>{
    return await axios.post(`${url}/new`,user1);
}


export const addUser2=async(user1)=>{
    return await axios.post(`${url}/new2`,user1);
}


export const getusers=async(id)=>{
    // alert(id)
    id=id || '';
    return await axios.get(`${url}/${id}`);
}


export const activeusers=async(id,user1)=>{

    return await axios.put (`${url}/${id}`,user1);
}


export const inactiveusers=async(id,user1)=>{
    // alert(id)
    return await axios.put (`${url}/inactive/${id}`,user1);
}





