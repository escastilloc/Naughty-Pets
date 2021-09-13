import { useContext } from "react";
import { useParams } from "react-router";
import NumberFormat from "react-number-format";
import CartAdd from "../CartAdd";

import DataContext from "../../context/DataContext";
import "./styles.scss";

const Product = () => {
  let { id } = useParams();
  const { getCategoryById, getProductById } = useContext(DataContext);

  const { categoryId, name, description, price, thumb } = getProductById(id);
  const { name: categoryName } = getCategoryById(categoryId);

  return (
    <div className="product layout">
      <div className="title">{categoryName}</div>
      <div className="detail animate__animated animate__fadeIn">
        <div className="product-item">
          <div className="product-item-img">
            <img src={thumb} alt="" />
          </div>
          <div className="product-item-name">{name}</div>
          <div className="product-item-description">{description}</div>
          <div className="product-item-line">
            <NumberFormat
              value={price}
              className="product-item-price"
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            <CartAdd product={{ id, name, price }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
