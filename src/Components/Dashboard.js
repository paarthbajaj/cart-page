import ProductList from "./ProductList";
import { Link } from "react-router-dom";
const Dashboard = ({ clickHandler }) => {
  return (
    <div>
      <nav className="navbarContainer">
        <div className="navbar">
          <h1 className="logo">FLIPKART</h1>
          <span className="nav-link">
            <Link to="/cart">Cart</Link>
          </span>
        </div>
      </nav>
      <div>
        <ProductList clickHandler={clickHandler} />
      </div>
    </div>
  );
};
export default Dashboard;
