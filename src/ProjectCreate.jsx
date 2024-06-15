import axios from "axios";
//build the form
//import axios
//create an onSubmit that pulls the form data
// build a function that creates a post request and places data in data base
//refresh page
export function ProjectCreate() {

  

  return (
    <div>
      Test Render Below Index, Needs routing to new page
      <form>
        <label>
          Project Title:
          <input type="text" name="title" />
        </label>
        <br/>
        <label>
          Description, sell what you do!!:
          <input type="text" name="description" />
        </label>
        <br/>
        <label>
          Desired Monetary Goal for Project:
          <input type="" name="goal_amount" />
        </label>
        <br/>
        <label>
          When will the project begin:
          <input type="date" name="start_date" max="2030-01-01" />
        </label>
        <br/>
        <label>
          Estimated End Date:
          <input type="date" name="end_date" max="2030-01-01" />
        </label>
        <br/>
        <label>
          Choose a Category:
          <input type="integer" name="category_id" />
        </label>
        <br/>
      </form>
    </div>
  );
}

// category_id
// title
// description
// goal_amount
// start_date
// end_date