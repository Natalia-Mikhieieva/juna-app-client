import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddItemPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(1);
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(1);
  const [image, setImage] = useState("");

  const navigate = useNavigate();

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
      .post("http://localhost:5005/api/catalog", body)
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
        navigate("/catalog");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddItemPage">
      <h3>Add New Item</h3>

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
          type="text"
          name="image"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />

        <button type="submit" className="btn add-btn">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddItemPage;
