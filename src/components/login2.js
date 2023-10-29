import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { TextField, InputAdornment, Button, Card } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import styled from "styled-components";
import image1 from "./iconimage.png";

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 1rem;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex: 0;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding-top: 1rem;
    flex: 1;
  }
`;

const LoginForm = styled(Card)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
`;

const FormTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 1rem;
`;

const StyledButton = styled(Button)
`

  width: 100%;
  margin-top: 1rem;
`;

function Login2() {
  const [data, setData] = useState({ Email: "", password: "" });
  const { Email, password } = data;
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, Email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/mainmenu");
      })
      .catch((error) => {
        alert("Please enter a valid email and password");
      });
  };

  const handleRecaptchaChange = () => {
    setVerified(true);
  };

  return (
    <MainContainer>
      <LeftContainer>
        <Image src={image1} alt="myimage" />
      </LeftContainer>
      <RightContainer>
        <LoginForm variant="outlined">
          <FormTitle>Welcome To Login Page</FormTitle>
          <form onSubmit={submitHandler}>
            <StyledTextField
              type="email"
              name="Email"
              label="Email"
              placeholder="someone@gmail.com"
              onChange={changeHandler}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <StyledTextField
              type="password"
              name="password"
              label="Password"
              placeholder="**********"
              onChange={changeHandler}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyIcon />
                  </InputAdornment>
                ),
              }}
            />
            <ReCAPTCHA
              sitekey="6Ldz93onAAAAAKwU13yakOaBPCdv1giMk4Nz_JXr"
              data-scale="0.4"
              onChange={handleRecaptchaChange}
            />
            <StyledButton
              type="submit"
              onClick={submitHandler}
              variant="contained"
              disabled={!verified}
            >
              Login
            </StyledButton>
          </form>
        </LoginForm>
      </RightContainer>
    </MainContainer>
  );
}

export default Login2;
