import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/signIn-and-signUp/signIn-and-signUp.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSesstion } from "./redux/user/user.action";

const App = ({ checkUserSesstion, currentUser }) => {
  useEffect(() => {
    checkUserSesstion();
  }, [checkUserSesstion]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route exact path="/checkout" component={CheckoutPage}></Route>
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        ></Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSesstion: () => dispatch(checkUserSesstion()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
