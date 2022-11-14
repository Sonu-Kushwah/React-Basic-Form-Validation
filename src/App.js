import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();
  const [password, setPasswod] = useState();
  const [userErr, setUserErr] = useState();
  const [passErr, setPasswodErr] = useState();

  const loginHandle = (e) => {
    if(user.length<3 || password.length<3){
      alert("type correct value");
    }else{
      alert("all is good");
    }
    e.preventDefault();
  };
  const userHandle=(e)=>{
   let item=e.target.value;
   if(item.length<3){
     setUserErr(true);
   }else
    setUserErr(false);
    setUser(item);
  }
  const passHandle=(e)=>{
   let item=e.target.value;
   if(item.length<3){
    setPasswodErr(true);
   }else{
    setPasswodErr(false);
    setPasswod(item);
   }
  }
  return (
    <>
      <h2>hide and show</h2>
      <form onSubmit={loginHandle}>
        <input type="text" placeholder="Enter Your Name" onChange={userHandle}/>
        <br />
        {userErr ? <span>User Not Valid</span>:""}<br/>
        <input type="password" placeholder="Enter Your Password" onChange={passHandle}/>
        <br />
        {passErr? <span>Passw Not Valid</span> :" "}<br/>
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default App;
