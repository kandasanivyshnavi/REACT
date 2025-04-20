unction App()
{
  const [currentdate ,setdate] =useState("");
  const [currenttask, settask] = useState("");

  function date(e)
  {
    setdate(e.target.value);
  }

  function task(e)
  {
    settask(e.target.value);
  }
  return(
    <div className="form">
      <h1>Welcome</h1>
      <label>Select date</label>
      <input type="date" onChange={date}/>< br/>< br/>
      <lable>enter the task</lable>
      <input type="text" onChange={task} /> 
      
      {/* / change ayina ventane nenu task ane function kee parameter gaa pampistunna */}
      {/* <li>{currentdate}</li>
      <li>{currenttask}</li> */}
      <div className="Table">
      <table>
        <thead>
          <tr>
            <th>DATE</th>
            <th>TASK</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{currentdate}</td>
            <td>{currenttask}</td>
            <td><input type="checkbox" /></td>
            
          </tr>
        </tbody>
      </table>
      </div>
      


    </div>
  );
}
export default App;
/*
//css
.body
{
  background-color: #000000;
}
.form
{

   border: 3rem;
   padding: 3rem;
   margin: 3rem;
   background-image:linear-gradient(orange,pink);

}
.Table
{
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  table th, table td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  table th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  
  table tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  /* Table Row Hover Effect */
  table tr:hover {
    background-color: #e0e0e0;
  }
}
*/
