import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import ItemListContainer from "./assets/ItemListContainer";
import React from "react";
import ItemDetailContainer from "./assets/ItemDetailContainer";
import FormCompra from "./assets/FormCompra";
import NavBar from "./assets/NavBar";
import CartProvider from "./context/CartContex";
import Cart from "./assets/Cart";
import CartWidget from "./assets/CartWidget";

const App = () => {

  return (

    <BrowserRouter>

    <NavBar/>

    <CartProvider>

    <Routes>

    <Route exact path='/' element={<ItemListContainer/>} />
    
    <Route exact path='/product/:id' element={<ItemDetailContainer/>}/>

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
