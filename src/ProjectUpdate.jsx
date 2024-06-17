import axios from "axios";

export function ProjectUpdate (props) {

  const handleUpdateProject = (event) => {
    event.preventDefault();
    console.log("handling update");
    const params = new FormData(event.target);
    axios.patch(`http://localhost:3000/projects/${props.project.id}.json`, params).then((response) => {
      console.log(response.data);
    });
    window.location.href = window.location.href;
  };

  return (
    <div className="project-update">
      <h1>Project Details</h1>
      <form onSubmit={handleUpdateProject}>
        <label>
          Update Title:
          <input type="text" name="title" defaultValue={props.project.title} />
        </label>
        <br/>
        <br/>
        <label>
          Goal Target Update:
          <input type="integer" name="goal_amount" defaultValue={props.project.goal_amount} />
        </label>
        <br/>
        <label>
          Change Project End-Date:
          <input type="date" name="end_date" max="2030-01-01" defaultValue={props.project.end_date} />
        </label>
        <br/>
        <label> 
          Update Description:
          <textarea type="text" id="description" name="description" defaultValue={props.project.description} />
        </label>
        <button type="submit" id="primary">Submit Updates</button>
      </form>
    </div>
  );
}