import "../src/styles/App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import AllCatalogsPage from "./pages/AllCatalogsPage";
import ItemPage from "./pages/ItemPage";
import AddItemPage from "./pages/AddItemPage";
import CartPage from "./pages/CartPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AddCatalogPage from "./pages/AddCatalogPage";
import ErrorPage from "./pages/ErrorPage";
import EditItemPage from "./pages/EditItemPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allcatalogs/:catalogId" element={<CatalogPage />} />
        <Route path="/allcatalogs" element={<AllCatalogsPage />} />
        <Route path="/allcatalogs/add-catalog" element={<AddCatalogPage />} />
        <Route path="/item/:itemId" element={<ItemPage />} />
        <Route path="/item/:itemId/edit" element={<EditItemPage />} />
        <Route path="/item/add-item" element={<AddItemPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
