import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Loader from './Loader';
import './ItemListContainer.css';

const ItemListContainer = () => {
    const [mostrar, setMostrar] = useState(true);
    const [data, setData] = useState([]);
    const [productos, setProductos] = useState([]);
    const [productosFijos, setProductosFijos] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const fetchData = async () => {
        try {
            const db = getFirestore();
            const itemColeccion = collection(db, "data");
            const snapshot = await getDocs(itemColeccion);
            const docs = snapshot.docs.map((doc) => doc.data());
            setData(docs);
            setProductos(docs);
            setProductosFijos(docs);
            setMostrar(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (category === "todas") {
        setProductos(productosFijos);
        } else {
        const productosFiltrados = category
            ? data.filter((producto) => producto.category === category)
            : data;
        setProductos(productosFiltrados);
        }
        setProductosFijos(data);
        setMostrar(false);
    }, [category, data]);

    if (mostrar) {
        return (
        <div className="loader-container">
            <Loader />
        </div>
        );
    }

    return (
        <div className="item-list-container">
        <ItemList data={productos} />
        </div>
    );
};

export default ItemListContainer;
