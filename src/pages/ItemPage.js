import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import Title from "../components/Title";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

export default function ItemPage() {
  const [item, setItem] = useState([]);
  const [title, setTitle] = useState(null);
  const [catalog, setCatalog] = useState();
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState(null);
  const [brand, setBrand] = useState(null);
  const [stock, setStock] = useState(null);
  const [price, setPrice] = useState(null);
  const [comment, setComment] = useState(null);
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
        setCatalog(response.data.catalog);
        setCategory(response.data.category);
        setDescription(response.data.description);
        setBrand(response.data.brand);
        setStock(response.data.stock);
        setPrice(response.data.price);
        setComment(response.data.comment);
        setImageUrl(response.data.imageUrl);
      })
      .catch((err) => console.log(err));
  }, [itemId]);

  return (
    <>
      <Navbar></Navbar>
      <Title text="Item page" />
      <div className="button-group">
        <Link to={`/allcatalogs/${catalogId}`}>
          <button className="outlined-btn">
            Back to the catalog {catalogId}
          </button>
        </Link>
      </div>
      <div className="DisplayOneItemDetails">
        {/* DISPLAY  ITEM IMAGE */}
        <div className="DisplayItemImageColumn">
          <img src={imageUrl} alt="one-item-img" />
        </div>
        {/* DISPLAY ITEM INFO */}
        <div className="DisplayItemInfoColumn">
          <h3>{title}</h3>
          <p>Description: {description}</p>
          <p>Catalog: {catalogId} </p>
          <p>Category: {category}</p>
          <p>Brand: {brand} </p>
          <p>Available stock: {stock}</p>
          <p>Price: {price} </p>
          <p>Comment: {comment} </p>
          <Link to={`/item/${catalogId}/${itemId}/edit`}>
            <button className="edit-item-btn">Edit this Item</button>
          </Link>
        </div>
      </div>
    </>
  );
}
