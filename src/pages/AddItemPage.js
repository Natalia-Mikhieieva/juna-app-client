import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddItemPage() {
  const [headline, setHeadline] = useState("");
  const [price, setPrice] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // Prevent page reload on submit
    e.preventDefault();
    // Create the body for the POST request
    const body = { title: headline, price: price };

    axios.post("http://localhost:5005/api/catalog", body).then((response) => {
      // Reset the state
      setHeadline("");
      setPrice(1);

      // Navigate to the `/` page
      navigate("/");
    });
  };

  return (
    <div className="AddItemPage">
      <h3>Add New Item</h3>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="headline"
          onChange={(e) => setHeadline(e.target.value)}
          value={headline}
        />

        <label>Price </label>
        <input
          type="number"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />

        <button type="submit">Create Item</button>
      </form>
    </div>
  );
}

export default AddItemPage;
