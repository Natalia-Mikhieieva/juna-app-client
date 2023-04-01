import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/CatalogPage.css";
import Title from "../components/Title";

function CatalogPage() {
  const [items, setItems] = useState([]);

  function getAllItems() {
    axios
      .get("http://localhost:5005/api/catalog")
      .then((response) => {
        console.log("response.data", response.data);
        setItems(response.data);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Title text="Collection. Items are displayed here "></Title>
      <div class="add-button">
        <Link to={`/catalog/add-item`}>
          <button>+ Add Item</button>
        </Link>
      </div>

      <div className="collection">
        {items.map((item) => {
          return (
            <div className="card">
              <img src={item.image} alt="item" />
              <h3>{item.title}</h3>
              <span>{item.brand}</span>
              <p>{item.description}</p>
              <p>{item.stock}</p>
              <p>{item.price}</p>
              <Link to={`/catalog/item/${item._id}`}>
                <button>Know more about this item</button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CatalogPage;
