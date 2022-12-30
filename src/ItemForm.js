import React, {useState} from 'react'; 

function ItemForm() {
    const [name, setName] = useState("")
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} ></input>


        </form>
        </div>
    )
}

export default ItemForm;