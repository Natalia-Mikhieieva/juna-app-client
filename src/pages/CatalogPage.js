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
    service
      .getItems()
      .then((data) => {
        setItems(data);
      })
      .catch((err) => console.log(err));
  }, []);

  axios
    .get(`${API_URL}/api/allcatalogs/${catalogId}`)
    .then((response) => {
      console.log("response.data", response.data);
      setItems(response.data.items);
      setDescription(response.data.description);
      setTitle(response.data.title);
      setImageUrl(response.data.imageUrl);
    })
    .catch((err) => console.log(err));

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
      <h5>Collection of {title}</h5>
      <div className="ItemsCollection">
        {items &&
          items.map((item) => (
            <div key={item._id} className="one-item-preview">
              <img src={item.imageUrl} alt="one-item-img-preview" />
              <h3> {item.title}</h3>
              <p>Brand: {item.brand}</p>
              <p>Price: {item.price}</p>
              <Link to={`/item/${item._id}`}>
                <button className="outlined-btn">Check this item</button>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default CatalogPage;
