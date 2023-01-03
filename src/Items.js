import React, {useEffect} from 'react';
import ItemCard from './ItemCard';

function Items({ items, setItems, user}) {
    //useEffect for rendering each item
    // changin the path to users/user.id to render each item according to user.id
    useEffect(() => {
        fetch(`users/${user.id}`) 
        .then((r) => r.json())
        .then((i) => {
            setItems(i.items)
        })
    }, [])
//iterating over each item, rending each items own "card" containg each individual item
    const allItems = items&&items.map((i) => <ItemCard items={items} setItems={setItems} item={i} key={i.id}/>)


    return(
        <div>
            <h1>Items</h1>
            {allItems}
        </div>
    )
}
//calling the allItems variable containing each itemCard
export default Items;