import React from 'react'
//this component is what u want to render with each individual item
function ItemCard({item}) {
    return(
        <div>
        <h1>{item.image}</h1>
        <h1>Name: {item.name}</h1>
        <h3>Price: {item.price}</h3>
        <h3>Weight: {item.weight} </h3>
        </div>
    )
}

export default ItemCard;