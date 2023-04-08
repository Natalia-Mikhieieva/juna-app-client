import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import service from "../api/service";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

export default function EditItemPage(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(1);
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(1);
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [catalogId, setCatalogId] = useState("");

  const { itemId } = useParams();

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

  useEffect(() => {
    axios
      .get(`${API_URL}/api/item/${itemId}`)
      .then((response) => {
        const oneItem = response.data;
        setTitle(oneItem.title);
        setDescription(oneItem.description);
        setBrand(oneItem.brand);
        setImageUrl(oneItem.imageUrl);
        setPrice(oneItem.price);
      })
      .catch((error) => console.log(error));
  }, [itemId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      title: title,
      brand: brand,
      description: description,
      price: Number(price),
      stock: Number(stock),
      imageUrl: imageUrl,
      category: category,
      catalogId,
    };
    axios
      .put(`${API_URL}/api/item/${itemId}`, body)
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
        alert("Item has been deleted!");
        navigate(`/allcatalogs/${catalogId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <Title text="Add new Item here" />
      <div className="button-group">
        <Link to={`/allcatalogs/${catalogId}`}>
          <button className="outlined-btn">Back to the Collection</button>
        </Link>
        <Link to={`/allcatalogs`}>
          <button className="outlined-btn">Back to all Catalogs</button>
        </Link>
      </div>

      <div className="AddItemPage">
        <form onSubmit={handleSubmit} className="AddItemForm">
          {/* EDIT ITEM IMAGE */}
          <div className="AddItemImageColumn">
            <label>Upload a new Image</label>
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
            <div className="edit-button-group">
              <button type="submit" className="submit-item-btn">
                Update item
              </button>
              <button onClick={deleteItem} className="submit-item-btn">
                Delete Item
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
