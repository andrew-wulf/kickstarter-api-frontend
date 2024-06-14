import { useState, useEffect } from 'react'
import axios from 'axios'
import { ProjectsIndex } from './ProjectsIndex'
import { Routes, Route } from "react-router-dom";
import { SignIn } from './SignIn';


export function Content() {


  const [projects, setProjects] = useState({})

  const projectsIndex = () => {
    axios.get('http://localhost:3000/projects.json')
    .then(response => {
      console.log(response);
      setProjects(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  useEffect(projectsIndex, [])




  return (
    <div className="content">
      <button>Sign In</button>
      <button>Sign Up</button>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>

      <Routes>
        <Route path="" element={<ProjectsIndex data={projects}/>} />
      </Routes>
    </div>

  )
}