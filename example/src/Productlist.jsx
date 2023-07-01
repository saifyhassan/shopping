import React,{useState,useEffect} from "react";
import {getusers} from "./productlistapi"
import {addwishlist} from "./wishlistapi"
import {addcartlist} from "./cartlistapi"

const initial={
    image:"",
    discription:"",
    name:"",
    price:""
   
}
function Productlist() {

    const [users,setUsers]=useState([]);
    useEffect(()=>{
        getallusers();
    },[])

    const getallusers=async()=>{
        let response=await getusers();
        setUsers(response.data)
    }

    const[user1,setUser1]=useState(initial)
    const{image,discription,name,price,}=user1;

    const fetchvalue=(e)=>{
        setUser1({...user1, [e.target.name]:e.target.value})
    }

    
    const valueonSubmit=async()=>{
        // alert(user1.discription)
        await addwishlist(user1)

    }
    const valueonSubmit1=async()=>{
        await addcartlist(user1)

    }
    return (
        <div className="row container-fluid">
            <div className="col-md-12 ">
                <div className="row">
                    <div className="col-md-12">
                        <img style={{ width: "100%", height: "300px", marginLeft: "13px" }} src="cardimage.jpg" alt="" className="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">

                    </div>
                    <div className="col-md-4">
                        <p style={{ marginTop: "-187px", marginLeft: "px", fontSize: "50px", fontFamily: "serif" }}><b>Product List</b> </p>
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
            </div>

            {/* <div className="row" style={{marginTop:"20px"}}>
                <div className="col-md-12">
                <Link to="/productlist/producttable"><h3 style={{textAlign:"center",marginLeft:"90px"}}>Product lists</h3></Link> 
                </div>
            </div> */}


            {/* <div className="row" style={{marginTop:"px"}}>
                <div className="col-md-4">
                
                </div>
                <div className="col-md-4">
                    <Outlet/>
                </div>
                <div className="col-md-4">
                
                </div>
            </div> */}

            <div className="row" style={{ marginTop: "170px" }}>
                <div className="col-md-1">

                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">

                                <div className="col-md-12">
                                    <form action="" method="post">
                                        <input className="plinput1" type="text" name="" placeholder="Search keyword" />
                                    
                                    </form>
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: "-37px" }}>
                                <div className="col-md-11">

                                </div>
                                <div className="col-md-1">
                                    <i className="fa fa-search" style={{ marginLeft: "-35px" }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "34px" }}>
                        <div className="col-md-12">
                            <div class="plinput2">
                                <div class="">
                                    <button type="button" class="btn" data-bs-toggle="dropdown" style={{ borderColor: "#F4EDF2", width: "100%", textAlign: "left" }}>
                                        Category
                                    </button>
                                    <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#"><input type="checkbox" />&nbsp; Mens</a></li>
                                    <li><a class="dropdown-item" href="#"><input type="checkbox" />&nbsp; Womens</a></li>
                                    <li><a class="dropdown-item" href="#"><input type="checkbox" />&nbsp; Kids</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="row" style={{ marginTop: "-37px" }}>
                                <div className="col-md-11">

                                </div>
                                <div className="col-md-1">
                                    <i className="fa fa-caret-down" style={{ marginLeft: "-35px" }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "34px" }}>
                        <div className="col-md-12">
                            <div class="plinput2">
                                <div class="">
                                    <button type="button" class="btn" data-bs-toggle="dropdown" style={{ borderColor: "#F4EDF2", width: "100%", textAlign: "left" }}>
                                        Type
                                    </button>
                                    <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#"><input type="checkbox" />&nbsp; Western</a></li>
                                    <li><a class="dropdown-item" href="#"><input type="checkbox" />&nbsp; Prined</a></li>
                                    <li><a class="dropdown-item" href="#"><input type="checkbox" />&nbsp; Checkered</a></li>
                                       
                                    </ul>
                                </div>

                            </div>
                            <div className="row" style={{ marginTop: "-37px" }}>
                                <div className="col-md-11">

                                </div>
                                <div className="col-md-1">
                                    <i className="fa fa-caret-down" style={{ marginLeft: "-35px" }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "34px" }}>
                        <div className="col-md-12">
                            <div class="plinput2">
                                <div class="">
                                    <button type="button" class="btn" data-bs-toggle="dropdown" style={{ borderColor: "#F4EDF2", width: "100%", textAlign: "left" }}>
                                        Size
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#"><input type="checkbox" />&nbsp; S</a></li>
                                        <li><a class="dropdown-item" href="#"><input type="checkbox" />&nbsp; M</a></li>
                                        <li><a class="dropdown-item" href="#"><input type="checkbox" />&nbsp; L</a></li>
                                        <li><a class="dropdown-item" href="#"><input type="checkbox" />&nbsp; XL</a></li>
                                        <li><a class="dropdown-item" href="#"><input type="checkbox" />&nbsp; XXL</a></li>
                                        <li><a class="dropdown-item" href="#"><input type="checkbox" />&nbsp; XXXL</a></li>

                                    </ul>
                                </div>

                            </div>
                            <div className="row" style={{ marginTop: "-37px" }}>
                                <div className="col-md-11">

                                </div>
                                <div className="col-md-1">
                                    <i className="fa fa-caret-down" style={{ marginLeft: "-35px" }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="dropdown plinput2 " style={{ marginTop: "34px" }}>
                            <button type="button" class="btn" data-bs-toggle="dropdown" style={{ borderColor: "#F4EDF2", width: "100%", textAlign: "left" }}>
                                Price
                            </button>

                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#"><input type="checkbox" />&nbsp; Rs. 249 and Below</a></li>
                                        <li><a class="dropdown-item" href="#"><input type="checkbox" />&nbsp; Rs. 400-Rs. 499</a></li>
                                        <li><a class="dropdown-item" href="#"><input type="checkbox" />&nbsp; Rs. 500-Rs. 699</a></li>
                                        <li><a class="dropdown-item" href="#"><input type="checkbox" />&nbsp; Rs. 700-Rs. 999</a></li>
                                        <li><a class="dropdown-item" href="#"><input type="checkbox" />&nbsp; Rs. 1000 and above</a></li>
                                        
                            </ul>
                        </div>
                       
                    </div>
                </div>



                <div className="col-md-6">
                    {users.map((user)=>(
                    <form action="" method="post">
                     <div className="row">
                        <div className="col-md-6">
                      
                              <div class="card" style={{ width: "318px", border: "none", marginLeft: "5px" }}>
                                
                                <img class="card-img-top" style={{backgroundColor:"tomato"}} src={user.image} alt="" />

                                <div>
                                    <div class="card-body">


                                        <textarea  id="" cols="18"  class="card-text " style={{ marginTop: "1px", marginLeft: "61px", fontSize: "25px",width:"273px",border:"none",height:"45px" }} name="discription" value={user.discription} onChange={(e)=>{fetchvalue(e)}}>{user.discription}</textarea>

                                        <input type="text" className="card-text " style={{ marginTop: "-8px", marginLeft: "61px", fontSize: "20px", fontFamily: "serif", color: "#506172",width:"273px", border:"none" }} placeholder="Enter Product Name" name="name" value={user.name} onChange={(e)=>{fetchvalue(e)}}/><br />

                                       <input type="text" class="card-text" style={{ marginTop: "-8px", marginLeft: "61px", fontSize: "20px", fontFamily: "serif", color: "#506172",width:"273px",border:"none" }} placeholder="Enter Product Price" name="price" value={user.price} onChange={(e)=>{fetchvalue(e)}}/>

                                       <div className="wish" style={{marginLeft: "61px",marginTop:"10px"}}>
                                           <div>   
                                               <button type="button" className="btn btn-danger" onClick={()=>valueonSubmit()}>Wish list</button>
                                            </div>

                                           <div style={{marginLeft: "6px"}}>   
                                                <button type="button" className="btn btn-danger" onClick={()=>valueonSubmit1()}>Cart List</button>
                                           </div> 
                                        </div>
                                     
                                    </div>
                                </div>
                              </div>
                           
                        </div>
                         <div className="col-md-6">
                          
                        </div> 
                    </div>

                   
                 </form>
                ))}
            </div>
            <div className="row" style={{ marginTop: "45px" }}>
                        <div className="col-md-5">

                        </div>
                        <div className="col-md-4">
                            <a style={{marginLeft:"93px"}} href="#" class="plload">Load More</a>
                        </div>
                        <div className="col-md-3">

                        </div>
            </div>
              
                <div className="col-md-1">

                </div>
         </div>
{/* <div className="row">
<div className="col-md-4">
{users.map((user)=>(
                    <form action="" method="post">
                     
                         
                      
                              <div class="card" style={{ width: "318px", border: "none", marginLeft: "5px" }}>

                               

                               
                                    <div class="card-body">

                                    <img class="card-img-top" src={user.image} alt="Card image" />

                                      
                                        <textarea  id="" cols="18"  class="card-text " style={{ marginTop: "1px", marginLeft: "61px", fontSize: "25px",width:"273px",border:"none",height:"45px" }} name="discription" value={user.discription} onChange={(e)=>{fetchvalue(e)}}></textarea>

                                        <input type="text" className="card-text " style={{ marginTop: "-8px", marginLeft: "61px", fontSize: "20px", fontFamily: "serif", color: "#506172",width:"273px", border:"none" }} placeholder="Enter Product Name" name="name" value={user.name} onChange={(e)=>{fetchvalue(e)}}/><br />

                                       <input type="text" class="card-text" style={{ marginTop: "-8px", marginLeft: "61px", fontSize: "20px", fontFamily: "serif", color: "#506172",width:"273px",border:"none" }} placeholder="Enter Product Price" name="price" value={user.price} onChange={(e)=>{fetchvalue(e)}}/>

                                       <div className="wish" style={{marginLeft: "61px",marginTop:"10px"}}>
                                           <div>   
                                               <button type="button" className="btn btn-danger" onClick={()=>valueonSubmit()}>Wishlist</button>
                                            </div>

                                           <div style={{marginLeft: "6px"}}>   
                                                <button type="button" className="btn btn-danger" onClick={()=>valueonSubmit()}>Cart List</button>
                                           </div> 
                                        </div>
                                     
                                    </div>
                                </div>
                            
                           
                    

                   
                 </form>
                ))}
</div>
</div> */}
         
            <div className="row aboutclient" style={{ marginLeft: "10px", height: "494px", marginTop: "170px" }}>
                <div className="col-md-12">


                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active"><br /><br /><br />
                                <center>
                                    <img src="aboutclient1.png" class="d-block" alt="..." style={{ width: "150px", height: "150px" }} />
                                </center>
                                <br /><br /><br /><br /> <br /><br /><br /><br /><br /><br />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Working in conjuction with humanitarian aid agencies, we</h5>
                                    <h5>have supported programes to help alleviate human</h5>
                                    <h5>suffring</h5><br />
                                    <p>Mickey Mouse</p>
                                </div>
                            </div>
                            <div class="carousel-item active"><br /><br /><br />
                                <center>
                                    <img src="aboutclient2.png" class="d-block" alt="..." style={{ width: "150px", height: "150px" }} /></center>
                                <br /><br /><br /><br /> <br /><br /><br /><br /> <br /><br />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Working in conjuction with humanitarian aid agencies, we</h5>
                                    <h5>have supported programes to help alleviate human</h5>
                                    <h5>suffring</h5><br />
                                    <p>Mickey Mouse</p>
                                </div>
                            </div>
                            <div class="carousel-item active"><br /><br /><br />
                                <center>
                                    <img src="aboutclient3.png" class="d-block" alt="..." style={{ width: "150px", height: "150px" }} /></center>
                                <br /><br /><br /><br /> <br /><br /><br /><br /> <br /><br />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Working in conjuction with humanitarian aid agencies, we</h5>
                                    <h5>have supported programes to help alleviate human</h5>
                                    <h5>suffring</h5><br />
                                    <p>Mickey Mouse</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </div>
            <div className='row' style={{ marginTop: "240px" }}>
                <div className='col-md-1'>

                </div>
                <div className='col-md-3'>
                    <i style={{ fontSize: "40px" }} className='fa fa-cube'></i><br /><br />
                    <h5><b style={{ fontFamily: "cursive" }}>Free Shipping Method</b></h5>
                    <h6 className='freeshipping'>aorem ixpsacdolor sit </h6>
                    <h6 className='freeshipping'>ameasecur adipisicing elitsf  </h6>
                    <h6 className='freeshipping'>edasd. </h6>

                </div>
                <div className='col-md-1'>

                </div>
                <div className='col-md-3'>
                    <i style={{ fontSize: "40px" }} className='fa fa-unlock-alt'></i><br /><br />
                    <h5><b style={{ fontFamily: "cursive" }}>Secure Payment System</b></h5>
                    <h6 className='freeshipping'>aorem ixpsacdolor sit </h6>
                    <h6 className='freeshipping'>ameasecur adipisicing elitsf  </h6>
                    <h6 className='freeshipping'>edasd. </h6>
                </div>
                <div className='col-md-1'>

                </div>
                <div className='col-md-3'>
                    <i style={{ fontSize: "40px" }} className='fa fa-refresh'></i><br /><br />
                    <h5><b style={{ fontFamily: "cursive" }}>Secure Payment System</b></h5>
                    <h6 className='freeshipping'>aorem ixpsacdolor sit </h6>
                    <h6 className='freeshipping'>ameasecur adipisicing elitsf  </h6>
                    <h6 className='freeshipping'>edasd. </h6>
                </div>

            </div>
            <div className="row"  style={{ marginLeft: "10px", height: "550px", backgroundColor: "#191D34", marginTop: "190px" }}>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-8">
                            <p style={{ color: "white", marginLeft: "", fontFamily: "serif", fontSize: "2.5rem", marginTop: "95px" }}>Get promotions & updates!</p>

                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-10">
                            <p style={{ color: "white", marginLeft: "95px", fontFamily: "serif", fontSize: "20px", marginTop: "-15px" }}>Seamlessly empower fully researched growth strategies and interoperable internal or </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-9">
                            <p style={{ color: "white", marginLeft: "116px", fontFamily: "serif", fontSize: "20px", marginTop: "-15px" }}>“organic” sources credibly innovate granular internal .</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-6">
                            <input id="aboutinput" type="email" placeholder="Enter your mail"></input>


                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "-61px" }}>
                        <div className="col-md-7">

                        </div>
                        <div className="col-md-5">

                            <button className="btn_1" style={{ marginLeft: "66px", fontFamily: "serif" }}>Subscribe</button>
                          
                        </div>

                    </div>
                </div>
            </div>

            <div className="row toparrow1" style={{marginTop:"275px"}}>
                <div className="col-md-11">

                </div>
                <div className="col-md-1">
                <a className="" href="#toparrow">  <i className="fa fa-arrow-circle-o-up " style={{ fontSize:"40px",color:"#506172" }}></i></a>
               
                </div>
                
            </div>
            <div className="row downarrow1"  style={{marginTop:"-13px"}}>
                <div className="col-md-11">

                </div>
                <div className="col-md-1">
              
                <a className="" href="#downarrow">  <i className="fa fa-arrow-circle-o-down " style={{ fontSize:"40px",color:"#506172" }}></i></a>

                </div>
                
            </div>


        </div>
    )
}
export default Productlist