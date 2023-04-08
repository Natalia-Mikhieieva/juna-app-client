import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import service from "../api/service";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

function AllCatalogsPage() {
  const [catalogs, setCatalogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/allcatalogs`)
      .then((response) => {
        setCatalogs(response.data);
      })
      .catch((err) => console.log(err));
    service
      .getCatalogs()
      .then((data) => {
        setCatalogs(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Title text="All Collections are displayed here "></Title>
      <div className="button-group">
        <Link to={`/allcatalogs/add-catalog`}>
          <button className="outlined-btn">+ Add Catalog</button>
        </Link>
      </div>

      <div className="collection">
        {catalogs &&
          catalogs.map((catalog) => (
            <div key={catalog._id} className="one-catalog">
              <h5>{catalog.title}</h5>
              <p> {catalog.description}</p>
              <img src={catalog.imageUrl} alt="catalog-img" />
              <Link to={`/allcatalogs/${catalog._id}`}>
                <button className="outlined-btn">Check Items</button>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default AllCatalogsPage;
