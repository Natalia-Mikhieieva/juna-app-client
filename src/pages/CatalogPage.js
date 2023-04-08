import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Title from "../components/Title";
import service from "../api/service";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

function CatalogPage() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const { catalogId } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/allcatalogs/${catalogId}`)
      .then((response) => {
        console.log("response.data", response.data);
        setItems(response.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar></Navbar>

      <Title text="Collection. Items are displayed here "></Title>
      <div className="button-group">
        <Link to={`/item/${catalogId}/add-item`}>
          <button className="outlined-btn">+ Add Item </button>
        </Link>
        <Link to={`/allcatalogs`}>
          <button className="outlined-btn">Back to all catalogs</button>
        </Link>
      </div>
      <h5>{title} Collection </h5>
      <div className="ItemsCollection">
        {items &&
          items.map((item) => (
            <div key={item._id} className="one-item-preview">
              <img src={item.imageUrl} alt="one-item-img-preview" />
              <div className="one-item-preview-details">
                <h5> {item.title}</h5>
                <p>Brand: {item.brand}</p>
                <p>Price: {item.price}</p>
              </div>

              <Link to={`/item/${catalogId}/${item._id}`}>
                <button className="item-outlined-btn">Item details</button>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default CatalogPage;
