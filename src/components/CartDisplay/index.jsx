import { useContext } from "react";
import { useHistory } from "react-router-dom";

import CartContext from "../../context/CartContext";
import "./styles.scss";

const CartButton = () => {
  const history = useHistory();
  const { cartDetail } = useContext(CartContext);

  const displayCart = () => {
    history.push("/cart");
  };

  return (
    <div className="cart-display" onClick={displayCart}>
      <i className="fas fa-shopping-cart"></i>
      {cartDetail && (
        <div className="cart-display-items">{cartDetail.length}</div>
      )}
    </div>
  );
};

export default CartButton;
