import React, { useState, useEffect,  } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import { doc, getDoc, getFirestore} from 'firebase/firestore'

const ItemDetailContainer = () => {
        const [producto, setProducto] = useState([]);
        const { id } = useParams();


        useEffect(() => {
            const db = getFirestore()

            const oneItem = doc( db, "data", `${id}`)

            getDoc(oneItem).then((snapshot) => {
                if (snapshot.exists()){
                    const docs = snapshot.data()
                    setProducto(docs)
                }


            })
        })


        

    

        return (
            <>
            <ItemDetail
                id={producto.id}
                nombre={producto.title}
                descripcion={producto.description}
                precio={producto.price}
                imagen={producto.image}
            />
            </>
        );
};


export default ItemDetailContainer;
