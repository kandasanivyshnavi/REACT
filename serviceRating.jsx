

import { useState } from "react";

function App()
{
   const [current, productList] = useState("food");
   const [i,next] = useState(0);
   const [first , later] = useState("");

   function lists()
   {

    let nextIndex = i+1;

    const list = ["clothing" , "gaming" ,"grocery" ,"electroniics","fashion","travel"];

    // condition
    if(nextIndex >= list.length)
    {
      nextIndex =0;
    }

    productList(list[nextIndex]);
    next(nextIndex);
      

   }
   function response(props)
   {
      later(props.target.value);


   }
   return(
    <div className="form">
      <h1>Welocme</h1><br/>
      <p> your feed back means a lot, Thankyou!</p><br/>
      <h1>please rate<i><b> {current}</b></i></h1>
      <button onClick={lists}>next</button><br />
      <lable>rate here</lable>
      <select onChange={response} value={first}><br />
        <option>select</option>
        <option>1 😞</option>
        <option>2 🙁</option>
        <option>3 😑</option>
        <option>4 ☺️</option>
        <option>5 😃</option>

      </select><br />
      <p>you have selected {first}</p>
    </div>
    

   );
}

export default App;



