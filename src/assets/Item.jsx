import React, { useState } from 'react';
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import './Item.css'; // Importa el archivo CSS

const Item = ({ nombre, precio, imagen, id }) => {
  const [mostrarLoader, setMostrarLoader] = useState(true);

  const handleImageLoad = () => {
    setMostrarLoader(false);
  };

  return (
    <Card maxW='sm' className={`item-card ${mostrarLoader ? 'loading' : ''}`}>
      <CardBody>
        {mostrarLoader && <Loader />}
        <Image
          src={imagen}
          onLoad={handleImageLoad}
          className={mostrarLoader ? 'hidden' : 'visible'}
        />
        <Stack mt='6' spacing='5'>
          <Heading size='md'>{nombre}</Heading>
          <Text color='blue.600' fontSize='2xl'>
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            <Link id="botonItem" to={`/product/${id}`}>Ver Detalles</Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Item;
