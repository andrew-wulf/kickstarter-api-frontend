import "./ProjectsNew.css";
import axios from "axios";
import { useState, useRef } from "react";

export function ProjectsNew(props) {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const params = Object.fromEntries(formData.entries());

    axios.post('http://localhost:3000/projects.json', params).then(response => {
      setMessage("Project created successfully!");
      setMessageType("success");
      console.log("Project created:", response.data);
      formRef.current.reset();
    })
      .catch(error => {
        setMessage("Error creating the project..");
        setMessageType("error");
        console.error("Error:", error);
      }); 
  };

  return (
    <div className="new-project">
      <h1>New Project</h1>

      {message && <p className={`message ${messageType}`}>{message}</p>}
      
      <form onSubmit={handleSubmit} ref={formRef} id="signupForm">

        <label> Title: <input name="title" type="text"/> </label>
        <label> Description: <input name="description" type="text"/> </label>
        <label> Goal: <input name="goal_amount" type="number"/> </label>
        <label> Date of Goal: <input name="end_date" type="date"/> </label>
        <label> Image Url: <input name="image" type="url"/> </label>
        <button type="submit">Submit</button>

      </form>

    </div>
  );
}