import axios from "axios";

export function ProjectUpdate (props) {

  const handleUpdateProject = (event) => {
    event.preventDefault();
    console.log("handling update");
    const params = new FormData(event.target);
    axios.patch(`http://localhost:3000/projects/${props.project.id}.json`, params).then((response) => {
      console.log(response.data);
    });
    window.location.href = "/";
  };

  return (
    <div>
      Render this within ProjectShow modal
      <form onSubmit={handleUpdateProject}>
        <label>
          Update Title:
          <input type="text" name="title" defaultValue={props.project.title} />
        </label>
        <br/>
        <label> 
          Update Descript
          <input type="text" name="description" defaultValue={props.project.description} />
        </label>
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
        <button type="submit" >Submit Updates</button>
      </form>
    </div>
  );
}