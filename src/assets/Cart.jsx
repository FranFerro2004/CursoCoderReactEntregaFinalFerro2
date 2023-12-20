import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContex';
import { Card, Image, Stack, CardBody, Text, CardFooter, Button, Heading, WrapItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { carrito, eliminarDelCarrito, precioTotalCarrito } = useContext(CartContext);

    const eliminarDeContext = (nombre) => () => eliminarDelCarrito(nombre);

    useEffect(() => {
        console.log(carrito)
    }, [carrito])

    return (
        <div>
            {carrito?.map((p) => {
                return (
                    <Card key={p.id} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
                        <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={p.imagen} />

                        <Stack>
                            <CardBody>
                                <Heading size='md'>{p.nombre}</Heading>
                                <Text py='2'>{p.descripcion}</Text>
                            </CardBody>

                            <CardFooter>
                                <Button variant='solid' colorScheme='blue' onClick={eliminarDeContext(p.nombre)}>
                                    Eliminar Producto
                                </Button>

                                <Text>x{p.cantidad}</Text>
                            </CardFooter>
                        </Stack>
                    </Card>
                );
            })}

            <WrapItem>
                <Link to="/form">
                    <Button colorScheme='gray' type='submit' id="botonEnviar">
                        Ir a la Orden de Compra
                    </Button>
                </Link>
            </WrapItem>

            <Text mt="4" fontWeight="bold">
                Precio Total: {precioTotalCarrito}
            </Text>
        </div>
    );
};

export default Cart;
