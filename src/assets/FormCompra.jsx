import React, { useContext, useEffect, useState } from 'react';
import { FormControl, FormLabel, Input, FormHelperText, WrapItem, Button } from '@chakra-ui/react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { CartContext } from '../context/CartContex';

const Form = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [confirmarEmail, setConfirmarEmail] = useState('')
    const [idOrden,setIdOrden] = useState(null)
    const [error, setError] = useState('')

    const { carrito, precioTotalCarrito } = useContext(CartContext)



    const db = getFirestore()
    
    const handleEnviar = (e) => {
        e.preventDefault()

        if (email !== confirmarEmail) {
            setError('Los correos electrónicos no coinciden');
        }else(
        addDoc(coleccionOrdenes, orden).then(({id}) =>
        setIdOrden(id),
        setError('')
    ))

        


    };

    const orden = {
        nombre,
        email,
        carrito,
        precioTotalCarrito
        
    }
    
    const coleccionOrdenes = collection(db, "MiOrden")

    return (
        <>
            <form onSubmit={handleEnviar}>

                <FormControl>
                    <FormLabel>Nombre</FormLabel>
                    <Input type='text' id="formNombre" onChange={(e) => setNombre(e.target.value)} />
                    <FormHelperText>Escribe tu nombre completo</FormHelperText>
                </FormControl>

                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' id="formEmail" onChange={(e) => setEmail(e.target.value)} />
                    <FormHelperText>Por favor introduce tu correo electrónico.</FormHelperText>
                </FormControl>

                <FormControl>
                    <FormLabel>Confirmar Email</FormLabel>
                    <Input type='email' id="formConfirmarEmail" onChange={(e) => setConfirmarEmail(e.target.value)} />
                    <FormHelperText>Confirma tu correo electrónico.</FormHelperText>
                </FormControl>

                <WrapItem>
                    <Button colorScheme='gray' type='submit' id="botonEnviar">
                        Enviar
                    </Button>
                </WrapItem>

            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <h1>Numero de tu orden: {idOrden} </h1>
        </>
    );
};

export default Form;
