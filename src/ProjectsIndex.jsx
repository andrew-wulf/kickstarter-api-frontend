import { Link } from "react-router-dom";
import { daysUntil } from "./Functions";

export function ProjectsIndex(props) {

  if (props.data.length > 0) {
    return (
      <div className="index-page">
        <h1>All Projects</h1>
        <div className='projectsIndex'>
          {
            props.data.map(row => {
              let percentage = Math.floor(Math.max(100 * (row.amount_raised / row.goal_amount), 0));

              return (
                <div className='projectsRow' key={row.id} onClick={() => {props.donate(row)}}>
                  
                  <div className="img-container" id="img-container">
                    <img src= "https://images.unsplash.com/photo-1582845512747-e42001c95638?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                  </div>

                  <h2>{row.title}</h2>

                  <div className="flexbox">
                    <div className="img-container" id="avi-container"> <img src={row.owner.image} id="avi"/> </div>
                    <h3>{row.owner.name}</h3>
                  </div>

                  <div className="details">
                    <h3></h3>
                    <h3><b>{daysUntil(row.end_date)}</b> days to go</h3>
                    <h3><b>{percentage}%</b> funded</h3>
                  </div>

                  <p>{row.description}</p>

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