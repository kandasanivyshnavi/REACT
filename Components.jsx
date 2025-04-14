/*
Components are the sextion or resuable jsx code , which menas a js code contains a html code  in other words a js code will return a html code
eg :
function function_name()

{
// javascript code
return(
         html code
         <dev>
         <dev/>
      )

}

*/
/*IN this project we are just learning making a card using react*/
/* Card.jsx */
function Card_()
{
    return(
        <div style={{
          border:"1.5rem",
          margin:"4rem",
          padding:"2rem",
          backdropColor:"pink",
          borderBlockColor:"blue",
          borderBlockStyle:"solid",
          backgroundColor:"pink",
          textAlign:"center"
        }}>
          <h1>
            Hari sand business
          </h1>
          <p>
            high quality sand will be supplied with in 2 hrs.
            for delevery please contact 9885302182.
          </p>
          
        </div>
        );
}

export default Card_;

/* App.jsx */

// card component 


import Card_ from "./Card"
function App()
{
  
  return(
    <div>
      <Card_ />
    </div>
  );
};

export default App;
























