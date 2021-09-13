import { Route, Switch } from "react-router-dom";
import Home from "../../Home";
import Category from "../../Category";
import Product from "../../Product";
import Cart from "../../CartComponent";

import "./styles.scss";

const Content = () => {
  return (
    <div className="content">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category/:id" exact component={Category} />
        <Route path="/product/:id" exact component={Product} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </div>
  );
};

export default Content;
