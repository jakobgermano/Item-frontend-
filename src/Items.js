import {useEffect} from 'react'
import ItemCard from './ItemCard'

function Items({items, setItems}) {

    useEffect(() => {
        fetch(`/items`) 
        .then((r) => r.json())
        .then((i) => {
            setItems(i.items)
        })
    }, [])

    const allItems = items&&items.map((i) => <ItemCard items={items} setItems={setItems} item={i} key={i.id}/>)


    return(
        <div>
            {allItems}
        </div>
    )
}

export default Items;