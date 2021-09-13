import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

const CategoryItem = ({ item }) => {
  const { id, name, price, thumb } = item;
  return (
    <div className="category-item">
      <Link to={`/product/${id}`}>
        <div className="category-item-img">
          <img src={thumb} alt="" />
        </div>
        <div className="category-item-name">{name}</div>
        <NumberFormat
          value={price}
          className="category-item-price"
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </Link>
    </div>
  );
};

export default CategoryItem;
