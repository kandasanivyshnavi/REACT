
function App()
{
    const [firstname , nextname] = useState("enter name");
    const [firstmood,nextmood]   = useState("select mood");
    const[i,index] = useState(0);
  function find(e)
    {
      nextname(e.target.value);
       
    }
    function mood(e)
    {
      nextmood(e.target.value)
    }

    

   return(
    <div className="form">
      <label>Enter your name</label>
      <input type="text"  onChange={find}/><br /><br/>
      <select onChange={mood}>
        <option>select Mood</option>
        <option>Happy 😃</option>
        <option>Sad🥺</option>
        <option>Energitic😉</option>
        <option>tired😞</option>
      </select>
      <h1>your name is {firstname}</h1>
      <h1>your mood is  {firstmood}</h1>
      
      
    </div>
   );
}
export default App;
