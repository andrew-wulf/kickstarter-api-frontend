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


  return (
    <div className="rewardsByProject">
      {currentRewards.map(reward => (
        <div>
          <p>Description: {reward.description} </p>
          <p>Reward amount: {reward.amount} </p>
          <p>Delivery Date: {formatDate(reward.delivery_date)} </p>
        </div>
      ))};
    </div>
  );
}