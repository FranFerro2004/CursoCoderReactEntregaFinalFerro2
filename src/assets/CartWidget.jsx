import React, { useContext, useEffect } from 'react';
import { Badge } from '@chakra-ui/react'
import shoppingCartImage from '../../public/imagenes/shopping-cart.png'
import './CartWidget.css'
import { CartContext } from '../context/CartContex';


const CartWidget = () => {
    const { cantidadTotalProductos } = useContext(CartContext);

    useEffect(() => {
        console.log(cantidadTotalProductos);
    }, [cantidadTotalProductos]);

    return (
        <div>
            <img className="shoppingCartImagen" src={shoppingCartImage} height="20px" alt="Shopping Cart" />
            <Badge>{cantidadTotalProductos}</Badge>
        </div>
    );
}


export default CartWidget;
