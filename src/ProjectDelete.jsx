import axios from "axios";



export function ProjectDelete (props) {

  const handleDeleteProject = () => {
    console.log("submitting delete");
    axios.delete(`http://localhost:3000/projects/${props.project.id}.json`).then((response) => {
      console.log("Deleted Project Confirm", response.data);
    });
    window.location.href = "/";
  };

  return (
    <div>
      <button onClick={handleDeleteProject} id="danger"> Cancel This Project</button>
    </div>
  );
}