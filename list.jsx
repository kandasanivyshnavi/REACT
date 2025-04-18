
import React from "react";

function App()
{
  
  const list =["mamatha","vyshnavi","manasa","lakshmi","hariprasad"];
  
  return(
    <div className="form">
      <h1>list of names</h1>
       {list.map((name,index)=>(<li key={index}>{name}</li>))}
    </div>
  );
}
  

export default App;
