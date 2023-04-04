import Navbar from "../components/Navbar";
import Title from "../components/Title";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

export default function CartPage() {
  return (
    <>
      <Navbar> </Navbar>
      <Title text="This is cart page. Here you can see your products"> </Title>
      <button className="btn">Proceed to checkout</button>
      <div className="LoginPage"></div>
    </>
  );
}
