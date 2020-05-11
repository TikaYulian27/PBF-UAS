import React from "react";

const ListProduk = (props) => {
    return (

 
            <div class="view view-cascade gradient-card-header pink-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">
            <table class="table table-striped">

            <table class="table table-striped table-responsive-md btn-table">

<thead>
  <tr>
    <th>Product</th>
    <th>Price</th>
    <th>Description of Product</th>
    <th>Picture</th>
    <th>Action</th>
  </tr>
</thead>

<tbody>
 
  <tr>
    <td>{props.judul}</td>
    <td>{props.price}</td>
    <td>{props.isi}</td>
    <td><img src={props.image} width="50px"/></td>
    <td><a className="btn btn-red btn-rounded btn-sm m-0" 
    onClick={() => { if (window.confirm('Apakah anda yakin menghapus produk ini?')) 
    props.hapusProduk(props.idProduk)}}> Delete</a></td>
  </tr>
</tbody>

</table>


              
            </table>
            </div>
    
    )
}
export default ListProduk;