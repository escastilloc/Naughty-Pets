import { useContext } from "react";
import { HashRouter as Router } from "react-router-dom";

import CoverLoading from "../components/Loading/cover";
import Nav from "../components/app/NavComponent";

import DataContext from "../context/DataContext";
import Content from "../components/app/Content";

import "../styles/app.scss";

const AppRouter = () => {
  const { loading } = useContext(DataContext);
  return loading ? (
    <CoverLoading />
  ) : (
    <div className="app">
      <Router>
        <Nav />
        <Content />
      </Router>
    </div>
  );
};

export default AppRouter;
