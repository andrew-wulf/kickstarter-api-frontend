import { Link } from "react-router-dom";
import { daysUntil } from "./Functions";

export function ProjectsIndex(props) {
  let images = ["https://img.freepik.com/free-photo/abstract-nature-painted-with-watercolor-autumn-leaves-backdrop-generated-by-ai_188544-9806.jpg", "https://www.epidemicsound.com/blog/content/images/size/w2000/2023/05/what-is-royalty-free-music-header.webp", "https://www.poynter.org/wp-content/uploads/2019/02/2.Journalism-Fundamentals-June-2022.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT0XanS-zY2amtRDJ3gPw5jo2KbRhCVAh8xQ&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz09fAl5_eoIvPeL-TMX_UoUgkx9pJaqD0VA&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLiY8nDX3q-95uvIK_QoD1ve0KO9OxHbEiA&s", "https://jetpackcomics.com/wp-content/uploads/2018/10/stacks-of-comic-books.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4VNKCg0WkEnPaG3PzaNPgYhhl03XaqJeww&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAxrpbb-pzxj3EcG4e6_YgojhBohwf8imqew&s", "https://images.unsplash.com/photo-1582845512747-e42001c95638?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];

  if (props.data.length > 0) {
    return (
      <div className="index-page">
        <h1>All Projects</h1>
        <div className='projectsIndex'>
          {
            props.data.map(row => {
              let percentage = Math.floor(Math.max(100 * (row.amount_raised / row.goal_amount), 0));
              let img_link = images[Math.floor(Math.random()*images.length)];

              return (
   
                <div className='projectsRow' key={row.id} onClick={() => {props.donate(row)}}>
                  
                  <div className="img-container" id="img-container">
                    <img id='project-img' src= {img_link}></img>
                    
                  </div>

                    <div className="progress-bar-container">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${percentage}%` }}
                      ></div>
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





//images 

//duck "https://images.unsplash.com/photo-1582845512747-e42001c95638?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

// art "https://img.freepik.com/free-photo/abstract-nature-painted-with-watercolor-autumn-leaves-backdrop-generated-by-ai_188544-9806.jpg"

// music "https://www.epidemicsound.com/blog/content/images/size/w2000/2023/05/what-is-royalty-free-music-header.webp"

// journalism "https://www.poynter.org/wp-content/uploads/2019/02/2.Journalism-Fundamentals-June-2022.png"

// games "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT0XanS-zY2amtRDJ3gPw5jo2KbRhCVAh8xQ&s"

// film "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz09fAl5_eoIvPeL-TMX_UoUgkx9pJaqD0VA&s"

// design "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLiY8nDX3q-95uvIK_QoD1ve0KO9OxHbEiA&s"

// comics "https://jetpackcomics.com/wp-content/uploads/2018/10/stacks-of-comic-books.png"

// photography "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4VNKCg0WkEnPaG3PzaNPgYhhl03XaqJeww&s"

// theater "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAxrpbb-pzxj3EcG4e6_YgojhBohwf8imqew&s"

