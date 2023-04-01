import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/AllCatalogsPage.css";
import Title from "../components/Title";

function AllCatalogsPage() {
  const [items, setItems] = useState([]);

  function getAllItems() {
    axios
      .get("http://localhost:5005/api/allcatalogs")
      .then((response) => {
        console.log("response.data", response.data);
        setItems(response.data);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Title text="All Catalogs are displayed here "></Title>
      <div class="add-button">
        <Link to={`/catalog/add-catalog`}>
          <button>+ Add Catalog</button>
        </Link>
      </div>

      <div className="collection">
        {items.map((catalog) => {
          return (
            <div className="card">
              <h3>{catalog.title}</h3>
              <p>{catalog.description}</p>
              <Link to={`/catalogs/catalog/${catalog._id}`}>
                <button>Check Items in this catalog</button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllCatalogsPage;
