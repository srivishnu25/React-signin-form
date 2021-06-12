import React, { Component, useState } from 'react';
import './userDetails.css';

const UserDetails = () => {
       
   
       const data = (JSON.parse(localStorage.getItem('UserDetails')))
       console.log(data.user)
       
   
    return (<>
    
     <div className="userDetails">
        <h2>User Details</h2>
        <h4>Name : {data.user.name}</h4>
        <h4>Email : {data.user.email}</h4>
        <h4>Age : {data.user.age}</h4>
        <h4>Website : {data.user.website}</h4>
        <p>Introduction : {data.user.introduction}</p>
        
        
        
     </div>
    
    </>  );
}
 
export default UserDetails;