

export function ProjectsNew(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new FormData(e.target);
    props.createProject(params);
  }

  return (
    <div className="new-project">
      <h1>New Project</h1>
      
      <form onSubmit={handleSubmit} id="signupForm">

        <label> Title: <input name="title" type="text"/> </label>
        <label> Description: <input name="description" type="text"/> </label>
        <label> Goal: <input name="goal_amount" type="number"/> </label>
        <label> Date of Goal: <input name="end_date" type="date"/> </label>
        <label> Image Url: <input name="image" type="url"/> </label>
        <button type="submit">Submit</button>

      </form>

    </div>
  )
}