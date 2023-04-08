import { React, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

function HomePage() {
  const [items, setItems] = useState([]);

  function filterItems(str) {
    let filterItems = items.filter((furniture) => {
      return furniture.category === str;
      // comparing category for displaying data
    });
    setItems(filterItems);
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="first-row">
          <h1>Great style is easy.</h1>
          <h5>The best way to buy beautiful modern furniture.</h5>

          <Link to="/allcatalogs">
            <button className="welcome-btn">Shop best sellers</button>
          </Link>
          <Link to="/wholecatalog">
            <button className="welcome-btn"> See our full catalog</button>
         </Link>
        </div>
      </div>
      
      <Footer> </Footer>
    </>
  );
}
export default HomePage;
