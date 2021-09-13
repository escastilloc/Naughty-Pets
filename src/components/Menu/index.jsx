import { useContext } from "react";
import { Link } from "react-router-dom";

import DataContext from "../../context/DataContext";
import "./styles.scss";

const Menu = () => {
  const { categories } = useContext(DataContext);

  return (
    <div className="menu">
      <div className="menu-item">
        <Link to="/">Home</Link>
      </div>
      {categories.map((category, index) => (
        <div key={index} className="menu-item">
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
