import React, { useState, useEffect,  } from 'react';
import ProductDetail from './ProductDetail';
import { useParams } from 'react-router-dom';
import NavMenu from './NavMenu';
import { doc, getDoc, getFirestore} from 'firebase/firestore'

const ProductDetailContainer = () => {
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
            <ProductDetail
                id={producto.id}
                nombre={producto.title}
                descripcion={producto.description}
                precio={producto.price}
                imagen={producto.image}
            />
            </>
        );
};


export default ProductDetailContainer;
