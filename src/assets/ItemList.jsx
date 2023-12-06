import React from 'react'
import ItemListContainer from './ItemListContainer'
import Item from './Item'


const ItemList = ({data}) => {


    return (
        <div>
            {
                data.map((p) => {
                    return(
                        <Item  class= "item-card"
                        key={p.id}
                        id={p.id}
                        nombre={p.title}
                        descripcion={p.description}
                        precio={p.price}
                        imagen={p.image}
                        />
                    )
                })
                
            }
        </div>
    )
}

export default ItemList