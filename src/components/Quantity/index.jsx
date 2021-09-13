import { useState, useEffect } from "react";

import "./styles.scss";

const Quantity = ({ min, max, feedbackState, num, disabled }) => {
  const [quantity, setQuantity] = useState(min);

  useEffect(() => {
    if (num) setQuantity(num);
  }, [num]);

  const quantityAdd = (number) => {
    if ((number < 0 && quantity > min) || (number > 0 && quantity < max)) {
      setQuantity(quantity + number);
      feedbackState(quantity + number);
    }
  };

  return (
    <div className="quantity">
      <button
        className="quantity-button-left"
        onClick={() => quantityAdd(-1)}
        disabled={disabled}
      >
        -
      </button>
      <div className="quantity-value">{quantity}</div>
      <button
        className="quantity-button-right"
        onClick={() => quantityAdd(1)}
        disabled={disabled}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
