import { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "../components/ItemCard"

function CatalogPage() {
  const [items, setItems] = useState([]);

  function getAllItems() {
  axios
  .get("http://localhost:5005/api/catalog")
  .then((response) => {
      console.log("response.data", response.data);
      setItems(response.data);
    })
    .catch(err=>console.log(err))
 }
  useEffect(() => {
    getAllItems()
  }, []);

  return (
    <div>
      <h3>Collection</h3>
      
      {items.map((item) => (
        <ItemCard 
        id={item._id}
        image={item.imageUrl}
        title= {item.title} 
        brand={item.description}
        price={item.price}
         />
      ))}
    </div>
  );
}

export default CatalogPage;
