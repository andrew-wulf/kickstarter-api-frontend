

export function ProjectsShow(props) {
  return (
    <div>
      <h1>Project information</h1>
      <p>Title: {props.project.title}</p>
      <p>Description: {props.project.description}</p>
    </div>
  );
}