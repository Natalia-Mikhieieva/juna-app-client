import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { Link } from "react-router-dom";

export default function AddItemPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(1);
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(1);
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  const { itemId } = useParams();
  const { catalogId } = useParams();

  const handleSubmit = (e) => {
    // Prevent page reload on submit
    e.preventDefault();
    // Create the body for the POST request
    const body = {
      title: title,
      price: Number(price),
      brand: brand,
      description: description,
      stock: Number(stock),
      image: image,
    };

    axios
      .post("http://localhost:5005/api/items", body)
      .then((response) => {
        // Reset the state
        setTitle("");
        setPrice(0);
        setBrand("");
        setDescription("");
        setStock(0);
        setImage("");

        // Navigate to the `/catalog` page
        alert("Item been added!");
        navigate(`/allcatalogs/${catalogId}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar />
      <Title text="Add new Item here" />
      <div className="add-button">
        
      </div>
      <div className="container">
        <div className="AddItem">
          <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
<br />
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
            />
            <br />
            <label>Description</label>
            <input
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <br />
            <label>Price</label>
            <input
              type="number"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <br />
            <label>Stock</label>
            <input
              type="number"
              name="stock"
              onChange={(e) => setStock(e.target.value)}
              value={stock}
            />
            <br />
            <label>Upload an Image</label>
            <input
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
<br />
            <button type="submit" className="button btn">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
