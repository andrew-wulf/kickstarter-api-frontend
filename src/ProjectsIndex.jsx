import { Link } from "react-router-dom";

export function ProjectsIndex(props) {

  if (props.data.length > 0) {
    return (
      <div className="index-page">
        <h1>All Projects</h1>
        <div className='projectsIndex'>
          {
            props.data.map(row => {

              return (
                <div className='projectsRow' key={row.id}>
                  
                  
                  <img onClick={() => {props.donate(row)}} src= "https://images.unsplash.com/photo-1582845512747-e42001c95638?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>4
                  <h2 onClick={() => props.onShowProject(row)}>
                    {row.title}
                  </h2>
                  <p>{row.id}</p>  {/*this is here solely for testing purposes*/}
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }

  else {
    return (
      <div id="placeholder">
        <h2>Nothing to see here...</h2>
      </div>
    );
  }
}