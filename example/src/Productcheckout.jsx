import React from "react";
function Productcheckout(){
    return(
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
                                           <p style={{marginTop:"-187px",marginLeft:"px",fontSize:"50px",fontFamily:"serif"}}><b>Checkout</b> </p> 
                                      </div> 
                                      <div className="col-md-3">

                                      </div> 
                                </div>
                               
                                
                </div>
                <div className="row" style={{marginTop:"165px"}}>
                    <div className="col-md-1">
                        
                    </div>
                    <div className="col-md-11 pcrc">
                        <h6>Returning Customer? <a href="#">Click here to login</a></h6>
                    </div>
                   
                </div>
                <div className="row" style={{marginTop:"21px"}}>
                    <div className="col-md-1">
                        
                    </div>
                    <div className="col-md-11 ">
                        <h6 style={{color:"#828BB2"}}>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</h6>
                    </div>
                   
                </div>
                <div className="row" style={{marginTop:"25px"}}>
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-11">
                        <div className="row">
                            <div className="col-md-4">
                                <input type="text" class="pcun" id="name" name="name" value="" placeholder="Username or Email"/>
                            </div>
                            <div className="col-md-4">
                                <input type="password" class="pcun" id="password" name="password" value=""     placeholder="password"/>
                            </div>
                            <div className="col-md-4">
                               
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className="row" style={{marginTop:"20px"}}>
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-2">
                    <button type="submit" value="submit" class="pcli">log in </button>   
                    </div>
                    <div className="col-md-9">
                        <input type="checkbox" name="" id="" style={{marginTop:"25px",marginLeft:"-85px"}}/> &nbsp;
                        <span>Remember me</span>
                    </div>
                    
                </div>
                <div className="row" style={{marginTop:"20px"}}>
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-11">
                         <h6 style={{color:"#828bb2"}}>Lost your password?</h6>
                    </div>
                   
                    
                </div>
                <div className="row" style={{marginTop:"15px"}}>
                    <div className="col-md-1">
                        
                    </div>
                    <div className="col-md-11 pcrc">
                        <h6>Have a coupon? <a href="#">Click here to enter your code</a></h6>
                    </div>
                   
                </div>
                <div className="row" style={{marginTop:"25px"}}>
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-7">
                       <input type="password" class="pcun" id="password" name="password" value=""     placeholder=" Enter coupon code "/> 
                        
                    </div>
                    <div className="col-md-4">
                       
                        
                    </div>
                </div>
                <div className="row" style={{marginTop:"15px"}}>
                    <div className="col-md-1">
                        
                    </div>
                    <div className="col-md-11">
                         <a class="pcac" href="#">Apply Coupon</a>
                    </div>
                   
                </div>
                <div className="row" style={{marginTop:"30px"}}>
                    <div className="col-md-1">
                        
                    </div>
                    <div className="col-md-11">
                         <h5 style={{color:"#415094"}}>Billing Details</h5 >
                    </div>
                   
                </div>
                <div className="row" style={{marginTop:"30px"}}>
                        <div className="col-md-1">

                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-6">
                                     <input type="password" class="pcun" id="password" name="password" value=""          placeholder=" First Name "/> 
                                </div>
                                <div className="col-md-6">
                                     <input type="password" class="pcun" id="password" name="password" value=""          placeholder=" Last Name "/> 
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"20px"}}>
                                    <div className="col-md-12">
                                        <input type="password" class="pcun" id="password" name="password" value=""  placeholder=" Company Name "/> 
                                    </div>
                            </div>
                            <div className="row" style={{marginTop:"20px"}}>
                                <div className="col-md-6">
                                     <input type="password" class="pcun" id="password" name="password" value=""          placeholder=" Phone Number "/> 
                                </div>
                                <div className="col-md-6">
                                     <input type="password" class="pcun" id="password" name="password" value=""          placeholder=" Email Address "/> 
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"20px"}}>
                                    <div className="col-md-12">
                                        <input type="password" class="pcun form-select" id="password" name="password" value=""  placeholder=" Country "/> 
                                    </div>
                            </div>
                            <div className="row" style={{marginTop:"20px"}}>
                                    <div className="col-md-12">
                                        <input type="password" class="pcun" id="password" name="password" value=""  placeholder=" Address Line 01 "/> 
                                    </div>
                            </div>
                            <div className="row" style={{marginTop:"20px"}}>
                                    <div className="col-md-12">
                                        <input type="password" class="pcun" id="password" name="password" value=""  placeholder=" Address Line 02 "/> 
                                    </div>
                            </div>
                            <div className="row" style={{marginTop:"20px"}}>
                                    <div className="col-md-12">
                                        <input type="password" class="pcun" id="password" name="password" value=""  placeholder=" Town/City "/> 
                                    </div>
                            </div>
                            <div className="row" style={{marginTop:"20px"}}>
                                    <div className="col-md-12">
                                        <input type="password" class="pcun form-select" id="password" name="password" value=""  placeholder=" District "/> 
                                    </div>
                            </div>
                            <div className="row" style={{marginTop:"20px"}}>
                                    <div className="col-md-12">
                                        <input type="password" class="pcun" id="password" name="password" value=""  placeholder=" Postcode/Zip "/> 
                                    </div>
                            </div>
                            <div className="row" style={{marginTop:"20px"}}>
                                    <div className="col-md-12">
                                        <input type="checkbox" name="" id="" />&nbsp;&nbsp;
                                        <span>Create an account?</span>
                                    </div>
                            </div>
                            <div className="row" style={{marginTop:"30px"}}>
                    
                                 <div className="col-md-12">
                                      <h5 style={{color:"#415094"}}>Shipping Details</h5 >
                                 </div>
                   
                            </div>
                            <div className="row" style={{marginTop:"20px"}}>
                                    <div className="col-md-12">
                                        <input type="checkbox" name="" id="" />&nbsp;&nbsp;
                                        <span>Ship to a diffrent address?</span>
                                    </div>
                            </div>
                            <div className="row" style={{marginTop:"20px"}}>
                                    <div className="col-md-12">
                                    <textarea class="form-control spta" name="message" id="message" rows="5" placeholder="Order Notes"></textarea>
                                    </div>
                            </div>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-md-3" style={{backgroundColor:"#F7F7F7",paddingRight:"25px",paddingLeft:"25px",paddingBottom:"",marginTop:"-60px",color:"#828BB2",fontFamily:"serif"}}>
                            <div className="row" style={{marginTop:"25px"}}>
                                <div className="col-md-12">
                                    <h5 style={{color:"#415094"}}>Your Order</h5>
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"-10px"}}>
                                <div className="col-md-12">
                                    <hr />
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"-7px"}}>
                                <div className="col-md-1">
                                    <h6>Product</h6>
                                </div>
                                <div className="col-md-9">
                                    
                                </div>
                                <div className="col-md-2">
                                    <h6 style={{marginLeft:"-10px"}}>Total</h6>
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"-10px"}}>
                                <div className="col-md-12">
                                    <hr style={{}}/>
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"-7px"}}>
                                <div className="col-md-6">
                                    <h6>Fresh Blackberry</h6>
                                </div>
                               
                                <div className="col-md-1">
                                    <h6>x02</h6>
                                </div>
                                <div className="col-md-1">
                                    
                                </div>
                                <div className="col-md-4">
                                    <h6 style={{marginLeft:"21px"}}>$720.00</h6>
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"-10px"}}>
                                <div className="col-md-12">
                                    <hr />
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"-7px"}}>
                                <div className="col-md-6">
                                    <h6>Fresh Tomatoes</h6>
                                </div>
                               
                                <div className="col-md-1">
                                    <h6>x02</h6>
                                </div>
                                <div className="col-md-1">
                                    
                                </div>
                                <div className="col-md-4">
                                    <h6 style={{marginLeft:"21px"}}>$720.00</h6>
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"-10px"}}>
                                <div className="col-md-12">
                                    <hr />
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"-7px"}}>
                                <div className="col-md-6">
                                    <h6>Fresh Brocoli</h6>
                                </div>
                               
                                <div className="col-md-1">
                                    <h6>x02</h6>
                                </div>
                                <div className="col-md-1">
                                    
                                </div>
                                <div className="col-md-4">
                                    <h6 style={{marginLeft:"21px"}}>$720.00</h6>
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"-10px"}}>
                                <div className="col-md-12">
                                    <hr />
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"-7px"}}>
                                <div className="col-md-1">
                                    <h6 style={{color:"#415094"}}>SUBTOTAL</h6>
                                </div>
                                <div className="col-md-9">
                                    
                                </div>
                                <div className="col-md-2">
                                    <h6 style={{marginLeft:"-35px"}}>$2160.00</h6>
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"-10px"}}>
                                <div className="col-md-12">
                                    <hr />
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"-7px"}}>
                                <div className="col-md-1">
                                    <h6 style={{color:"#415094"}}>SHIPPING</h6>
                                </div>
                                <div className="col-md-6">
                                    
                                </div>
                                <div className="col-md-5">
                                    <h6 style={{marginLeft:"-18px"}}>Flate Rate: $50.00</h6>
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"-10px"}}>
                                <div className="col-md-12">
                                    <hr />
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"-7px"}}>
                                <div className="col-md-1">
                                    <h6 style={{color:"#415094"}}>TOTAL</h6>
                                </div>
                                <div className="col-md-9">
                                    
                                </div>
                                <div className="col-md-2">
                                    <h6 style={{marginLeft:"-35px"}}>$2210.00</h6>
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"-10px"}}>
                                <div className="col-md-12">
                                    <hr />
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"-7px"}}>
                                <div className="col-md-12">
                                <input type="radio" id="f-option5" name="selector"/>&nbsp;&nbsp;&nbsp;
                                <span style={{fontSize:"12px"}}>CHECK PAYMENTS</span> 
                                    
                                </div>
                               
                            </div>
                            <div className="row" style={{marginTop:"-7px",marginRight:"0px",paddingRight:"0px"}}>
                                    <div className="col-md-12" style={{marginTop:"20px",backgroundColor:"white",paddingLeft:"24px",paddingTop:"19px",paddingBottom:"13px",color:"#415094",marginLeft:"5px",marginRight:"5px"}}>
                                            <h6>Please send a check to Store Name, </h6>
                                            <h6>Store Street, Store Town, Store State / </h6>
                                            <h6>County, Store Postcode. </h6>
                                    </div>
                            </div>
                            <div className="row" style={{marginTop:"8px"}}>
                                <div className="col-md-12">
                                <input type="radio" id="f-option5" name="selector"/>&nbsp;&nbsp;&nbsp;
                                <span style={{fontSize:"12px"}}>PAYPAL</span> 
                                    
                                </div>
                               
                            </div>
                            <div className="row" style={{marginTop:"-7px",marginRight:"0px"}}>
                                    <div className="col-md-12" style={{marginTop:"20px",backgroundColor:"white",paddingLeft:"24px",paddingTop:"19px",paddingBottom:"13px",color:"#415094",marginLeft:"5px"}}>
                                            <h6>Please send a check to Store Name, </h6>
                                            <h6>Store Street, Store Town, Store State / </h6>
                                            <h6>County, Store Postcode. </h6>
                                    </div>
                            </div>
                            <div className="row" style={{marginTop:"19px"}}>
                                <div className="col-md-12">
                                <input type="checkbox" />&nbsp;&nbsp;&nbsp;
                                <span style={{fontSize:"16px"}}>I’ve read and accept the terms & </span> 
                                    <h6 style={{fontSize:"20px",color:"#2577FD"}}>conditions</h6>
                                </div>
                               
                            </div>
                            <div className="row" style={{marginTop:"32px"}}>
                                <div className="col-md-12" >
                                    <button style={{borderColor:"transparent",backgroundColor:"transparent"}}><h5 class="pcproceed" href="#" style={{width:"100%",height:"76px"}}>Proceed to Paypal</h5></button> 
                                </div>
                            </div>


                        </div>
                        <div className="col-md-1">

                        </div>
                </div>

            </div>
    )
}
export default Productcheckout