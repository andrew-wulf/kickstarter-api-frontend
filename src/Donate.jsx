import './Donate.css'
import { useEffect } from "react";
import axios from 'axios'
import { ProjectDonations } from "./ProjectDonations";
import { formatDate, formatCurrency } from './Functions';
import { useState } from 'react';

export function Donate(props) {
  const [errors, setErrors] = useState("");
  
  const daysUntil = (date) => {
    let today = new Date(); // Get today's date
    today.setHours(0, 0, 0, 0); // Ensure the time part is set to midnight
    
    let target = new Date(formatDate(date));
    target.setHours(0, 0, 0, 0); // Ensure the time part is set to midnight
  
    const timeDifference = target.getTime() - today.getTime(); // Difference in milliseconds
    const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

    return Math.max(dayDifference, 0);
  };

  const getProject = () => {
    let url = window.location.href;
    let x = url.lastIndexOf("/");
    let id = url.substring(x + 1, url.length);

    axios.get(`http://localhost:3000/projects/${id}.json`)
      .then(response => {
        console.log(response);
        props.setProject(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(getProject, []);

  const countBackers = (project) => {
    let donations = project.donations;
    let emails = [];
    let count = 0;
    donations.forEach(donation => {
      let email = donation.user.email;
      if (emails.includes(email) === false) {
        emails.push(email);
        count += 1;
      }
    });
    return count;
  };


  const handleDonate = (e) => {
    e.preventDefault();
    const params = new FormData(e.target);

    let amount = params.get('amount');

    if (amount <= 0) {
      setErrors("Amount must be greater than 0.");
    }
    else {
      if (amount < 1000000) {
        setErrors("");
        params.append('project_id', props.project.id);
    
        axios.post('http://localhost:3000/donations.json', params)
          .then(response => {
            console.log(response);
            window.location.href = window.location.href;
          })
          .catch(error => {
            console.log(error);
          });
      }
      else {
        setErrors("Amount must be less than 1 million USD.");
      }
    }
  };


  let project = props.project;
  
  if (project.id !== undefined) {
    let amountRaised = project.amountRaised;
    let percentage = Math.min(100 * (amountRaised / project.goal_amount), 100);
    let backers = countBackers(project);

    return (
      <div className="donation-page">
        <h1 id="header">{project.title}</h1>
        


        <div className="grid-container">

          <div className="spacer"></div>

          <form id="donateForm" onSubmit={handleDonate}>
            <img src="https://images.unsplash.com/photo-1582845512747-e42001c95638?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            <h1>Support this Project</h1>
            <p id="errors">{errors}</p>
            <label> Amount: <input name="amount" type="number"/> </label>
            <label> Message: <input name="message" type="text"/> </label>
            <button type="submit">Donate</button>
          </form>
          
          <div>
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <h3>{formatCurrency(amountRaised, false)}</h3>
            <p>pledged of {formatCurrency(project.goal_amount, false)} goal</p>

            <h3>{backers}</h3>
            <p>Backers</p>

            <h3>{daysUntil(project.end_date)}</h3>
            <p>Days to go</p>
          </div>
        </div>

        <ProjectDonations project={project}/>
      </div>
    )
  }

  else {
    return (
      <h2>Project doesn't exist.</h2>
    );
  }
}