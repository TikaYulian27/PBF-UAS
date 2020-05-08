// Step 3
// Membuat menu yang menampilkan content
// tanpa harus mereload seluruh halaman website
import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Contact from "./Contact";
import Admin from "./Admin";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Délicioso Café</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Product">Product</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/admin">Admin</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Product" component={Product}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/admin" component={Admin}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;