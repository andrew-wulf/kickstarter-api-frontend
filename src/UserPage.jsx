import './UserPage.css';
import { useState, useEffect } from 'react';
import axios from 'axios'

export function UserPage(props) {

  const refreshUser = () => {
    props.getUser();
  }


  if (props.user !== "") {

    let user = props.user;

    return (
      <div>
        <div className='user-header'>
          <img src="https://images.unsplash.com/photo-1582845512747-e42001c95638?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
          <h1>{user.first}'s Page</h1>
        </div>
  
        <div className="grid-container">
  
          <div className='projects'>
            <h2>My Projects</h2>
            <button onClick={() => {window.location.href="/new-project"}}>Start a Project</button>
  
  
            <p>Example Project for the Institution of Examples</p>
            <p>Example Project for the Institution of Examples</p>
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
          <h2>Recent Contributions</h2>
  
          <h3>Filomena Nienow's Project for the Accessibility of Design</h3>
          <h3>$3,000</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum recusandae rerum nulla delectus voluptates, distinctio nihil magnam sint natus laudantium explicabo, quia quasi! Odio sapiente iste ipsam fugit provident ex!</p>
  
          <h3>Filomena Nienow's Project for the Accessibility of Design</h3>
          <h3>$3,000</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum recusandae rerum nulla delectus voluptates, distinctio nihil magnam sint natus laudantium explicabo, quia quasi! Odio sapiente iste ipsam fugit provident ex!</p>
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