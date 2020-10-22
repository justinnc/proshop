import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CardScreen from "./screens/CartScreen";
import loginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";

const MainApp = () => {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: {
      opacity: 0,
      transform: "translate3d(100%, 0, 0)",
    },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },

    unique: true,
    reset: true,
  });

  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={location}>
        <Route path="/order/:id" component={OrderScreen} exact />
        <Route path="/payment" component={PaymentScreen} exact />
        <Route path="/placeorder" component={PlaceOrderScreen} exact />
        <Route path="/shipping" component={ShippingScreen} exact />
        <Route path="/login" component={loginScreen} exact />
        <Route path="/register" component={RegisterScreen} exact />
        <Route path="/profile" component={ProfileScreen} exact />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CardScreen} />
        <Route path="/" component={HomeScreen} exact />
      </Switch>
    </animated.div>
  ));
};

export default MainApp;
