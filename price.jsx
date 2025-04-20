/* App.jsx */
import ProductCard from "./Card";
function App()
{
  const [current  , product] = useState("babycare");
  const [cur  , price] = useState(5411);
  const [first , nextindex] = useState(0);
  const [available , nextavalable] = useState(true);

  function find(){
   const list = ["food","cloths","electronics","beauty"];
   const plist = [4561,6421,5413,5441]
   let i = first+1;
   if(i>= list.length)
   {
    nextavalable(false);

     i = 0;
   }
   else{
    nextavalable(true);
   }

   product(list[i])
   price(plist[i])

   nextindex(i);
  }
  return(
    <div className="form">
      <lable>Catogiry :</lable>
      { available  ? <ProductCard name={current} />:<h1>no product available</h1>}
      <lable>Starting Price :</lable>
      <ProductCard cost={cur} />
      <button onClick={find}>next</button>
      
    </div>
  );


}
export default App;

/* Caed.jsx*/

function ProductCard(props)
{
  return(
    <div>
      <h1>{props.name}</h1>
      <h1>{props.cost}</h1>
    </div>
  );

     
}
export default ProductCard;









