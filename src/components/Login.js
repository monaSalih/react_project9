import React ,{useState} from "react";


const Login = () =>{
    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    const [Password, setpassword] = useState("");



   const handleLogin = ()=>{
    console.log(email,Password)
   }

    return (
        <div>
        <div ClassName="flex flex-column align-items-center">
         <h3>login system</h3>


       <label htmlFor=""> Email </label>
       <input type="email" placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)} />
       <label htmlFor=""> Password </label>
       <input type="Password" placeholder='Password' value={Password} onChange={(e)=>setpassword(e.target.value)} />
            <button onClick={handleLogin}  className="mt-3">Register</button>
     </div>

     </div>
    )
}

export default Login