import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ItemPage() {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/item/${id}`)
      .then((response) => {
        console.log("response.data", response)
        setItem(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="card">
        <h1> Item </h1>
         <img src={item.imageUrl} alt="item" />
        <h3>{item.title}</h3>
        <span>{item.brand}</span>
        <p>{item.description}</p>
        <p>{item.stock}</p>
        <p>{item.price}</p>
        <button>Edit this Item</button>
        <Link to={`/catalog/item-edit/${item._id}`}>
          <button>Edit this Item</button>
        </Link>
      </div>
    </div>
  );
}

export default ItemPage;
