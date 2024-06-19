import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';

export function Header(props) {

  

  const signOut = () => {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = window.location.href;
  }

  const handleChange = (e) => {
    props.setSearchVal(e.target.value);
    if (e.target.value.length > 0) {
      props.setSearchHeight('40%')
    }
    else {
      props.setSearchHeight('0%')
    }
  }

  if (props.user) {
    let msg = `Welcome, ${props.user.first}!`;

    if (props.user.admin === true) {
      msg = msg + ' (admin)'
    }

    let img_link = "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";
    if (props.user.image !== null) {
      img_link = props.user.image;
    }

    return (
      <div className="header">
        <h1 onClick={() => {window.location.href = "/"}}>Kickstarter</h1>
        <input id="searchBar" type="search" placeholder="Search projects, creators and categories" value={props.searchVal} onChange={handleChange}/>

        <div className="flexbox">
          <div className="img-container"> <img src={img_link} /> </div>
          
          <h2 onClick={() => {window.location.href = "/user"}}>{msg}</h2>
        </div>
        
        <h3 onClick={signOut}>Sign Out</h3>
      </div>
    )
  }
  
  else {
    return (
    <div className="header">
      <h1 onClick={() => {window.location.href = "/"}}>Kickstarter</h1>
      <input id="searchBar" type="search" placeholder="Search projects, creators and categories" value={props.searchVal} onChange={handleChange}></input>
      <h3 className="signInLink" onClick={() => {window.location.href = "/signin"}}>Sign In</h3>
      <h3 onClick={() => {window.location.href = "/signup"}}>Sign Up</h3>
    </div>
    )
  }
}




// bg images:
// "https://media.istockphoto.com/id/537475374/photo/background-digital-collage-or-typography-design-wallpaper-texture.jpg?s=2048x2048&w=is&k=20&c=C5KYHazOpgtOchOHqF0ZclFFe5O6tWY4EbdNmTu4Rd0="


// "https://images.unsplash.com/photo-1487088678257-3a541e6e3922?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0JTIwZnVua3l8ZW58MHx8MHx8fDA%3D"

// "https://images.unsplash.com/photo-1517707711963-adf9078bdf01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGFydCUyMGZ1bmt5fGVufDB8fDB8fHww"

// "https://images.unsplash.com/photo-1615800098746-73af8261e3df?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"