import { useContext } from "react";
import { CartContext } from "../contexts/ContextProvider";
import CartProduct from "../components/CartProduct";
import { totalItems, totalPrice } from "../contexts/CartReducer";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-8">
          {cart.map((p) => (
            <CartProduct key={p.id} product={p} />
          ))}
        </div>
        <div className="col-4">
          <div className="bg-dark p-3 text-white">
            <h5>Total items: {totalItems(cart)}</h5>
            <h5>Total price:${totalPrice(cart)} </h5>
            <button className="btn btn-warning">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
