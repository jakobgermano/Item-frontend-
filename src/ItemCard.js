import React from 'react'

function ItemCard({item}) {
    return(
        <div>
        <h1>Name: {item.name}</h1>
        <h3>Price: {item.price}</h3>
        <h3>Weight: {item.weight} </h3>
        </div>
    )
}

export default ItemCard;