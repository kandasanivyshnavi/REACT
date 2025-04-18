
import { useState } from "react";

function App()
{
  const [current , next] = useState(0);
  
  function nums()
  {
    let nextnum  = current+1;
    next(nextnum);
  }
  function dec()
  {
    let  nextnum = current-1;
    next(nextnum);
  }
   return(
    <div className="form">
      <h1>
        please rate {current}
      </h1>
      <button onClick={nums}>next</button>
      <button onClick={dec}>previous</button>

      
    </div>
   );
}

export  default App;
