import { useContext } from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

import CartContext from "../../context/CartContext";
import "./styles.scss";

const Cart = () => {
  const { cartDetail, cartTotal, deleteProductFromCart, deleteCart, payCart } =
    useContext(CartContext);

  return (
    <div className="cart layout">
      <div className="title">Carro de compras</div>
      <div className="detail animate__animated animate__fadeIn">
        {cartDetail ? (
          <div className="cart-detail">
            <div className="cart-table">
              <div className="cart-table-header">
                <div className="cart-table-header-item">Cantidad</div>
                <div className="cart-table-header-item">Producto</div>
                <div className="cart-table-header-item">Unitario</div>
                <div className="cart-table-header-item">Total</div>
              </div>
              <div className="cart-table-detail scroll">
                {cartDetail.map((cartItem, index) => (
                  <div key={index} className="cart-table-detail-item">
                    <div className="cart-table-detail-quantity">
                      <i
                        className="fas fa-trash-alt"
                        onClick={() =>
                          deleteProductFromCart(cartItem.productId)
                        }
                      ></i>
                      <span>{cartItem.quantity}</span>
                    </div>
                    <div className="cart-table-detail-product">
                      <Link to={`/product/${cartItem.productId}`}>
                        {cartItem.productName}
                      </Link>
                    </div>
                    <div className="cart-table-detail-price">
                      <NumberFormat
                        value={cartItem.productPrice}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                    </div>
                    <div className="cart-table-detail-price">
                      <NumberFormat
                        value={cartItem.productPrice * cartItem.quantity}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="cart-total">
              Total a pagar&nbsp;
              <NumberFormat
                value={cartTotal}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </div>
            <div className="cart-buttons">
              <button id="cart-pay" onClick={payCart}>
                <i className="fas fa-dollar-sign"></i>
                <span>Pagar</span>
              </button>
              <button id="cart-clean" onClick={deleteCart}>
                <i className="fas fa-trash-alt"></i>
                <span>Limpiar carro</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="cart-empty">Aun no ha seleccionado productos</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
