import React from "react";
import Navbar from "../components/Navbar";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

export default function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="first-row">
          <h1>Lorem ipsum</h1>
        </div>
      </div>
    </>
  );
}
