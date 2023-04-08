import Navbar from "../components/Navbar";
import Title from "../components/Title";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

export default function CartPage() {
  return (
    <>
      <Navbar> </Navbar>
      <Title text="Your selected products"> </Title>
      <div className="cart-page"> <p>The cart is empty </p></div>
      
    </>
  );
}
