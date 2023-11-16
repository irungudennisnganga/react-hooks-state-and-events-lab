import React ,{useState}from "react";
import Item from "./Item";

function ShoppingList({ items }) {
 //console.log(items)
 //const [one, setone] =useState(items)
  const [filters, filterBy]= useState(items.category)

  function handleFilter(event){
   // filterBy()
//console.log(event.target.value)
    const foodsToDisplay = items.filter(console.log(items));
    console.log(foodsToDisplay)
  
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onClick={handleFilter} name="filter">
          <option  value="All">Filter by category</option>
          <option   value="Produce">Produce</option>
          <option   value="Dairy">Dairy</option>
          <option   value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
