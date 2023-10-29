
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha";
import image1 from "./login_shot.gif";


import { Button } from '@mui/material';
import app from './firebase';


import React, { useState } from "react";
import { Input } from '@mui/material';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import CardHeader from "@mui/material/CardHeader";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
 import FormControl from '@mui/material/FormControl';



function Login() {
    const[data,setdata]=useState({Email:"",password:""})
    const{Email,password}=data
    const [verified,setverified]=useState(false)
    // const
    const navigate=useNavigate()
    const changehandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submithandler=  (e)=>{
        e.preventDefault()
        const auth = getAuth();
    signInWithEmailAndPassword(auth, Email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    console.log("your login is sucessfull")
    // alert("signin  is successfull")
    navigate("/mainmenu")
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    alert("please enter the valid email and password")
    
  });
    }
    const handleChange=()=>{
        setverified(true)
    }
    const signin=()=>{
     
    }
   
return (
    <div className='main'>
     
      <div className='left'>
            {/* <img src={image} alt="myimage" style={{width:"300px",height:"100px", padding:"20px" ,marginTop:"-10%"}} />  */}
           <center>
            <img src={image1} alt="myimage" className="image" />   
            </center>
           
      </div>
      <div className='right'>
        {/* <div className="rightin"> */}
      <Card variant="outlined"  className="card"> 
      {/* <img src={image2} alt="myimage" style={{width:"500px",height:"550px"  }} /> */}
      <center>
        <h1><strong>Welcome To Login Page</strong></h1>
      {/* <CardHeader title="Welcome To Login Page" /> */}
      
      <br></br>
      <FormControl onSubmit={submithandler}>

        <TextField type="Email"name="Email" id="outlined-basic" label="Email" placeholder="someone@gmail.com" 
        onChange={changehandler} variant="outlined" InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <EmailIcon/>
        </InputAdornment>
      ),}} /><br></br>
      
      
    
        <br></br>
        
        
      
        <TextField type="password" id="outlined-basic"  size ="large" name="password"  label="Password"
         placeholder="**********"  onChange={changehandler} variant="outlined"
         InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <KeyIcon/>
            </InputAdornment>
          ),}} /><br></br>
     
        <a href="/forgot" style={{textDecoration:"none",paddingRight:"60%"}}> Forgotpassword</a><br></br>
        <ReCAPTCHA  sitekey="6Lf3utgoAAAAAMUZYOLjGCnPfMJSq2ctC90j96sg" data-scale="0.4" onChange={handleChange} />

        {/* <button type="submit" className='btnt'   disabled={!verified}>submit</button> */}
        <br></br>
        <Button type="submit" onClick={submithandler} className="btnt" variant="contained" disabled={!verified}>Login</Button>
        </FormControl>
        </center>
    {/* </form> */}
    </Card>
    {/* </div> */}
    
    </div>
      
      </div> 
  )

}
export default Login;