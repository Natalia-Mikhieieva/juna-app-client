import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import service from "../api/service";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

export default function AddItemPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(1);
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(1);
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const { catalogId } = useParams();

  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    service
      .uploadImage(uploadData)
      .then((response) => {
        setImageUrl(response.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    service
      .createItem({
        title,
        description,
        price,
        stock,
        imageUrl,
        category,
        catalogId,
      })
      .then((res) => {
        setTitle("");
        setBrand("");
        setDescription("");
        setPrice(0);
        setStock(0);
        setImageUrl("");
        setCategory("");
        alert("Item been added!");
        navigate(`/allcatalogs/${catalogId}/`);
      })
      .catch((err) => console.log("Error while adding the new item: ", err));
  };

  /*   const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      title: title,
      brand: brand,
      description: description,
      price: Number(price),
      stock: Number(stock),
      imageUrl: imageUrl,
      category: category,
    };

    axios
      .post(`${API_URL}/api/items`, body)
      .then((response) => {
        // Reset the state
        setTitle("");
        setBrand("");
        setDescription("");
        setPrice(0);
        setStock(0);
        setImageUrl("");
        setCategory("");
        alert("Item been added!");
        navigate(`/allcatalogs`);
      })
      .catch((error) => console.log(error));
  }; */

  return (
    <>
      <Navbar />
      <Title text="Add a new item" />
      <div className="button-group">
        <Link to={`/allcatalogs`}>
          <button className="outlined-btn">Back</button>
        </Link>
      </div>

      <div className="AddItemPage">
        <form onSubmit={handleSubmit} className="AddItemForm">
          {/* ADD ITEM IMAGE */}
          <div className="AddItemImageColumn">
            <label>Upload an Image</label>
            <input type="file" onChange={(e) => handleFileUpload(e)} />
          </div>
          {/* ADD ITEM INFO */}
          <div className="AddItemInfoColumn">
            <label>Title</label>
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />

            <label>Category</label>
            <select
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="sofa">Sofa</option>
              <option value="table">Table</option>
              <option value="bed">Bed</option>
              <option value="chair">Chair</option>
            </select>

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
          </div>
          <button type="submit" className="submit-item-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
