// import logo from './logo.svg';
import './App.css';
import Login3 from './components/login3';
import Mainmenu from './components/mainmenu';
import Forgot from './components/forgot';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login2 from './components/login2';
import Basecode from './components/basecode';
import Tc from './components/tc';
import Signup from './components/signup';

function App() {
  return (
    // <div>
    //   <Basecode/>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login3 />} />
      <Route path="/mainmenu" element={<Mainmenu />} />
      <Route path="/forgot" element={<Forgot/>} />
      <Route path="/tc" element={<Tc/>} />
      <Route path="/signup" element={<Signup/>} />
      {/* <Route path="/Home" element={<Home/>} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
