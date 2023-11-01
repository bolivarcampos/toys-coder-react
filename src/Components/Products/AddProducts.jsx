import React, { useState } from "react";

export const AddProducts = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImg, setProductImg] = useState(null);
  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg"];

  const productImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImg(selectedFile);
      setError("");
    } else {
      setProductImg(null);
      setError("Por favor seleccione una imagen válida png o jpeg");
    }
  };

  const addProduct = (e) => {
    e.preventDefault();
    console.log(productName, productPrice, productImg);
  };

  return (
    <div className="container">
      <br />
      <h2>Agrega Productos</h2>
      <hr />
      <form autoComplete="off" className="form group" onSubmit={addProduct}>
        <label htmlFor="product-name">Nombre Producto</label>
        <br />
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />

        <br />
        <label htmlFor="product-price">Precio Producto</label>
        <br />
        <input
          type="number"
          className="form-control"
          required
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        <br />
        <label htmlFor="product-img">Imagen de Producto</label>
        <br />
        <input
          type="file"
          className="form-control"
          onChange={productImgHandler}
        />
        <br />
        <button className="btn btn-success btn-md mybtn">Agregar</button>
      </form>
      {error && <span>{error}</span>}
    </div>
  );
};
