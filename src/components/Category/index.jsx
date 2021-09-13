import { useContext } from "react";
import { useParams } from "react-router";

import DataContext from "../../context/DataContext";
import CategoryItem from "./item";

import "./styles.scss";

const Category = () => {
  let { id } = useParams();
  const { getCategoryById, getProductsByCategoryId } = useContext(DataContext);

  const { name } = getCategoryById(id);

  return (
    <div className="category layout">
      <div className="title">{name}</div>
      <div className="detail scroll animate__animated animate__fadeIn">
        {getProductsByCategoryId(id).map((product, index) => (
          <CategoryItem key={index} item={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
