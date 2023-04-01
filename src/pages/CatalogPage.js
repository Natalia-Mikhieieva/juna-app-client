import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../styles/CatalogPage.css";
import Title from "../components/Title";

export default function CatalogPage() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const { catalogId } = useParams();

  function getAllItems() {
    axios
      .get(`http://localhost:5005/api/allcatalogs/${catalogId}`)
      .then((response) => {
        console.log("response.data", response.data);
        setItems(response.data.items);
        setDescription(response.data.description);
        setTitle(response.data.title);
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
      <div className="add-button">
        <Link to={`/allcatalogs/${catalogId}/add-item`}>
          <button>+ Add Item</button>
        </Link>
        <Link to={`/allcatalogs`}>
          <button>Back</button>
        </Link>
      </div>
      <p>You are in the catalog: {title}</p>
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
              <Link to={`/item/${item._id}`}>
                <button>Check this item</button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
