
import { ProjectUpdate } from "./ProjectUpdate";
import { ProjectDelete } from "./ProjectDelete";
import { Modal } from './Modal';
import { useState } from "react";

const formatDate = (isoString) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${month}-${day}-${year}`;
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};



export function ProjectsShow(props) {
  const project = props.project;

  const [isProjectsShowVisible, setIsProjectsShowVisible] = useState(false);

  const handleShowProject = () => {
    console.log("handleShowProject", project);
    setIsProjectsShowVisible(true);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProjectsShowVisible(false);
  };
  
  
  if (props.user && project.owner.id === props.user.id) {
    
    return (
      <div>
        <button id="edit" onClick={handleShowProject}>Edit</button>
        <Modal show={isProjectsShowVisible} onClose={handleClose}>
          <div>
            <ProjectUpdate project={props.project} />
          </div>
          <br/>
          <br/>
          <div>
            <ProjectDelete project={props.project} />
          </div>
        </Modal>
      </div>
    );
  }
  else {
    return (
      <div>
      </div>
    )
  }
}