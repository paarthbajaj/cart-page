import { Link } from "react-router-dom";

const Cart = ({ cart, SetCart }) => {
  const removeFromCart = (item) => {
    SetCart(cart.filter((cartItem) => cartItem !== item));
  };

  return (
    <div>
      <div className="cartNav">
        <h2>Cart Page</h2>
        <h2>
          <Link to="/">Home</Link>
        </h2>
      </div>

      {cart.length > 0 ? (
        cart.map((item) => {
          return (
            <div className="product-item">
              <img className="product-list-img" src={item.url}></img>
              <div className="product-detail">
                <p>{item.company}</p>
                <h4>{item.product}</h4>
                <span>{item.cost}</span>
                <div className="mouse-over">
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h4>No items in the cart</h4>
      )}
    </div>
  );
};
export default Cart;
