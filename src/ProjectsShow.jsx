export function ProjectsShow(props) {
  return (
    <div>
      <h1>Project information</h1>
      
      <p>Title: {props.project.title}</p>
      <p>Description: {props.project.description}</p>
      <p>Goal amount: {props.project.goal_amount}</p>
      <p>Start date: {props.project.start_date}</p>
      <p>End date: {props.project.end_date}</p>
    </div>
  );
}