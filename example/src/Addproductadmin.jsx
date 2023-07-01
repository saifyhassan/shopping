import React,{useState} from "react";
import {addUser1} from "./addproductapi"
const initial={
    image:"",
    name:"",
    price:"",
    discription:""
    
}
function Addproduct(){
    const[user1,setUser1]=useState(initial)
    const{  image,name,price,discription}=user1;

    const fetchvalue=(e)=>{
        setUser1({...user1, [e.target.name]:e.target.value})
    }

    const valueonSubmit=async()=>{
        await addUser1(user1)

    }

    return(
            <div>
                <div className="row" style={{marginTop:"-105px"}}>
                    <div className="col-md-4">
                    
                    </div>
                    <div className="col-md-6">
                        <h2 style={{textAlign:"center"}}>Add Products</h2>
                    <form action="">
                            <input type="text" className="form-control" placeholder="Insert Image" name="image" value={image} onChange={(e)=>{fetchvalue(e)}}/><br />
                            <input type="text" className="form-control" placeholder="Enter Product Name" name="name" value={name} onChange={(e)=>{fetchvalue(e)}}/><br />
                            <input type="text" className="form-control" placeholder="Enter Product Price" name="price" value={price} onChange={(e)=>{fetchvalue(e)}}/><br />
                            {/* <label>Product Image</label> */}
                            {/* <input type="text"  className="form-control" placeholder="Choose File" style={{marginTop:"12px"}} name="price" value={price} onChange={(e)=>{fetchvalue(e)}}/><br /> */}
                            <label>Product Description</label><br />
                            <textarea  id="" cols="37" rows="5" style={{marginTop:"12px"}} name="discription" value={discription} onChange={(e)=>{fetchvalue(e)}}></textarea><br />

                            <button type="button" className="btn btn-danger"  style={{marginTop:"12px"}} onClick={()=>valueonSubmit()}>Submit</button>
                           
                            
                        </form>
                    </div>
                    <div className="col-md-2">
                   
                    </div>

                </div>
            </div>


    )
}
export default Addproduct