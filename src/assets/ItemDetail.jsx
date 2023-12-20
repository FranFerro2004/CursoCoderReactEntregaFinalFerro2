import React, { useState, useContext } from 'react';
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';
import ItemQuantitySelector from './ItemQuantitySelector';
import { CartContext } from '../context/CartContex';

const ItemDetail = ({ id, nombre, descripcion, precio, imagen }) => {

    const {agregarAlCarrito} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0);

    const subirAlContext = () => agregarAlCarrito(id, cantidad, nombre, precio, imagen, descripcion)

    const sumarProducto = () => {
        const suma = cantidad + 1;
        setCantidad(suma);
    };

    const restarProducto = () => {
        const nuevaCantidad = Math.max(cantidad - 1, 0);
        setCantidad(nuevaCantidad);
    };

    return (
        <Card maxW="sm">
        <CardBody>
            <Image src={imagen} />
            <Stack mt="6" spacing="5">
            <Heading size="md">{nombre}</Heading>
            <Text color="blue.600" fontSize="2xl">
                ${precio}
            </Text>
            <Text color="blue.600" fontSize="2xl">
                {descripcion}
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ItemQuantitySelector sumarProducto={sumarProducto} restarProducto={restarProducto} cantidad={cantidad} />
            <ButtonGroup spacing="2">
            <Button variant="ghost" colorScheme="blue" onClick={subirAlContext}>
                Agregar al carrito
            </Button>
            </ButtonGroup>
        </CardFooter>
        </Card>
    );
};

export default ItemDetail;


