
function App()
{
   const [current ,next] = useState("");

   function changing(e)
   {
    next(e.target.value);
       
   }
   return(
    <div className="form">
      <h1>hello</h1>
      <input type="text" onChange={changing}></input>
      <h1>hello {current}</h1>
    </div>

   );
}
export default App;
