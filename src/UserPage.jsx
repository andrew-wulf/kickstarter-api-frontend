import './UserPage.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { UserDonations } from './UserDonations';
import { UserProjects } from './UserProjects';

export function UserPage(props) {

  const refreshUser = () => {
    props.getUser();
  }


  if (props.user !== "") {

    let user = props.user;

    return (
      <div className='user-page'>
        <div className='user-header'>

          <div className='img-container' id="user-avi">
            <img src={user.image}></img>
          </div>

          <h1>{user.first}'s Page</h1>
        </div>
  
        <div className="grid-container">
  
          <div className='projects'>
            <h2>My Projects</h2>
            <button onClick={() => {window.location.href="/new-project"}}>Start a Project</button>
  
            <UserProjects user={user}/>
          </div>
        
          <div className='user'>
            <h2>Account Details</h2>
            <h3>first name: {user.first}</h3>
            <h3>last name: {user.last}</h3>
            <h3>email: {user.email}</h3>
          </div>
  
        </div>
  
  
  
        <div className='rewards'>
          <h2>My rewards</h2>
          <h3>Example reward</h3>
          <p>Filomena Nienow's Project for the Accessibility of Design</p>
          <h3>Example reward</h3>
          <p>Filomena Nienow's Project for the Accessibility of Design</p>
        </div>
  
  
        <div className='contributions'>
          <UserDonations user={user}/>
        </div>
  
      </div>
    )
  }
  else {
    return (
      <div></div>
    )
  }
}