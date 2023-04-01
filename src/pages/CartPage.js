import Navbar from "../components/Navbar";
import "../styles/CartPage.css";
import Title from "../components/Title";

function CartPage(props) {
  return (
    <>
      <Navbar> </Navbar>
      <Title text="This is cart page. Here you can see your products"> </Title>
      <button>Proceed to checkout</button>
      <div className="LoginPage"></div>
    </>
  );
}

export default CartPage;
