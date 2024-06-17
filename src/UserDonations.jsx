import { formatCurrency } from "./Functions";
import { formatDate } from "./Functions";


export function UserDonations(props) {

  let user = props.user;
  let donations = user.donations;
  
  
  if (donations.length > 0) {
    console.log(donations);

    return (
      <div>
        
        <div className="user-donations-index">
        <h1>Recent Contributions</h1>
          {
            donations.map(row => {
              return (
                <div className="user-donations-index-row" key={row.id}> 
                  <h2>{formatCurrency(row.amount)}</h2>
                  <p>{row.message}</p>
                  <h3 onClick={() => {window.location.href=`/projects/${row.project.id}`}}>{row.project.title}</h3>
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
      <div className="donations-index">
        <h1>Recent Contributions</h1>
        <p>No contributions yet...</p>
      </div>
    )
  }
}