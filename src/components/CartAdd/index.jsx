import { useHistory } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import CartContext from "../../context/CartContext";
import Quantity from "../Quantity";

import "./styles.scss";

const CartAdd = ({ product }) => {
  const history = useHistory();
  const { id: productId, name: productName, price } = product;

  const minQuantity = 1;
  const maxQuantity = 10;

  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(minQuantity);
  const { cartAdd, getProductFromCartById } = useContext(CartContext);

  useEffect(() => {
    setQuantity(getProductFromCartById(productId));
  }, [getProductFromCartById, productId]);

  const addProductCart = async () => {
    setAdded(true);
    await cartAdd(productId, productName, quantity, price);
    history.goBack();
  };

  return (
    <div className="cart-add">
      <Quantity
        min={minQuantity}
        max={maxQuantity}
        num={quantity}
        feedbackState={setQuantity}
        disabled={added}
      />
      <button
        className="cart-add-button"
        onClick={addProductCart}
        disabled={added}
      >
        {!added ? (
          <i className="fas fa-shopping-cart"></i>
        ) : (
          <i className="fas fa-spinner rotate"></i>
        )}
        {!added ? <span>Agregar al carro</span> : <span>Agregando...</span>}
      </button>
      <button className="cart-add-back" onClick={() => history.goBack()}>
        <i className="fas fa-chevron-left"></i>
        <span>Volver</span>
      </button>
    </div>
  );
};

export default CartAdd;
