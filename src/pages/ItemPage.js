import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ItemPage() {
  const [item, setItem] = useState([]);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [brand, setBrand] = useState(null);
  const [stock, setStock] = useState(null);
  const [price, setPrice] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/item/${itemId}`)
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

  return (
    <>
      <Navbar></Navbar>
      <Link to={`/allcatalogs`}>
        <button>Back</button>
      </Link>

      <p>You are in the catalog: {title}</p>
      <div className="card">
        <h1> Item </h1>
<<<<<<< HEAD
        <img src={imageUrl} alt="item" />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{brand} </p>
        <p>{stock}</p>
        <p>{price} </p>
        {/*   <Link to={`/catalog/item-delete/${item._id}`}>
          <button>Edit this Delete</button>
        </Link>
=======
         <img src={item.imageUrl} alt="item" />
        <h3>{item.title}</h3>
        <span>{item.brand}</span>
        <p>{item.description}</p>
        <p>{item.stock}</p>
        <p>{item.price}</p>
        <button>Edit this Item</button>
>>>>>>> c5e737da94da0a884e125122f05a5225eff0868d
        <Link to={`/catalog/item-edit/${item._id}`}>
          <button>Edit this Item</button>
        </Link>
      </div>
    </>
  );
}
