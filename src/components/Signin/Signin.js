import React, { Component ,useEffect, useState } from 'react';
import {BrowserRouter as Router,Switch,Link,Route,Redirect, useParams} from "react-router-dom";
import './Signin.css';

const Signin = () => {
    const [userName,updateUserName]=useState('')
    const [password,updatePassword]=useState('')
    const [redirect,setRedirect]=useState(false)
    
    const userDetails={
        user:"ABCD",
        password:"SSSS"
    }

    const userclick=(e)=>{
       e.target.name=='user'&& updateUserName(e.target.value)
       e.target.name=='password'&& updatePassword(e.target.value)
    }
    const onSubmit=(e)=>{
      
       userDetails.user === userName && userDetails.password === password && setRedirect(true)
      
       e.preventDefault();
    }

    return (<>
     {redirect && <Redirect to="/home"/>}
    <form onSubmit={onSubmit}>
        <legend>Sign in</legend>
        <div>
    <label>User Name</label>
    <input type="text" name='user' placeholder="Enter Username" value={userName} id="input1" onChange={userclick}/><br/>
    </div>
    <div>
    <label>Password</label>
    <input type="password" name="password" placeholder="Enter Password" value={password} id="input2" onChange={userclick}/>
    </div>
    <input type="submit"/>
    </form>
    </>  );
}
 
export default Signin;