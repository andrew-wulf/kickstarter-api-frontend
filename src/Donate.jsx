import { useEffect } from "react";
import axios from 'axios'


export function Donate(props) {

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}-${day}-${year}`;
  };
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
  maximumFractionDigits: 0,
    }).format(amount);

  };

  const daysUntil = (date) => {
    let today = new Date(); // Get today's date
    today.setHours(0, 0, 0, 0); // Ensure the time part is set to midnight
    
    let target = new Date(formatDate(date))
    target.setHours(0, 0, 0, 0); // Ensure the time part is set to midnight
  
    const timeDifference = target.getTime() - today.getTime(); // Difference in milliseconds
    const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

    return Math.max(dayDifference, 0);
  }

  const getProject = () => {
    let url = window.location.href;
    let x = url.lastIndexOf("/");
    let id = url.substring(x+1, url.length);

    axios.get(`http://localhost:3000/projects/${id}.json`)
      .then(response => {
        console.log(response);
        props.setProject(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }
  useEffect(getProject, []);

  let project = props.project;
  let amount_raised = project.goal_amount * 0.8;
  let percentage = Math.min(100 * (amount_raised / project.goal_amount), 100);
  let backers = 14;


  if (project.id !== undefined) {
    return (
      <div className="donation">
        <h1 id="header">{project.title}</h1>
        


        <div className="grid-container">

          <div className="spacer"></div>

          <form id="donateForm">
            <img src="https://images.unsplash.com/photo-1582845512747-e42001c95638?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            <h1>Support this Project</h1>
            <label> Amount: <input name="first" type="text"/> </label>
            <label> Message: <input name="last" type="text"/> </label>
            <button type="submit">Donate</button>
          </form>
          
          <div>
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <h3>{formatCurrency(amount_raised)}</h3>
            <p>pledged of {formatCurrency(project.goal_amount)} goal</p>

            <h3>{backers}</h3>
            <p>Backers</p>

            <h3>{daysUntil(project.end_date)}</h3>
            <p>Days to go</p>
          </div>
        </div>

      </div>
    )
  }

  else {
    return (
      <h2>Project doesn't exist.</h2>
    )
  }

}