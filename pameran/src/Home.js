// Step 4
// Membuat content dari setiap menu

//import all libraries
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Selamat Datang</h2>
        <p></p>
        <p>Délicioso Café menyajikan beragam menu spesial, teruntuk kamu pecinta kopi.
          Terbuat diri biji kopi pilihan terbaik, dibuat oleh barista terbaik, sehingga tercipta rasa terbaik
          yang belum pernah Anda rasakan sebelumnya. Tidak hanya mengandalkan product, kami juga memaksimalkan
          interior cafe demi kenyamanan Anda semua. Karena kepuasan Anda, prioritas kami. Loyalitas Anda, totalitas kami.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <p2>
          Kami persilahkan untuk berkunjung ke kedai kami <br></br>
          Délicioso Café<br></br>
          Jl. Iswahyudi No.05 Tulungagung
        </p2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

<div class="card-deck">
    <Link to="/Product" class="black-text d-flex justify-content-left">
      <a class="btn btn-brown"><i class="fas fa-clone left"></i>Order here</a>
   </Link>
  </div>
  </div>
  );

  }
}
 
export default Home;