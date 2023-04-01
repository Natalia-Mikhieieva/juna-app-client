import "../src/styles/App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import ItemPage from "./pages/ItemPage";
import ErrorPage from "./pages/ErrorPage";
import AddItemPage from "./pages/AddItemPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import AllCatalogsPage from "./pages/AllCatalogsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/allcatalogs" element={<AllCatalogsPage />} />
        <Route path="/catalog/item/:id" element={<ItemPage />} />
        <Route path="/catalog/add-item" element={<AddItemPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
