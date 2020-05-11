// Step 3
// Membuat menu yang menampilkan content
// tanpa harus mereload seluruh halaman website
import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Contact from "./Contact";
import Admin from "./Admin";
import DetailProduk from "./DetailProduk";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Online Art Exhibition</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Product">Creation</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/admin">Admin</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Product" component={Product}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/admin" component={Admin}/>
            <Route path="/DetailProduk" component={DetailProduk} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;