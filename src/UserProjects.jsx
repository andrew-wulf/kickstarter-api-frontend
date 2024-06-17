import { formatDate } from "./Functions";

export function UserProjects(props) {

  let user = props.user;
  console.log(user);
  let projects = user.projects;

  if (projects && projects.length > 0) {
    return (
      <div className="user-projects">
        
        {
          projects.map(proj => {
            return (
              <div key={proj.id}> 
                <h2 onClick={() => {window.location.href = `projects/${proj.id}`}}>{proj.title}</h2>
                <p>Active until {formatDate(proj.end_date)}</p>
              </div>
            )
          })
        }

      </div>
    )
  }
}