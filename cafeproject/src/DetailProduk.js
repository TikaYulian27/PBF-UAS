import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class DetailProduk extends Component {
    render() {
      return (
        <div>
          <h2>Detail</h2>
          <p></p>

          <div class="card-deck">
  <div class="card">
  <img class="card-img-top" src="https://images.pexels.com/photos/734983/pexels-photo-734983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Card image cap"/>
    <a>
      <div class="mask rgba-white-slight"></div>
    </a>
  <div class="card-body card-body-cascade">
    <h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i> Price Rp 20.000</h5>
    <h4 class="font-weight-bold card-title">Kopi Lemon</h4>
    <p class="card-text">Salah satu kopi khas di cafe ini. Kopi murni yang tersaring berkali-kali.
    tanpa gula, sehingga aman bagi penyandang diabetes dengan sedikit aroma lemon.</p>
    <Link to="/DetailProduk" class="black-text d-flex justify-content-left">
    <a class="btn btn-unique">Buy it</a>
   </Link>
  </div>
  </div>
  </div>

        </div>
      );
    }
  }

export default DetailProduk;