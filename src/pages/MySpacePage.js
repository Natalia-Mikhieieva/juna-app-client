import Navbar from "../components/Navbar";
import Title from "../components/Title";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

export default function CartPage() {
  return (
    <>
      <Navbar> </Navbar>
      <Title text="This is user information page"> </Title>
      <button className="btn">Edit user' information</button>
      <div className="LoginPage"></div>
    </>
  );
}
