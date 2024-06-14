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
      <p>Render within the ProjectShow Modal</p>
      <button onClick={handleDeleteProject}> Delete This Project</button>
    </div>
  );
}