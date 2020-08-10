import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery";
import "bootstrap/js/dist/modal";
import Nav from "./nav/Nav";
import Home from "./pages/Home";
//import Countries from './pages/Countries';
import Login from "./pages/Login";
import Thankyou from "./pages/Thankyou";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoginProvider } from "./shared/loginContext";
import Products from "./pages/Products";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Route path="/" exact component={Home} />
        <LoginProvider>
          <Route path="/login" component={Login} />
          <Route path="/thank-you" component={Thankyou} />
        </LoginProvider>
        <Route path="/Products" component={Products}></Route>
      </div>
    </Router>
  );
}

export default App;
