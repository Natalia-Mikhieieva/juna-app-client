import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Title from "../components/Title";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

export default function CatalogPage() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const { catalogId } = useParams();

  function getAllItems() {
    axios
      .get(`${API_URL}/api/allcatalogs/${catalogId}`)
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
        <Link to={`/item/${catalogId}/add-item`}>
          <button className="btn">+ Add Item to this catalog </button>
        </Link>
        <Link to={`/allcatalogs`}>
          <button className="btn">Back to all catalogs</button>
        </Link>
      </div>
      <p>You are in the catalog: {title}</p>
      <div className="collection">
        {items.map((item) => {
          return (
            <div className="card">
              <img src={item.image} alt="item-pic" />
              <h3> Item title: {item.title}</h3>
              <p>Item brand: {item.brand}</p>
              <p>Item description: {item.description}</p>
              <p>Item category: {item.category}</p>
              <p>Item price: {item.price}</p>
              <Link to={`/item/${item._id}`}>
                <button className="btn">Check this item</button>
              </Link>
            </div>
          );
        })}
        <Footer></Footer>
      </div>
    </>
  );
}
