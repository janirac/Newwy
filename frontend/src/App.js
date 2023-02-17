import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import ProductShowPage from "./components/ProductShowPage";
import ProductIndexPage from "./components/ProductIndexPage"
import ProductSlider from "./components/ProductSlider";
import Favorites from "./components/Favorites";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./components/Loading/loading";


function App() {
  
  const [loaded, setLoaded] = useState(false)
  
      useEffect(() => {
          setTimeout(() => {
            setLoaded(true);
          }, 2000);
      }, []);

  const location = useLocation()
  const locationLoginOrSignUp = location.pathname !== "/login" && location.pathname !== "/signup"

  return (
    <div>
      <Navigation />
      {!loaded ? (
        <Loading />
      ) : (
        <div>
          <Switch>
            <Route exact path="/">
              <Hero />
              <ProductSlider />
            </Route>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route path="/profile">
              <Favorites />
            </Route>
            <Route path="/products/:productId">
              <ProductShowPage />
            </Route>
            <Route path="/hotstuff">
              <ProductIndexPage />
            </Route>
            <Route path="/trending">
              <ProductIndexPage />
            </Route>
            <Route path="/eventsoccasions">
              <ProductIndexPage />
            </Route>
          </Switch>
          {locationLoginOrSignUp && <Footer />}
        </div>
      )}
    </div>
  );
  
}

export default App;