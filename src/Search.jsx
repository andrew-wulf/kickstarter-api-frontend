import { formatDate } from "./Functions";

export function Search(props) {

  let projects = props.projects;
  let val = props.val;

  if (projects.length > 0 && val.length > 0) {
    return (
      <div className="search-results">
        <h1>Results</h1>
  
        {
          projects.map(proj => {
            if (proj.title.toLowerCase().includes(val.toLowerCase())) {
              return (
                <div key={proj.key} className="result-row" onClick={() => {window.location.href = `projects/${proj.id}`}}>

                  <div className="img-container"> 
                    <img src={proj.image_url}></img>
                  </div>

                  <div className="info-container">
                    <h2>{proj.title}</h2>
                    <p>{proj.owner.name}</p>
                    <p>{formatDate(proj.end_date)}</p>
                  </div>
                
                </div>
              )
            }
          })
  
        }
  
      </div>
    )
  }
}