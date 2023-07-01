import React,{useState} from "react";
import {addUser1} from "./api";
const initialnew={
    discription:"",
    name:"",
    email:"",
    subject:""

}
function Contact(){
    const[user1,setUser1]=useState(initialnew)
    const{discription,name,email,subject}=user1;

    const fetchvalue=(e)=>{
        setUser1({...user1, [e.target.name]:e.target.value})
        console.log(user1)
    }

    const valueonSubmit=async()=>{
        await addUser1(user1)
        console.log(addUser1)
    }
    return(
        <div className="row container-fluid">
            <div className="col-md-12">

            
               <div className="row">
                <div className="col-md-12">
                    <img style={{width:"100%",height:"300px",marginLeft: "13px"}} src="cardimage.jpg" alt="" />
                </div>

              </div> 
              <div className="row">
                    <div className="col-md-5">

                    </div>
                    <div className="col-md-4">
                        <p style={{ marginTop: "-187px", marginLeft: "px", fontSize: "50px", fontFamily: "serif" }}><b>Contact Us</b> </p>
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
            </div> &nbsp;
              <div className="row" style={{marginTop:"100px"}}>
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-10">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15717.888076977953!2d76.2888361!3d9.977812!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d4e29437e1b%3A0x281249e80d0aad77!2sKSRTC%20BUS%20STATION%20ERNAKULAM!5e0!3m2!1sen!2sin!4v1681544535254!5m2!1sen!2sin"  height="400" style={{border:"0px",width:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-md-1">

                    </div>
              </div>
             
             <div className="row" style={{marginTop:"60px"}}>
                <div className="col-md-1">
                
                </div>
                <div className="col-md-10">
                    <h3> <b style={{fontFamily:"serif"}}>Get In Touch</b> </h3>
                </div>
                <div className="col-md-1">
                    
                </div>
            </div>  
             <div className="row">
                <div className="col-md-1">

                </div>
              <div className="col-md-7" style={{marginTop:"10px"}}>



                <form action="" method="post">
                    <div className="row">
                        <div className="col-md-12">
                            <textarea className="form-control" name="discription" value={discription} onChange={(e)=>{fetchvalue(e)}} id="" rows="7"></textarea>
                         </div>
                    </div>
                    <div className="row" style={{marginTop:"35px"}}>
                        <div className="col-md-6">
                            <input type="text" className="form-control " name="name" value={name} onChange={(e)=>{fetchvalue(e)}} id="" placeholder="Enter Your Name" style={{borderRadius:"0px"}} />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" name="email" value={email} onChange={(e)=>{fetchvalue(e)}} id=""  placeholder="Enter Email" style={{borderRadius:"0px"}} />
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"35px"}}>
                        <div className="col-md-12">
                             <input type="text" className="form-control" name="subject" value={subject} onChange={(e)=>{fetchvalue(e)}} id=""  placeholder="Enter Subject" style={{borderRadius:"0px"}} />
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"35px"}}>
                        <div className="col-md-12">

                            <button type="button" class="btn btn-primary send" style={{borderRadius:"0px",borderColor:"#fdcb9e",width:"100px",height:"45px"}} onClick={()=>valueonSubmit()}>SEND</button>
                            
                        </div>
                    </div>
                 </form>  



                </div>
                <div className="col-md-1">

                </div>
                 <div className="col-md-2">
                    <div className="row">
                        <div className="col-md-12">
                             <div className="display">
                                 <div> <i className='fa fa-home homeicon1'></i></div>&nbsp;&nbsp;&nbsp;&nbsp;
                                 <div>
                                     <h5>Buttonwood, California.</h5>
                                     <h5 className="homeicon1">Rosemad, CA 91770</h5>
                                 </div>
                             </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"35px"}}>
                        <div className="col-md-12" >
                            <div className="display">
                            &nbsp; <div> <i className='fa fa-tablet homeicon1'></i></div>&nbsp;&nbsp;&nbsp;&nbsp;
                                 <div>
                                     <h5>+1 253 565 2365</h5>
                                     <h5 className="homeicon1">Mon to Fri 9am to 6pm</h5>
                                 </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"35px"}}>
                        <div className="col-md-12">
                            <div className="display">
                            &nbsp;  <div> <i className='fa fa-envelope-o homeicon1'></i></div>&nbsp;&nbsp;&nbsp;&nbsp;
                                 <div>
                                     <h5>support@colorlib.com</h5>
                                     <h5 className="homeicon1">Send us your query</h5>
                                     <h5 className="homeicon1">any time</h5>

                                 </div>
                             </div>
                        </div>
                    </div>
                   
                     
                </div> 
                <div className="col-md-1">

                </div>
            </div> 
        </div>
    )
}
export default Contact