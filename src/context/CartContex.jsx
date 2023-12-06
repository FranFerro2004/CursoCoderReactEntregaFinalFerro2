import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    carrito: [],
    cantidadTotalProductos: 0,
})

export const CartProvider = ({
    children}) => {

        const [carrito, setCarrito] = useState([])

        const cantidadTotalProductos = carrito.length;

        const agregarAlCarrito = (id, cantidad, nombre, precio, imagen, descripcion) => {
            if (cantidad > 0) {
            
                const productoExistente = carrito.find((producto) => producto.id === id);
            
                if (productoExistente) {
                    
                    const nuevoCarrito = carrito.map((producto) =>
                    producto.id === id ? { ...producto, cantidad: producto.cantidad + cantidad } : producto
                    );
                    setCarrito(nuevoCarrito);
                } else {

                    const nuevoProducto = { id, nombre, precio, cantidad, imagen, descripcion};
                    setCarrito([...carrito, nuevoProducto]);
                }
            
            }
            
        };

        const eliminarDelCarrito = (nombre) => {
            const nuevoCarrito = carrito.filter((producto) => producto.nombre !== nombre);
            setCarrito(nuevoCarrito);
        }; 

        return(
            <>
                <CartContext.Provider value={{agregarAlCarrito, carrito, eliminarDelCarrito, cantidadTotalProductos}}>
                    {children}
                </CartContext.Provider>
            </>
        )
    }

export default CartProvider