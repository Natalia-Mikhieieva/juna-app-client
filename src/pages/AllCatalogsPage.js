import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import Title from "../components/Title";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

export default function AllCatalogsPage() {
  const [catalogs, setCatalogs] = useState([]);

  function getAllCatalogs() {
    axios
      .get(`${API_URL}/api/allcatalogs`)
      .then((response) => {
        console.log("response.data", response.data);
        setCatalogs(response.data);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getAllCatalogs();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Title text="All Collections are displayed here "></Title>
      <div className="add-button">
        <Link to={`/allcatalogs/add-catalog`}>
          <button className="btn">+ Add Catalog</button>
        </Link>
      </div>

      <div className="collection">
        {catalogs.map((catalog) => {
          return (
            <div className="card" key={catalog._id}>
              <h3>Catalog title: {catalog.title}</h3>
              <p>Catalog description {catalog.description}</p>
              <Link to={`/allcatalogs/${catalog._id}`}>
                <button className="btn">Check Items in this catalog</button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
