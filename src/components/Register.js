import React, { useState } from "react";
import {useDispatch} from 'react'


  const Register = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [Password, setpassword] = useState("");

    const RegisterHandle =()=>{
        console.table(name,email,Password)
    }
    
    return (
        <div>
             <div className="flex flex-column align-items-center">

              <h3>Register</h3>
            <label htmlFor=""> Name </label>
            <input type="text" placeholder='Name'  value={name} onChange={(e)=>setname(e.target.value)} />
            <label htmlFor=""> Email </label>
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)} />
            <label htmlFor=""> Password </label>
            <input type="Password" placeholder='Password' value={Password} onChange={(e)=>setpassword(e.target.value)} />
                 <button onClick={RegisterHandle}  className="mt-3">Register</button>
          </div>

          </div>


          
    )
}

export default Register