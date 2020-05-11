import React, { Component } from 'react';
import firebase from "firebase";
import firebaseConfig from "./Config";
import { Link } from 'react-router-dom';
import DetailProduk from "./DetailProduk";

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

                <div class="card" style={{ width: '23.2rem' }}>
                    <img src={listProduk.image} class="card-img-top" alt="Card image cap"></img>
                    <div class="card-body">
                        <center><h5 class="card-title" style={{ fontFamily: 'arial' }}>{listProduk.title}</h5></center>
                        <p class="card-text">{listProduk.body}</p>
                        <p>{listProduk.price}</p>
                        <center><Link to="/DetailProduk">
                        <a className ="btn btn-black" >Detail Product</a></Link></center>
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