import React from "react";
import {useState} from "react"

function Function1(){
    const[counter,setCounter]=useState(0)
    return(
         <div>
            <p>{counter}</p>
                    <button onClick={()=>setCounter(counter+1)}>click</button>
                    
         </div>
    )
}
export default Function1