import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchWord, setSearchWord] = useState("");
  const [itemList, setItemList]= useState(items)

  function handleCategory(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event){
    setSearchWord(event.target.value)
  }
  //console.log(searchWord+","+ selectedCategory)
  /*function filter(array){
    return array.filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory  
    )
      // Handles item filter
    .filter(
      (item)=> searchWord === '' || item.name.toLowerCase() === searchWord.toLowerCase()
    )
  }*/


  function handleSubmit(item){
    //e.preventDefault();
    //setItemList(itemsToDisplay)    
    setItemList([...itemList, item]);
    //filter(itemList)
    }
    
  //console.log(filter(itemList))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit}/>
      <Filter onCategoryChange={handleCategory} onSearchChange={handleSearch}/>
      <ul className="Items">
        {itemList.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory  
  )
    // Handles item filter
  .filter(
    (item)=> searchWord === '' || item.name.toLowerCase() === searchWord.toLowerCase()
  ).map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))}
      </ul>
    </div>
  );
}


export default ShoppingList;
