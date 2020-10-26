import React from "react";
import {
  Route,
  Switch,
  useHistory,
  useParams,
  useLocation,
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import loginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";

const routes = [
  { path: "/", Component: HomeScreen },
  { path: "/cart/:id", Component: CartScreen },
  { path: "/product/:id", Component: ProductScreen },
  { path: "/profile", Component: ProfileScreen },
  { path: "/register", Component: RegisterScreen },
  { path: "/login", Component: loginScreen },
  { path: "/shipping", Component: ShippingScreen },
  { path: "/placeorder", Component: PlaceOrderScreen },
  { path: "/payment", Component: PaymentScreen },
  { path: "/order/:id", Component: OrderScreen },
];

const MainApp = () => {
  let location = useLocation();
  let history = useHistory();
  let match = useParams();

  return routes.map(({ path, Component }) => (
    <Route key={path} exact path={path}>
      {({ match }) => (
        <CSSTransition
          in={match != null}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          <div className="page">
            <Component location={location} history={history} match={match} />
          </div>
        </CSSTransition>
      )}
    </Route>
  ));
};

export default MainApp;
