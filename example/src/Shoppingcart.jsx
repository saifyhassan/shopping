import React,{useState,useEffect} from "react";
import {getusers} from "./cartlistapi"
const initial={
    
//     discription:"",
//     name:"",
    image:"",
    price:"",
    number:""

   
}


function Shoppingcart() {
        const [users,setUsers]=useState([]);
        useEffect(()=>{
            getallusers();
        },[])
    
        const getallusers=async()=>{
            let response=await getusers();
            setUsers(response.data)
        }
    
        const[user1,setUser1]=useState(initial)
        const{image,discription,name,price,number}=user1;
    
        const fetchvalue=(e)=>{
            setUser1({...user1, [e.target.name]:e.target.value})
            alert(user1.number)
        //     alert(user1.number)
        }
    
        return (
                <div className="row container-fluid">
                        
                       
                        <div className="col-md-12">
                                <div className="row">
                                        <div className="col-md-12">
                                            <img style={{ width: "100%", height: "300px", marginLeft: "13px" }}     src="cardimage.jpg" alt="" className="" />
                                        </div>
                                </div>
                                <div className="row">
                                      <div className="col-md-5">

                                      </div> 
                                      <div className="col-md-4">
                                           <p style={{marginTop:"-187px",marginLeft:"px",fontSize:"50px",fontFamily:"serif"}}><b>Card List</b> </p> 
                                      </div> 
                                      <div className="col-md-3">

                                      </div> 
                                </div>
                               
                                
                        </div>
                       
                        <div className="row" style={{ marginTop: "210px" }}>
                                <div className="col-md-1">

                                </div>
                                <div className="col-md-1">
                                        <h6 className="shoppingcart1">Product</h6>
                                </div>
                                <div className="col-md-5">

                                </div>
                                <div className="col-md-1">
                                        <h6 className="shoppingcart1">Price</h6>
                                </div>

                                <div className="col-md-1">
                                        <h6 className="shoppingcart1">Quantity</h6>
                                </div>
                                <div className="col-md-1">
                                        {/* <h5><input type="number" style={{width:"55px"}}/></h5> */}
                                </div>
                                <div className="col-md-2">
                                        <h6 style={{marginLeft:"-91px"}} className="shoppingcart1">Total</h6>
                                </div>

                        </div>
                        <div className="row" style={{ marginTop: "-12px" }}>
                                <div className="col-md-1">

                                </div>
                                <div className="col-md-10 shoppingcart1">
                                        < hr />
                                </div>
                                <div className="col-md-1">

                                </div>

                        </div>

                        
                        {users.map((user)=>(
                    <form action="" method="post">
                        <div className="row">
                                <div className="col-md-1">

                                </div>
                                <div className="col-md-5">
                                <img src={user.image} alt="" style={{ width: "150px", height: "155px", border: "1px solid #eeeeee", borderRadius: "3px" }} />&nbsp; &nbsp; &nbsp;   <span>Minimalistic shop for multipurpose use</span>

                                </div>
                                <div className="col-md-1">

                                </div>
                                <div className="col-md-1">
                                <input type="text" id="num1" class="card-text" style={{ marginTop: "58px", marginLeft: "-16px", fontSize: "20px", fontFamily: "serif", color: "#506172",width:"60px",border:"none" }} name="price" value={user.price} onChange={(e)=>{fetchvalue(e)}}/>
                                </div>

                                {/* <div className="col-md-1">
                                        <h6 className="shoppingcart1 sc1">Quantity</h6>
                                </div> */}
                                <div className="col-md-1">
                                     <input type="number" id="num2" style={{width:"55px",marginTop:"59px",marginLeft:"-15px"}} name="number" value={user1.number} />
                                </div>
                                <div className="col-md-2">
                                        <h6 id="total" className="shoppingcart1 sc1">$720.00</h6>
                                </div>

                        </div>
                        <div className="row" style={{ marginTop: "15px", marginBottom: "15px" }}>
                                <div className="col-md-1">

                                </div>
                                <div className="col-md-10 shoppingcart1">
                                        < hr />
                                </div>
                                <div className="col-md-1 ">

                                </div>

                        </div>
                        </form>
                     ))}
                        <div className="row">
                                <div className="col-md-1">

                                </div>
                                <div className="col-md-5">
                                        <img src="shoppingcart2.png" alt="" style={{ width: "150px", height: "155px", border: "1px solid #eeeeee", borderRadius: "3px" }} />&nbsp; &nbsp; &nbsp;   <span>Minimalistic shop for multipurpose use</span>
                                </div>
                                <div className="col-md-1">

                                </div>
                                <div className="col-md-1">
                                        <h6 className="shoppingcart1 sc1">$360.00</h6>
                                </div>

                                {/* <div className="col-md-1">
                                        <h6 className="shoppingcart1 sc1">Quantity</h6>
                                </div> */}
                                <div className="col-md-1">
                                    <input type="number" style={{width:"55px",marginTop:"59px",marginLeft:"14px"}}/>
                                </div>
                                <div className="col-md-2">
                                        <h6 style={{marginLeft:"3px"}} className="shoppingcart1 sc1">$720.00</h6>
                                </div>

                        </div>
                        <div className="row" style={{ marginTop: "15px", marginBottom: "30px" }}>
                                <div className="col-md-1">

                                </div>
                                <div className="col-md-10 shoppingcart1">
                                        < hr />
                                </div>
                                <div className="col-md-1">

                                </div>

                        </div>
                        <div className="row">
                                <div className="col-md-1">

                                </div>
                                <div className="col-md-2">
                                        <a class="scu" href="#">Update Cart</a>
                                </div>
                                <div className="col-md-6">

                                </div>
                                <div className="col-md-3">
                                        <a class="scu" href="#">Close Coupon</a>
                                </div>
                        </div>
                        <div className="row" style={{ marginTop: "30px", marginBottom: "15px" }}>
                                <div className="col-md-1">

                                </div>
                                <div className="col-md-10 shoppingcart1">
                                        < hr />
                                </div>
                                <div className="col-md-1">

                                </div>

                        </div>
                        <div className="row">
                                <div className="col-md-8">

                                </div>&nbsp;&nbsp;&nbsp;
                                <div className="col-md-1">
                                        <p className="shoppingcart1">Subtotal</p>
                                </div>
                                <div className="col-md-1">

                                </div>&nbsp;&nbsp;&nbsp;
                                <div className="col-md-1">
                                        <p className="shoppingcart1">$2160.00</p>
                                </div>
                                <div className="col-md-1">

                                </div>
                        </div>
                        <div className="row" style={{ marginTop: "0px", marginBottom: "15px" }}>
                                <div className="col-md-1">

                                </div>
                                <div className="col-md-10 shoppingcart1">
                                        < hr />
                                </div>
                                <div className="col-md-1">

                                </div>

                        </div>
                        <div className="row">
                                <div className="col-md-8">

                                </div>
                                <div className="col-md-1">
                                        <p className="shoppingcart1" style={{ marginLeft: "12px" }}>Shipping</p>
                                </div>

                                <div className="col-md-3 scfr" >
                                        <div> <p className="shoppingcart1" style={{ marginLeft: "64px" }}>Flat Rate: $5.00 </p></div>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div><input type="radio" aria-label="Radio button for following text input" /></div>
                                </div>

                        </div>
                        <div className="row">
                                <div className="col-md-8">

                                </div>
                                <div className="col-md-1">

                                </div>

                                <div className="col-md-3 scfr" >
                                        <div> <p className="shoppingcart1" style={{ marginLeft: "77px" }}>Free Shipping </p></div>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div><input type="radio" aria-label="Radio button for following text input" /></div>
                                </div>

                        </div>
                        <div className="row">
                                <div className="col-md-8">

                                </div>
                                <div className="col-md-1">

                                </div>

                                <div className="col-md-3 scfr" >
                                        <div> <p className="shoppingcart1" style={{ marginLeft: "58px" }}>Flat Rate: $10.00 </p></div>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div><input type="radio" aria-label="Radio button for following text input" /></div>
                                </div>

                        </div>
                        <div className="row">
                                <div className="col-md-8">

                                </div>
                                <div className="col-md-1">

                                </div>

                                <div className="col-md-3 scfr" >
                                        <div> <p className="shoppingcart1" style={{ marginLeft: "29px" }}>Local Delivery: $2.00 </p></div>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div><input type="radio" aria-label="Radio button for following text input" /></div>
                                </div>

                        </div>
                        <div className="row">
                                <div className="col-md-8">

                                </div>
                                <div className="col-md-1">

                                </div>

                                <div className="col-md-3 scfr" >
                                        <div> <p className="shoppingcart1" style={{ marginLeft: "48px" }}>Calculate Shipping </p></div>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div><i className="fa fa-caret-down"></i></div>
                                </div>

                        </div>
                       

                        <div className="row">
                                <div className="col-md-8">

                                </div>


                                <div className="col-md-4 scfr" >
                                
                                        <div class="btn-group">
                                                <button type="button" class="scbtn btn-secondary " data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                                        Bangladesh
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-lg-end">
                                                        <li><button class="dropdown-item" type="button">Action</button></li>
                                                        <li><button class="dropdown-item" type="button">Another action</button></li>
                                                        <li><button class="dropdown-item" type="button">Something else here</button></li>
                                                </ul>
                                        </div>
                                      
                                        
                                </div>
                               

                        </div>
                          <div className="row" style={{marginTop:"-33px"}}>
                                <div className="col-md-10">

                                </div>
                                <div className="col-md-2">
                                    <i style={{marginLeft:"59px"}} className="fa fa-angle-down"></i>
                                </div>
                        </div> 
                        <div className="row" style={{marginTop:"20px"}}>
                                <div className="col-md-8">

                                </div>


                                <div className="col-md-4 scfr" >
                                
                                        <div class="btn-group">
                                                <button type="button" class="scbtn btn-secondary " data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                                        Select a State
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-lg-end">
                                                        <li><button class="dropdown-item" type="button">Action</button></li>
                                                        <li><button class="dropdown-item" type="button">Another action</button></li>
                                                        <li><button class="dropdown-item" type="button">Something else here</button></li>
                                                </ul>
                                        </div>
                                      
                                        
                                </div>
                               

                        </div>
                          <div className="row" style={{marginTop:"-33px"}}>
                                <div className="col-md-10">

                                </div>
                                <div className="col-md-2">
                                    <i style={{marginLeft:"59px"}} className="fa fa-angle-down"></i>
                                </div>
                        </div> 
                        <div className="row" style={{marginTop:"20px",marginLeft:"2px"}}>
                                <div className="col-md-8">

                                </div>
                                
                                <div className="col-md-3 scpz" >

                                        <input type="text" placeholder="Postcode/Zipcode" style={{paddingTop:"0px",backgroundColor:"#F4F4F4",height:"40px",border:"solid #F4F4F4",borderRadius:"5PX",paddingLeft:"4px",marginLeft:"-13px",width:"308px"}}/>
                                
                                        {/* <p style={{paddingTop:"5px",backgroundColor:"#F4F4F4",height:"40px",border:"solid #F4F4F4",borderRadius:"5PX",paddingLeft:"4px",marginLeft:"-13px",width:"308px"}}>Postcode/Zipcode</p>  */}
                                </div>
                                <div className="col-md-1 " >
                                </div>
                        </div>
                        <div className="row" style={{marginTop:"10px",marginLeft:"2px"}}>
                                <div className="col-md-9">

                                </div>

                                <div className="col-md-3 scpz" >
                                
                                     <a class="scbtn_1" href="#">Update Details</a>
                                </div>
                                
                        </div>
                        <div className="row" style={{ marginTop: "15px", marginBottom: "5px" }}>
                                <div className="col-md-1">

                                </div>
                                <div className="col-md-10 shoppingcart1">
                                        < hr/>
                                </div>
                                <div className="col-md-1">

                                </div>

                        </div>
                        <div className="row" style={{marginTop:"10px",marginLeft:"-67px"}}>
                                <div className="col-md-1">

                                </div>
                                <div className="col-md-6">

                                </div>
                                <div className="col-md-5">
                                    <div><a class="sccs" href="#">Continue Shopping</a></div>
                                    
                                </div>
                               

                                
                        </div>
                        <div className="row" style={{marginTop:"-59px",marginLeft:"-51px"}}>
                                <div className="col-md-9">

                                </div>

                                <div className="col-md-3 scpz" >
                                
                                     <a class="scptco" href="#">Proceed To Check Out</a>
                                </div>
                                
                        </div>
                        
                </div>
        )
}
export default Shoppingcart