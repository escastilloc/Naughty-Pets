import React, { createContext, useState, useEffect } from "react";

import db from "../firebase/config";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      setLoading(true);

      const dataCategories = await db
        .collection("categories")
        .orderBy("order")
        .get();
      const itemListCategories = [];
      dataCategories.docs.forEach((res) =>
        itemListCategories.push({ id: res.id, ...res.data() })
      );
      setCategories(itemListCategories);

      const dataProducts = await db.collection("products").get();
      const itemListProducts = [];
      dataProducts.docs.forEach((res) =>
        itemListProducts.push({ id: res.id, ...res.data() })
      );
      setProducts(itemListProducts);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategoryById = (categoryId) => {
    return categories.filter((category) => category.id === categoryId)[0];
  };

  const getProductById = (productId) => {
    return products.filter((product) => product.id === productId)[0];
  };

  const getProductsByCategoryId = (categoryId) => {
    return products.filter((product) => product.categoryId === categoryId);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        loading,
        categories,
        products,
        getCategoryById,
        getProductById,
        getProductsByCategoryId,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider };
export default DataContext;
