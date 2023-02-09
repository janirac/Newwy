import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import ProductShowPage from "./components/ProductShowPage";


function App() {
  
  const location = useLocation()
  const locationLoginOrSignUp = location.pathname !== "/login" && location.pathname !== "/signup"

  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/signout'>
            
          </Route>
          <Route path="/products/:productId">
            <ProductShowPage />
          </Route>
        </Switch>
          {locationLoginOrSignUp && 
            <Footer />
          }
    </>
  );
}

export default App;