// a basic student feed back application uusing useState
/*
🎯 Your Goal:
Start with one student (Vyshnavi) as default.

On clicking a button, go through a list of other students and update the displayed student name.

Display a dropdown (select) for feedback.


*/

import { useState } from "react"


function App()
{

  const [first, setFirst] = useState("Vyshnavi"); // first name
  const [i,seti] = useState(0); // index
  const [firstfeedback , setfeedback] = useState(""); // selected feedback
   
  
  function find()
  {
    const li = ["mamatha","manasa","santosh","keerthi","koushik"];
    let newIndex = i+1;
     
    // basecase 
    if(newIndex >= li.length)
    {
      newIndex =0;
    }

    // update index, name
    seti(newIndex);
    setFirst(li[newIndex]);

  }

  function response(e)
  {
     
     setfeedback(e.target.value);

  }

  return(
      <div>
         <div className="Options">
        <h1>Student name:{first}</h1><br/>
        <button onClick={find}>next</button><br/>
        
       
          <label>Select the option</label>
          <select onChange={response} value={firstfeedback}>
            <option>Good</option>
            <option>Average</option>
            <option>Poor</option>
          </select>
          <p> you have selected {firstfeedback}</p>
        </div>
        
        
      </div>
  );
 


}
export default App;
