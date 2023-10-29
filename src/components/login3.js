import React, { useState } from 'react';
// import styled from 'styled-components';
import {MainContainer,Link,CheckBox,CheckboxLabel,RecaptchaContainer,CheckboxLink,CheckboxContainer,PasswordField,EmailField,CardContainer,Image,RightContainer,LeftContainer,LoginButton,MarginContainer,  FlexContainer} from "./style"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import image1 from './login_shot.gif';

import { Button } from '@mui/material';
import app from './firebase';
import { InputAdornment,  } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';

function Login3 ()  {
  const [data, setdata] = useState({ Email: '', password: '' });
  const { Email, password } = data;
  const [verified, setverified] = useState(false);
  const navigate = useNavigate();

  const changehandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const submithandler = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, Email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log('Your login is successful');
        navigate('/mainmenu');
      })
      .catch((error) => {
        alert('Please enter a valid email and password');
      });
  };

  const handleChange = () => {
    setverified(true);
  };

  return (
    <MainContainer>
      <LeftContainer>
        <Image src={image1} alt="myimage" />
      </LeftContainer>
      <RightContainer>
        <CardContainer variant="outlined">
          {/* <center> */}
          <h1><strong>Welcome To Login Page</strong></h1>
          <EmailField
            type="Email"
            name="Email"
            label="Email"
            placeholder="someone@gmail.com"
            onChange={changehandler}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
           <MarginContainer></MarginContainer>
          <PasswordField
            type="password"
            name="password"
            label="Password"
            placeholder="**********"
            onChange={changehandler}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon />
                </InputAdornment>
              ),
            }}
          />
          {/* <center>
              <div style={{ marginBottom: '20px' }}></div>
          <div style={{display:'flex'}}>
          <div style={{paddingLeft:'14%'}}>
          <CheckBoxContainer style={{fontSize:"12px"}}>
            <CheckBox type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label><br></br>
          </CheckBoxContainer>
          <CheckBoxContainer style={{fontSize:"12px"}} >
            <CheckBox type="checkbox" id="staySignedIn" />
            <label htmlFor="staySignedIn">Agree to <Link href="/tc">Terms & condition</Link></label>
          </CheckBoxContainer>
          </div>
          <Link href="/tc" style={{paddingLeft:"17%",color:"orange",fontSize:"13px"}}>Change Password</Link>
          </div>
          <div style={{ marginBottom: '20px' }}></div>
          <ReCAPTCHA sitekey="6Lf3utgoAAAAAMUZYOLjGCnPfMJSq2ctC90j96sg" data-scale="0.4" onChange={handleChange} />
          <div style={{ marginBottom: '20px' }}></div>
          <CustomButton type="submit" onClick={submithandler} className="btnt" variant="contained" disabled={!verified}>Login</CustomButton>
          </center> */}
        {/* </CardContainer>   */}
        <center>
        <MarginContainer></MarginContainer>
  <FlexContainer>
    <CheckboxContainer>
      <CheckBox type="checkbox" id="rememberMe" />
      <CheckboxLabel htmlFor="rememberMe">Remember Me</CheckboxLabel><br></br>
    </CheckboxContainer>
    <CheckboxContainer>
      <CheckBox type="checkbox" id="terms and conditions" />
      <CheckboxLabel htmlFor="staySignedIn">Agree to <Link href="/tc">Terms & condition</Link></CheckboxLabel>
    </CheckboxContainer>
    <CheckboxLink href="/tc">Change Password</CheckboxLink>
  </FlexContainer>
  <MarginContainer></MarginContainer>
  <RecaptchaContainer>
    <ReCAPTCHA sitekey="6Lf3utgoAAAAAMUZYOLjGCnPfMJSq2ctC90j96sg" data-scale="0.4" onChange={handleChange} />
  </RecaptchaContainer>
  <MarginContainer></MarginContainer>
  <LoginButton type="submit" onClick={submithandler} className="btnt" variant="contained" disabled={!verified}>Login</LoginButton>
  <p>Don't have account?<a  style={{textDecoration:"none",color:"orange"}}href="/signup"><span>Register Here</span></a> </p>
  </center> 
</CardContainer>
      </RightContainer>
    </MainContainer>
  );
};

export default Login3;
