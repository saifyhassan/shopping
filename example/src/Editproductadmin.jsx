import React, { useState, useEffect } from "react";
import { getusers,editusers } from "./addproductapi";
import { useParams } from "react-router-dom";
const initial = {
    name: "",
    price: "",
    discription: ""
}
function Editadmin() {
    const [user1, setUser1] = useState(initial)
    const { name, price, discription } = user1;

    const {id} = useParams();
    
    useEffect(() => {
        loaduserdata();
    }, []);

    const loaduserdata = async () => {
        const response=await getusers(id)
        // console.log(id)
        setUser1(response.data)
    }
    const fetchvalue = (e) => {
        setUser1({ ...user1, [e.target.name]: e.target.value })
    }

    const valueonSubmit = async()=>{
        await editusers(id,user1)
        // console.log(id)
        window.location.reload()

    }
    return (
        <div>
            <div className="row" style={{marginTop:"-105px"}}>
                <div className="col-md-4">

                </div>
                <div className="col-md-6">
                    <h2 style={{ textAlign: "center" }}>Edit Products</h2>

                    <form action="" method="POST">
                        <input type="text" className="form-control" placeholder="Enter Product Name" name="name" value={name} onChange={(e)=>{fetchvalue(e)}} /><br />

                        <input type="text" className="form-control" placeholder="Enter Product Price" name="price" value={price} onChange={(e)=>{fetchvalue(e)}} /><br />

                        {/* <label>Product Image</label> */}
                        {/* <input type="text"  className="form-control" placeholder="Choose File" style={{marginTop:"12px"}} name="price" value={price} onChange={(e)=>{fetchvalue(e)}}/><br /> */}

                        <label>Product Description</label><br />
                        <textarea id="" cols="37" rows="5" style={{ marginTop: "12px" }} name="discription" value={discription} onChange={(e)=>{fetchvalue(e)}}></textarea><br />

                        <button type="button" className="btn btn-danger" style={{ marginTop: "12px" }} onClick={() => valueonSubmit()}>Update</button>


                    </form>
                </div>
                <div className="col-md-2">

                </div>

            </div>
        </div>
    )
}
export default Editadmin