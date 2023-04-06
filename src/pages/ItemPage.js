import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

export default function ItemPage() {
  const [item, setItem] = useState([]);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [brand, setBrand] = useState(null);
  const [stock, setStock] = useState(null);
  const [price, setPrice] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const { itemId } = useParams();
  const { catalogId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/item/${itemId}`)
      .then((response) => {
        console.log("response.data", response);

        setItem(response.data.items);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setBrand(response.data.brand);
        setStock(response.data.stock);
        setPrice(response.data.price);
        setImageUrl(response.data.imageUrl);
      })
      .catch((err) => console.log(err));
  }, [itemId]);

  const deleteItem = () => {
    axios
      .delete(`http://localhost:5005/api/item/${itemId}`)
      .then(() => {
        // Once the delete request is resolved successfully
        // navigate back to the list of projects.
        navigate(`/allcatalogs/${catalogId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar></Navbar>

      <Link to={`/allcatalogs/${catalogId}`}>
        <button className="btn">Back to this catalog</button>
      </Link>

      <p>You are in the catalog: {title}</p>
      <div className="card">
        <img src={imageUrl} alt="item" />
        <h3>Item title: {title}</h3>
        <p>Item description: {description}</p>
        <p>Item brand: {brand} </p>
        <p>Item stock: {stock}</p>
        <p>Item price: {price} </p>
        <div className="buttons">
          <button onClick={deleteItem} className="btn">
            Delete this Item
          </button>

          <Link to={`/item/${itemId}/edit`}>
            <button className="btn">Edit this Item</button>
          </Link>
        </div>
      </div>
    </>
  );
}
