import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/CatalogPage.css";
import Title from "../components/Title";
import FilterItems from './FilterItems'

function CatalogPage() {
  const [items, setItems] = useState([]);

  function getAllItems() {
    axios
      .get("http://localhost:5005/api/catalogs")
      .then((response) => {
        console.log("response.data", response.data);
        setItems(response.data);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getAllItems();
  }, []);

  function filterItems(str){
    let filterItems = items.filter((furniture) => {
      return furniture.category === str; 
        	// comparing category for displaying data
    });
    setItems(filterItems);
  }

  return (
    <>
      <Navbar></Navbar>
      <Title text="Collection. Items are displayed here "></Title>
      <FilterItems filterItems={filterItems}></FilterItems>
      <div className="add-button">
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
              <p>{item.category}</p>
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
