import {useEffect} from 'react'
import ItemCard from './ItemCard'

function Items({items, setItems}) {

    useEffect(() => {
        fetch(`/items`) 
        .then((r) => r.json())
        .then((i) => {
            setItems(i.items)
        })
    })

    const allItems = items&&items.map((i) => <ItemCard/>)


    return(
        <div>

        </div>
    )
}

export default Items;