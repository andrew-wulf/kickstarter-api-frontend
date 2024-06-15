import './App.css';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

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
    else {
      let path = window.location.pathname; 
      if (path === "/user" || path === "/new-project") {
        window.location.href = "/";
      }
    }
  }
  useEffect(getUser, []);

  return (
    <>
      <BrowserRouter>
        <Header user={currentUser} getUser={getUser}/>
        <br/>
        <br/>
        <Content user={currentUser} getUser={getUser}/>
        <br/>
        <br/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
