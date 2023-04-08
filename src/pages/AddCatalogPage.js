import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import service from "../api/service";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

export default function AddCatalogPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

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

  /*  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      title: title,
      description: description,
    };

    axios
      .post(`${API_URL}//api/allcatalogs`, body)
      .then((response) => {
        setTitle("");
        setDescription("");

        // Navigate to the `/allcatalogs` page
        alert("Catalog has been added!");
        navigate("/allcatalogs");
      })
      .catch((error) => console.log(error));
  }; */

  const handleSubmit = (e) => {
    e.preventDefault();

    service
      .createCatalog({ title, description, imageUrl })
      .then((res) => {
        setTitle("");
        setDescription("");
        setImageUrl("");
        alert("Catalog has been added!");
        navigate("/allcatalogs");
      })
      .catch((err) => console.log("Error while adding the new movie: ", err));
  };

  return (
    <>
      <Navbar />
      <Title text="Add new Catalog here" />
      <div className="button-group">
        <Link to={`/allcatalogs`}>
          <button className="outlined-btn">Back</button>
        </Link>
      </div>

      <div className="AddCatalogPage">
        <form onSubmit={handleSubmit} className="AddCatalogForm">
          <label>Title</label>
          <input
            required
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <br />
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <br />
          <label>Image</label>
          <input type="file" onChange={(e) => handleFileUpload(e)} />
          <br />
          <button type="submit" className="submit-catalog-btn">
            Sumbit
          </button>
        </form>
      </div>
    </>
  );
}
