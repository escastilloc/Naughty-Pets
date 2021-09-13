import React, { createContext, useState } from "react";

import db from "../firebase/config";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartId, setCartId] = useState(null);
  const [cartDetail, setCartDetail] = useState(null);
  const [cartTotal, setCartTotal] = useState(0);

  const cartAdd = async (productId, productName, quantity, productPrice) => {
    if (!cartId) {
      const newCart = await db
        .collection("cart")
        .add({ detail: [{ productId, productName, quantity, productPrice }] });
      setCartId(newCart.id);
      await cartRefresh(newCart.id);
    } else {
      const docCart = await db.collection("cart").doc(cartId).get();
      const docCartDetail = validateItem(docCart.data().detail, {
        productId,
        productName,
        quantity,
        productPrice,
      });
      await db.collection("cart").doc(cartId).set({ detail: docCartDetail });
      await cartRefresh(cartId);
    }
  };

  const validateItem = (doc, data) => {
    const result = doc.filter((item) => item.productId === data.productId);
    if (result.length > 0) {
      const editedArray = doc.map((item) =>
        item.productId === data.productId
          ? {
              productId: item.productId,
              productName: item.productName,
              quantity: data.quantity,
              productPrice: item.productPrice,
            }
          : item
      );
      return editedArray;
    } else {
      doc.push(data);
      return doc;
    }
  };

  const cartRefresh = async (id) => {
    const docCart = await db.collection("cart").doc(id).get();
    const docCartDetail = docCart.data().detail;
    setCartDetail(docCartDetail);
    cartTotalize(docCartDetail);
  };

  const cartTotalize = async (detail) => {
    let total = 0;
    detail.forEach((item) => (total += item.quantity * item.productPrice));
    setCartTotal(total);
  };

  const getProductFromCartById = (productId) => {
    let quantity = 1;
    if (cartDetail) {
      const cartItem = cartDetail.filter(
        (item) => item.productId === productId
      );
      if (cartItem.length > 0) {
        quantity = cartItem[0].quantity;
      }
    }
    return quantity;
  };

  const deleteProductFromCart = async (productId) => {
    const filteredArray = cartDetail.filter(
      (item) => item.productId !== productId
    );
    if (filteredArray.length === 0) {
      await deleteCart();
    } else {
      await db.collection("cart").doc(cartId).set({ detail: filteredArray });
      await cartRefresh(cartId);
    }
  };

  const deleteCart = async () => {
    await db.collection("cart").doc(cartId).delete();
    setCartDetail(null);
    setCartId(null);
  };

  const payCart = async () => {
    await deleteCart();
  };

  return (
    <CartContext.Provider
      value={{
        cartAdd,
        cartDetail,
        cartTotal,
        getProductFromCartById,
        deleteProductFromCart,
        deleteCart,
        payCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
export default CartContext;
