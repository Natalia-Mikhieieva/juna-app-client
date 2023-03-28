import { useState, useEffect } from "react";
import axios from "axios";
import AddItem from './AddItemPage'

function CatalogPage() {
  const [items, setItems] = useState([]);

  function getAllItems() {
  axios.get("http://localhost:5005/api/catalog")
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
        <AddItem refreshItems={getAllItems}></AddItem>
      {items.map((item) => (
        <div key={item._id} className="card">
          <img src={item.img} alt="item" />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default CatalogPage;
