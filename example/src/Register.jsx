import React,{useState} from "react";
import { Link } from "react-router-dom"
import {addUser1} from "./apiregister";
const initialnew={
    username:"",
    email:"",
    password:"",
    number:"",
    select:"",
    gender:"",
    checkbox:"",
    action:0
    }
function Register(){
    const[user1,setUser1]=useState(initialnew)
    const{name1,email,password,number,select,gender,checkbox1,action}=user1;

    const fetchvalue=(e)=>{
        setUser1({...user1, [e.target.name]:e.target.value})
    }

    const valueonSubmit=async()=>{
        await addUser1(user1)

    }

    return(
            <div className="row container-fluid">
                
                <div className="row" style={{marginTop:"0px"}}>
                    <div className="col-md-1">
                        
                    </div>

                    <div className="col-md-5" style={{backgroundColor:"#6E516C"}}>
                        
                            
                        
                        <h5 className="loginnewto" style={{marginLeft:"165px",fontSize:"24px",marginTop:"190px"}}> <b>Existing Customer</b></h5>
                        <h5 className="loginnewto" style={{marginLeft:"65px",marginTop:"20px"}}>There are advances being made in science and</h5>
                        <h5 className="loginnewto" style={{marginLeft:"48px",marginTop:"-8px"}}>technology everyday, and a good example of this is</h5>
                        <h5 className="loginnewto" style={{marginLeft:"252px",marginTop:"-8px"}}>the</h5>
                        <div className="row" style={{marginTop:"60px",marginBottom:"195px"}}>
                            <div className="col-md-12">
                                <Link href="#" class="logincreate" to="/login">Please Login</Link>
                            </div>
                        </div>
                       
                 </div>
                   
                    <div className="col-md-1"> 

                        
                    </div>
                    <div className="col-md-4">
                        <h3 style={{fontFamily:"serif",marginTop:"0px"}}><b>Welcome Back !</b></h3>
                        <h3 style={{fontFamily:"serif",marginTop:"-8px"}}><b>Please Register now</b></h3>

              <form action="" method="post">
                  <h5 style={{color:"#6C757D",marginLeft:"15px",marginTop:"80px"}}>username</h5 >
               
                   <input type="text" className="form-control " name="name1" value={name1} onChange={(e)=>{fetchvalue(e)}} id="" placeholder="Enter Your Name" style={{width:"100%",height:"36px",borderColor:"#2577FD",borderWidth:"1px"}} />

                   <h5 style={{color:"#6C757D",marginLeft:"15px",marginTop:"20px"}}>email</h5 >
               
                   <input type="text" className="form-control " name="email" value={email} onChange={(e)=>{fetchvalue(e)}} id="" placeholder="Enter Your Email" style={{width:"100%",height:"36px",borderColor:"#2577FD",borderWidth:"1px"}} />
                   
                   <h5 style={{color:"#6C757D",marginLeft:"15px",marginTop:"20px"}}>password</h5 >
               
                   <input type="text" className="form-control " name="password" value={password} onChange={(e)=>{fetchvalue(e)}} id="" placeholder="Enter Your password" style={{width:"100%",height:"36px",borderColor:"#2577FD",borderWidth:"1px"}} />

                   <h5 style={{color:"#6C757D",marginLeft:"15px",marginTop:"20px"}}>number</h5 >
               
                   <input type="text" className="form-control " name="number" value={number} onChange={(e)=>{fetchvalue(e)}} id="" placeholder="Enter Your Number" style={{width:"100%",height:"36px",borderColor:"#2577FD",borderWidth:"1px"}} />

                   <h5 style={{color:"#6C757D",marginLeft:"15px",marginTop:"20px"}}>select</h5 >

                  <select className="form-control " name="select" value={select}  style={{width:"100%",height:"36px",borderColor:"#2577FD",borderWidth:"1px"}} onChange={(e)=>{fetchvalue(e)}}>
                  <option>Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Saudi">Saudi</option>
                  </select>

                  <h5 style={{color:"#6C757D",marginLeft:"15px",marginTop:"20px"}}>gender</h5 >

                  Male &nbsp;&nbsp;<input type="radio" name="gender" value="male" onChange={(e)=>{fetchvalue(e)}}/> Female &nbsp;&nbsp;<input type="radio" name="gender" value="female" onChange={(e)=>{fetchvalue(e)}}/> <br />
               
                   <input type="checkbox" id="f-option" name="checkbox1" value={checkbox1} onChange={(e)=>{fetchvalue(e)}}></input>
                   <label style={{color:"#6C757D",marginLeft:"9px",marginTop:"20px"}}>Remember me</label><br />

                   <input type="hidden" id="f-option" name="action" value={action} onChange={(e)=>{fetchvalue(e)}}></input>

                   <button type="button" class="loginbutton"  onClick={()=>valueonSubmit()}>SEND</button>

                   <a href="" style={{textDecoration:"none"}}><h6 style={{marginLeft:"281px",color:"#777777"}}>Forget Password?</h6></a>    
             </form> 

              </div>
               <div className="col-md-1">

                    </div>
                </div>

            </div>
    )
}
export default Register