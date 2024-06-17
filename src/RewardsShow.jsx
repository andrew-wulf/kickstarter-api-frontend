import axios from "axios";
import { useState, useEffect } from "react";


const formatDate = (isoString) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${month}-${day}-${year}`;
};

export function RewardsShow (props) {
  const [currentReward, setCurrentReward] = useState({});

  useEffect(() => {
    console.log("handling reward show");
    const projectId = props.project.id;
    axios.get(`http://localhost:3000/rewards.json`).then((response) => {
      console.log(response.data, "project rewards");
      const rewards = response.data;
      const projectReward = rewards.find(reward => reward.project_id === projectId);
      setCurrentReward(projectReward);
    }).catch((error) => {
      console.error("There was an error fetching the rewards.");
    });
  }, [props.project]);

  let reward = currentReward;

  return (
    <div className="rewards">
      <h1>Project_id from reward = {reward.project_id} </h1>
      <h1>REWARD for Teir 1 Donation</h1>
      <p>Description: {reward.description} </p>
      <p>Reward amount: {reward.amount} </p>
      <p>Delivery Date: {formatDate(reward.delivery_date)} </p>

    </div>
  )
}