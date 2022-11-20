import React, {useEffect} from 'react';
import ItemCard from './ItemCard';

function Items({ items, setItems}) {

    useEffect(() => {
        fetch(`/items`) 
        .then((r) => r.json())
        .then((i) => {
            setItems(i)
        })
    }, [])

    const allItems = items&&items.map((i) => <ItemCard items={items} setItems={setItems} item={i} key={i.id}/>)


    return(
        <div>
            <h1>Items</h1>
            {allItems}
        </div>
    )
}

export default Items;