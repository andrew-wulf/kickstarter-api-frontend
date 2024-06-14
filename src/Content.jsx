import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProjectsIndex } from './ProjectsIndex';
import { ProjectsShow } from './ProjectsShow';
import { Modal } from './Modal';

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
    })
  }
  
  const handleShowProject = (project) => {
    console.log("handleShowProject", project);
    setIsProjectsShowVisible(true);
    setCurrentProject(project);
  }

  const handleClose = () => {
    console.log("handleClose");
    setIsProjectsShowVisible(false);
  };
  
  useEffect(projectsIndex, []);




  return (
    <div className="content">
      <ProjectsIndex data={projects} onShowProject={handleShowProject} />
      <Modal show={isProjectsShowVisible} onClose={handleClose}>
        <ProjectsShow project={currentProject} />
      </Modal>
    </div>
  );
}