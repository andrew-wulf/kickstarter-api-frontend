import { formatCurrency } from "./Functions";
import { formatDate } from "./Functions";


export function ProjectDonations(props) {

  let project = props.project;
  let donations = project.donations;
  
  
  if (donations.length > 0) {
    console.log(donations);

    return (
      <div>
        
        <div className="proj-donations-index">
        <h1>Recent Contributions</h1>
          {
            donations.toReversed().map(row => {
              return (
                <div className="proj-donations-index-row" key={row.id}> 
                  <h2>{formatCurrency(row.amount)}</h2>
                  <h3>{row.user.name}</h3>
                  <p>{row.message}</p>
                  <p>{formatDate(row.created_at)}</p>
                </div>
              )
            })
          }
        </div>

      </div>
    )
  }
  else {
    return (
      <div className="proj-donations-index">
        <h1>Recent Contributions</h1>
        <p>No contributions yet...</p>
      </div>
    )
  }
}