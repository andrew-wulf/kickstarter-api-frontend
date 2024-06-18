import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProjectsIndex } from './ProjectsIndex';
import { Routes, Route } from "react-router-dom";
import { SignIn } from './SignIn';
import {SignUp} from './SignUp';
import {Donate} from './Donate'
import { UserPage } from './UserPage';
import { ProjectsNew } from './ProjectsNew';
import { Search } from './Search';


export function Content(props) {

  
  const [projects, setProjects] = useState({});
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
      });
  };

  const signup = (params) => {
    axios.post('http://localhost:3000/users.json', params)
      .then(response => {
        console.log(response);
        login(params);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleDonate = (proj) => {
    window.location.href = `projects/${proj.id}`;
  };

  const handleProjectCreate = (params) => {
    let title = params.get('title');
    let date = params.get('end_date');
    let goal = params.get('goal_amount');
    console.log('title: ', title, 'date: ', date, 'goal: ', goal)
  };



  return (
    <div className="content">
      
      <div className='search-overlay' style={{'height': props.searchHeight}}>
        <Search val={props.searchVal} projects={projects}/>
      </div>

      <div onClick={() => {props.setSearchHeight('0%')}}>
        <Routes>
          <Route path="/signin" element={
            <SignIn login={login}/>}/>
          
          <Route path="/signup" element={<SignUp signup={signup}/>} />
    
          <Route path="" element={
            <div className="home">
              <ProjectsIndex data={projects} donate={handleDonate} />
            </div>
          }/>

          <Route path="/projects/:id" element={<Donate project={currentProject} setProject={setCurrentProject} user={props.user}/>} />
          <Route path="/user" element={<UserPage user={props.user} getUser={props.getUser}/>} />
          <Route path="/new-project" element={<ProjectsNew user={props.user} createProject={handleProjectCreate}/>} />

        </Routes>
      </div>

    </div>
  );
}