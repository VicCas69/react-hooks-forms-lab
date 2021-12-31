import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {handleDisplay} from './App';

function ItemForm({onItemFormSubmit}) {
  const [newItem, setNewItem] = useState("");
  const [category, setCategory] = useState("Produce")
  
  function selectCategory(event){
    setCategory(event.target.value)
  }

  function itemName(event){ 
    setNewItem(event.target.value)
     //itemName of new item saved as state itemName
  }

  const item = {
    id: uuid(),
    name: newItem,
    category: category
  }

  function handleSubmit(e){
    e.preventDefault();
    onItemFormSubmit(item)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit} >  
      <label>
        Name:
        <input 
        type="text" 
        name="itemName" 
        value={newItem} 
        onChange={itemName}/>
      </label>

      <label>
        Category:
        <select 
        name="category" 
        onChange={selectCategory} 
        value={category} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
