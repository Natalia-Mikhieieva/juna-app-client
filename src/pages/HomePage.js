import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterItems from "./FilterItems";
import { useState } from "react";

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
          <h1>Lorem ipsum</h1>
        </div>
        <FilterItems filterItems={filterItems}></FilterItems>
      </div>
      <Footer> </Footer>
    </>
  );
}
export default HomePage;
