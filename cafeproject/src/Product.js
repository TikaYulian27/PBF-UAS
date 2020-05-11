import React, { Component } from 'react';
import firebase from "firebase";
import firebaseConfig from "./Config";
import { Link } from 'react-router-dom';
import Transaction from "./Transaction";

import 'bootstrap/dist/css/bootstrap.min.css';
 
class Product extends Component {

  constructor(props){
    super(props);
    firebase.initializeApp(firebaseConfig);

    this.state = {
        listProduk: []
    }
    }

    ambilDataDariServerAPI = () => {                // fungsi untuk mengambil data dari API dengan penambahan sort dan order
      let ref = firebase.database().ref("/");
      ref.on("value", snapshot => {
          const state = snapshot.val();
          this.setState(state);   
      })
  }

    componentDidMount() {       // komponen untuk mengecek ketika compnent telah di-mount-ing, maka panggil API
      this.ambilDataDariServerAPI()  // ambil data dari server API lokal
  }

  render() {
    let productList = this.state.listProduk.map(listProduk => {
    return (
        // <h2>Product</h2>
        // <p></p>
        // <p> Hidup ini seperti "kopi" yang diciptakan dengan komposisi sedikit pahit dan sedikit manis.
        //   Menciptakan berjuta inspirasi, bisa juga sebagai penenang hati di kala kenangan lama mulai menghampiri.
        //   Tersedia menu spesial untuk para penikmat kopi.
        //   Bukan hanya sekedar kopi, kopi disini dibuat dengan sepenuh hati.
        //   </p>

        <div class="ml-5 ml-lg-2">
                <div class="card" style={{ width: '23.2rem' }}>
                    <img src={listProduk.image} class="card-img-top" alt="Card image cap"></img>
                    
                    <a>
                        <div class="mask rgba-white-slight"></div>
                    </a>

                    <div class="card-body card-body-cascade">
                    
                        <h5 class="pink-text pb-2 pt-1"><i class="fas fa-coffee"></i> Price {listProduk.price}</h5>
                        <h4 class="font-weight-bold card-title">{listProduk.title}</h4>
                        <p class="card-text">{listProduk.body}</p>
                        <p>{listProduk.price}</p>
                        <center><Link to="/Transaction">
                        <a class ="btn btn-unique" >Order now</a></Link></center>

                    </div>
                </div>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="box">
                    <div class="row">
                        {productList}
                    </div>
                </div>
            </div>
            
        )
       
    }
}
 
export default Product;