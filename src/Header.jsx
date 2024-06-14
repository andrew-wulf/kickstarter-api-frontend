import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';

export function Header() {

  const [currentUser, setCurrentUser] = useState("");

  const getUser = () => {
    if (localStorage.jwt) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.jwt
      axios.get('http://localhost:3000/users/current.json')
      .then(response => {
        console.log(response);
        setCurrentUser(response.data);
      })
      .catch(error => {
        console.log(error);
      })
    }

  }
  useEffect(getUser, [])

  const signOut = () => {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = window.location.href;
  }

  if (currentUser) {
    return (
      <div className="header">
        <h1>Kickstarter</h1>
        <h2>Welcome, {currentUser.first}!</h2>
        <button onClick={signOut}>Sign Out</button>
        <button onClick={() => {window.location.href = "/"}}>Home</button>
      </div>
    )
  }

  else {
    return (
    <div className="header">
      <h1>Kickstarter</h1>
      <button onClick={() => {window.location.href = "/signin"}}>Sign In</button>
      <button onClick={() => {window.location.href = "/signup"}}>Sign Up</button>
      <button onClick={() => {window.location.href = "/"}}>Home</button>
    </div>
  );
}