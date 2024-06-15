import axios from "axios";

export function ProjectUpdate () {

  return(
    <div>
      Render this within ProjectShow modal
      <form>
        <label>
          Update Title:
          <input type="text" name="title" />
        </label>
        <br/>
        <label> 
          Update Descript
          <input type="text" name="description"/>
        </label>
        <br/>
        <label>
          Goal Target Update:
          <input type="integer" name="goal_amount" />
        </label>
        <br/>
        <label>
          Change Project End-Date:
          <input type="date" name="end_date" max="2030-01-01" />
        </label>
        <br/>
        <button>Submit Updates</button>
      </form>
    </div>
  )
}