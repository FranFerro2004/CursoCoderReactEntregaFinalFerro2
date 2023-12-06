import React from 'react';
import { Flex, Box, Button, Spacer } from '@chakra-ui/react';

const SelectorCantidad = ({ cantidad, sumarProducto, restarProducto }) => {
    return (
        <div>
        <Flex>
            <Box p='4' >
            <Button colorScheme='blue' onClick={sumarProducto}>+</Button>
            </Box>
            <Spacer />
            <Box p='4'>
            <div>
                <h1>{cantidad}</h1>
            </div>
            </Box>
            <Spacer />
            <Box p='4' >
            <Button colorScheme='blue' onClick={restarProducto}>-</Button>
            </Box>
        </Flex>
        </div>
    );
};

export default SelectorCantidad;
