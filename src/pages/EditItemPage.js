import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

export default function EditItemPage(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(1);
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(1);
  const [image, setImage] = useState("");
  const { itemId } = useParams();
  const { catalogId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/item/${itemId}`)
      .then((response) => {
        const oneItem = response.data;
        setTitle(oneItem.title);
        setDescription(oneItem.description);
        setBrand(oneItem.brand);
        setImage(oneItem.imageUrl);
        setPrice(oneItem.price);
      })
      .catch((error) => console.log(error));
  }, [itemId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description, brand, image, price };
    axios
      .put(`${API_URL}/api/item/${itemId}`, requestBody)
      .then(() => {
        alert("Item has been updated!");
        navigate(`/allcatalogs/${catalogId}`);
      })
      .catch((err) => console.log(err));
  };

  const deleteItem = () => {
    axios
      .delete(`${API_URL}/api/item/${itemId}`)
      .then(() => {
        navigate(`/allcatalogs/${catalogId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <Title text="Add new Item here" />
      <Link to={`/allcatalogs/${catalogId}`}>
        <button className="btn">Back to the Collection</button>
      </Link>

      <div className="EditItemPage">
        <h3>Edit Item </h3>

        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <label>Brand</label>
          <input
            type="text"
            name="brand"
            onChange={(e) => setBrand(e.target.value)}
            value={brand}
          />
          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <label>Price</label>
          <input
            type="number"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            onChange={(e) => setStock(e.target.value)}
            value={stock}
          />
          <label>Image</label>
          <input
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
          <input type="submit" value="Submit" />
        </form>
        <button onClick={deleteItem}>Delete Item</button>
      </div>
    </>
  );
}
