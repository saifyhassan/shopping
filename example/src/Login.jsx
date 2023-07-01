import React,{useState} from "react";
import { Link } from "react-router-dom"
import {addUser2} from "./apiregister";
const initialnew={
    username:"",
    password:""
    }
function Login(){

    const[user1,setUser1]=useState(initialnew)
    const{username,password}=user1;

    const fetchvalue=(e)=>{
        setUser1({...user1, [e.target.name]:e.target.value})
    }

    const valueonSubmit=async()=>{
        let res=await addUser2(user1)
        // console.log(res.data)
            if(res.data!=""){
                alert("success")
            }
            else{
                alert("Invalid")
            }
        
    }
    
   return(
            <div className="row container-fluid">
                
                <div className="row" style={{marginTop:"20px"}}>
                    <div className="col-md-1">
                        
                    </div>
                    <div className="col-md-5" style={{backgroundColor:"#6E516C"}}>
                        
                            <h5 className="loginnewto" style={{marginLeft:"165px",fontSize:"24px",marginTop:"190px"}}> <b> New To Our Shop</b></h5>
                                <h5 className="loginnewto" style={{marginLeft:"65px",marginTop:"20px"}}>There are advances being made in science and</h5>
                                <h5 className="loginnewto" style={{marginLeft:"48px",marginTop:"-8px"}}>technology everyday, and a good example of this is</h5>
                                <h5 className="loginnewto" style={{marginLeft:"252px",marginTop:"-8px"}}>the</h5>
                                <div className="row" style={{marginTop:"60px",marginBottom:"195px"}}>
                                    <div className="col-md-12">
                                        <Link href="#" class="logincreate" to="/register">Create an Account</Link>
                                    </div>
                                </div>
                    </div>
                    <div className="col-md-1"> 

                    </div>
                    <div className="col-md-4">
                        <h3 style={{fontFamily:"serif",marginTop:"0px"}}><b>Welcome Back !</b></h3>
                        <h3 style={{fontFamily:"serif",marginTop:"-8px"}}><b>Please Sign in now</b></h3>
                        
                      <form action="" method="post">
                  
                           <h5 style={{color:"#6C757D",marginLeft:"15px",marginTop:"80px"}}>username</h5 >
                        
                            <input type="text" className="form-control " name="username" value={username} onChange={(e)=>{fetchvalue(e)}} id="" placeholder="Enter Your Name" style={{width:"100%",height:"36px",borderColor:"#2577FD",borderWidth:"1px"}} />
                            

                            <h5 style={{color:"#6C757D",marginLeft:"15px",marginTop:"20px"}}>password</h5 >
                        
                            <input type="text" className="form-control " name="password" value={password} onChange={(e)=>{fetchvalue(e)}} id="" placeholder="Enter Your password" style={{width:"100%",height:"36px",borderColor:"#2577FD",borderWidth:"1px"}} />
                        
                            <input type="checkbox" id="f-option" name="selector"></input>
                            <label style={{color:"#6C757D",marginLeft:"9px",marginTop:"20px"}}>Remember me</label><br />

                            <button type="button" class="loginbutton"  onClick={()=>valueonSubmit()}>Log In</button>

                            <a href="" style={{textDecoration:"none"}}><h6 style={{marginLeft:"281px",color:"#777777"}}>Forget Password?</h6></a>    
                      </form> 
                       
                    </div>
                    <div className="col-md-1">

                    </div>
                </div>

            </div>
    )
}
export default Login
