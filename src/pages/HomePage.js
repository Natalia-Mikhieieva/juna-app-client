import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterItems from "./FilterItems";
import { useState } from "react";

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
    <Footer>  </Footer>
    </>
  );
}
export default HomePage;