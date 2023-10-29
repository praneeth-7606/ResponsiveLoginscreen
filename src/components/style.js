import styled from 'styled-components';
import { Button as MuiButton } from '@mui/material';
import {  TextField, Card } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';

export const MainContainer = styled.div`
  display: flex;
  background-color: rgba(234, 221, 221, 0.441);
  border: 25px solid white;
  border-radius: 2%;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    border: 10px solid white;
  }
  @media screen and (max-width: 480px) {
    border: 25px solid yellowgreen;
  }
`;

export const LeftContainer = styled.div`
  flex: 1;
  width: 55%;
  padding: 5%;
  @media screen and (max-width: 768px) {
    width: 95%;
    padding: 0;
  }
  @media screen  and (max-width: 1400px) {
    flex: 1;
  width:40%;
  padding: 8%;
  }
  @media screen  and (max-width: 480px) {
    width: 95% !important;
    padding: 0 !important;
  
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  width: 40%;
  padding: 4%;
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  display: flex;
  /* Center the content vertically */
  @media screen and (max-width: 768px) {
    width: 82%;
    padding: 5%;
    padding-left: 12%;
    order: 1;
  }
  @media screen and (max-width: 480px) {
    padding-right: 10% !important;
    width: 80% !important;
  }
  @media screen and (max-width: 1400px) {
    flex: 1;
    width: 60%; 
    padding: 1%;
    padding-top:8%;
  }
`;
export const CardContainer = styled(Card)`
  height:fit-content;
  width:100%;
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  padding-bottom:18% ;
  background-color: rgb(0, 34, 255);
  @media screen and (max-width: 480px) {
    padding-bottom: 10% !important;
    width: 95% !important;
    
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 10%;
    width: 75%;
  }
  @media screen and (max-width: 1400px) {

    width: 90%; /* Make the card full width */
    padding: 10px; /* Add padding for better spacing */
    background-color: rgb(0, 34, 255);
  }
`;

export const Image = styled.img`
    width: 700px;
    height: 500px;
  @media screen and (max-width: 768px) {
    width: 95%;
    height: auto;
    padding-top: 5%;
    margin: 0 auto;
  }
  @media screen and (max-width: 1400px) {
    width: 350px;
    height:400px;
    
  }
  @media screen and (max-width: 480px) {
    max-width: 100%;
    height: auto;
  }
`;



export const EmailField = styled(TextField)`
justify-content: center;
  width: 70%;
  margin-bottom: 10px;
  font-size: 14px;
  padding: 5px;
  @media screen and (max-width: 480px) {
    width: 100% !important;
    margin-bottom: 10px !important;
    font-size: 10px !important;
    padding: 10px !important;
    height: 70%;
  }
  @media screen and (max-width: 768px) {
    width: 100% 
   
  }
  @media screen and (max-width: 1400px) {
    width: 100%;
    margin-bottom: 10px; /* Add space between input fields */
    font-size: 14px;
    padding: 5px;
   
  }

`;

export const PasswordField = styled(TextField)`
  width: 70%;
  margin-bottom: 10px;
  /* align-items: center; */
  font-size: 14px;
  padding: 5px;
  @media screen and (max-width: 480px) {
    width: 100% !important;
    margin-bottom: 10px !important;
    font-size: 10px !important;
    padding: 10px !important;
    height: 70%;
  }
  @media screen and (max-width: 768px) {
    width: 100% 
   
  }
  @media screen and (max-width: 1400px) {
    width: 100%;
    margin-bottom: 10px; /* Add space between input fields */
    font-size: 14px;
    padding: 5px;
   
  }

`;
export const CheckBox = styled.input`
  margin-right: 2px;
  padding-right: 40px;

`;

export const Link = styled.a`
  text-decoration: none;
  align-items: left;
`;
export const LoginButton = styled(MuiButton)`
  && {
    width: 60%;
    font-size: 15px;
    padding: 2px;
    &:hover {
    background-color: red;
  }
  }
`;
 export const MarginContainer = styled.div`
  margin-bottom: 20px;
`;
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;



export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px; // Set font size
  label {
    margin-right: 5px; // Add right margin to separate checkbox and text
  }
`;

export const CheckboxLabel = styled.label`
  font-size: 10px;
  @media screen and (max-width: 1400px) {
    font-size: 9px;
  }
`;

export const CheckboxLink = styled(Link)`
  color: orange;
  font-size: 10px;
  padding-left: 40px; 
  @media screen and (max-width: 1400px) {
    font-size: 9px;
    padding-right: 10px;
  }
`;

export const RecaptchaContainer = styled.div`
  margin-bottom: 20px;
`;

