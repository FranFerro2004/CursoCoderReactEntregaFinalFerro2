import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import ItemListContainer from "./assets/ItemListContainer";
import React from "react";
import ProductDetailContainer from "./assets/ProductDetailContainer";
import FormCompra from "./assets/FormCompra";
import NavMenu from "./assets/NavMenu";
import CartProvider from "./context/CartContex";
import Cart from "./assets/Cart";
import CartWidget from "./assets/CartWidget";

const App = () => {

  return (

    <BrowserRouter>

    <NavMenu/>

    <CartProvider>

    <Routes>

    <Route exact path='/' element={<ItemListContainer/>} />
    
    <Route exact path='/product/:id' element={<ProductDetailContainer/>}/>

    <Route exact path='/category/:category' element={<ItemListContainer/>} />

    <Route exact path="/form" element={<FormCompra/>} />

    <Route exact path="/cart" element={<Cart/>} />

    <Route exact path="/CartWidget" element={<CartWidget/>}/>

    </Routes>

    </CartProvider>

    </BrowserRouter>
  );
}

export default App;
