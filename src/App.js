import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { AddProducts } from "./Components/Products/AddProducts";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home}>
            {"Home"}
          </Route>
          <Route path="addproducts" Component={AddProducts} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
