import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { Link } from "react-router-dom";

export default function AddCatalogPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // Prevent page reload on submit
    e.preventDefault();
    // Create the body for the POST request
    const body = {
      title: title,
      description: description,
    };

    axios
      .post("http://localhost:5005/api/allcatalogs", body)
      .then((response) => {
        setTitle("");
        setDescription("");

        // Navigate to the `/allcatalogs` page
        alert("Item been added!");
        navigate("/allcatalogs");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar />
      <Title text="Add new Item here" />
      <div class="add-button">
        <Link to={`/allcatalogs`}>
          <button className="btn">Back</button>
        </Link>
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

            <label>Description</label>
            <input
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />

            <button type="submit" className="button btn">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
