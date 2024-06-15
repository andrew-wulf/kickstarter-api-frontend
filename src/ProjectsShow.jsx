
import { ProjectUpdate } from "./ProjectUpdate";
import { ProjectDelete } from "./ProjectDelete";

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
  const { project } = props;

  return (
    <div>
      <h1>Project information</h1>
      
      <p>{project.id}</p>  //this is here solely for testing purposes
      <p>Title: {project.title}</p>
      <p>Description: {project.description}</p>
      <p>Goal amount: {formatCurrency(project.goal_amount)}</p>
      <p>Start date: {formatDate(project.start_date)}</p>
      <p>End date: {formatDate(project.end_date)}</p>
      <br/>
      <br/>
      <div>
        <ProjectUpdate project={props.project} />
      </div>
      <br/>
      <br/>
      <div>
        <ProjectDelete project={props.project} />
      </div>
    </div>
  );
}