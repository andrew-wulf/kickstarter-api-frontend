import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProjectsIndex } from './ProjectsIndex';
import { ProjectsShow } from './ProjectsShow';
import { ProjectUpdate } from './ProjectUpdate';
import { Modal } from './Modal';
import { Routes, Route } from "react-router-dom";
import { SignIn } from './SignIn';
import {SignUp} from './SignUp';


export function Content() {

  
  const [projects, setProjects] = useState({});
  const [isProjectsShowVisible, setIsProjectsShowVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState({});


  const projectsIndex = () => {
    axios.get('http://localhost:3000/projects.json')
      .then(response => {
        console.log(response);
        setProjects(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  const handleShowProject = (project) => {
    console.log("handleShowProject", project);
    setIsProjectsShowVisible(true);
    setCurrentProject(project);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProjectsShowVisible(false);
  };
  
  useEffect(projectsIndex, []);

  const login = (params) => {
    axios.post('http://localhost:3000/sessions.json', params)
    .then(response => {
      console.log(response);
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
      localStorage.setItem("jwt", response.data.jwt);
      window.location.href = "/";
    })
    .catch(error => {
      console.log(error);
    })
  }

  const signup = (params) => {
    axios.post('http://localhost:3000/users.json', params)
    .then(response => {
      console.log(response);
      login(params);
    })
    .catch(error => {
      console.log(error);
    })
  }


  return (
    <div className="content">
      <Routes>
        <Route path="/signin" element={
        <SignIn login={login}/>}/>
        
        <Route path="/signup" element={<SignUp signup={signup}/>} />
   
        <Route path="" element={
          <div className="home">
            <ProjectsIndex data={projects} onShowProject={handleShowProject} />
            <Modal show={isProjectsShowVisible} onClose={handleClose}>
              <ProjectsShow project={currentProject} />
            </Modal>
          </div>
        }/>


      </Routes>
    </div>
  );
}