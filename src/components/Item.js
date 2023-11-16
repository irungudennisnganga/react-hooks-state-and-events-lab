import React, {useState} from "react";

function Item({ name, category }) {
  //console.log(category)
  const [none ,setNone] = useState('')
  const [names,setName]=useState("Add to Cart")
  
  function handleClick2(){
    
    setNone(none === ''? 'in-cart':"")
    setName(names ==="Add to Cart"?  "Remove From Cart" : "Add to Cart")
    
  }
  //const appClass = none ? "App dark" : "App light"
  return (
    <li className={none}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button  onClick={handleClick2} className="add">{names}</button>
    </li>
  );
}

export default Item;
