import axios from "axios";
import { useState, useEffect } from "react";
import { formatCurrency, formatDate } from "./Functions";


export function RewardsShow (props) {
  const [currentRewards, setCurrentRewards] = useState([]);

  useEffect(() => {
    console.log("handling reward show");
    const projectId = props.project.id;
    axios.get(`http://localhost:3000/rewards.json`).then((response) => {
      console.log(response.data, "project rewards");
      const rewards = response.data;
      const projectRewards = rewards.filter(reward => reward.project_id === projectId);
      setCurrentRewards(projectRewards);
    }).catch((error) => {
      console.error("There was an error fetching the rewards.");
    });
  }, [props.project]);

  if (currentRewards.length > 0) {
    return (
      <div className="rewards-by-project-id">
        <div className="reward-cards">
          {currentRewards.map(reward => (
            <div key={reward.id} id="card">
              <h3>{reward.description} - {formatCurrency(reward.amount, false)} </h3>
              <div className="img-container"> 
                <img src="https://www.rgj.com/gcdn/authoring/authoring-images/2023/12/18/PREN/71956106007-star-ocean-the-second-story-r-pub-02-p-17-01-en.jpg?crop=3839,2159,x0,y0&width=3200&height=1800&format=pjpg&auto=webp" />
              </div>
              <p>Estimated Delivery:</p>
              <p>{formatDate(reward.delivery_date)} </p>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <h1>Backer Rewards undetermined. Return later for update!</h1>
    );
  }
}