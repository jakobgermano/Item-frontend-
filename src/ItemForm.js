import React, {useState} from 'react'; 

//component for adding an item 
function ItemForm({addItem, user}) {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(null) 
    const [weight, setWeight] = useState(null)
    const [image, setImage] = useState("")

    //fetch create method using post, adding preventdefault so there is no additional default data
    // setting each initial state to its 0 form
    function handleSubmit(e) {
        e.preventDefault() 
        setName("")
        setPrice(null)
        setWeight(null)
        setImage("")
        fetch("/items", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                price,
                weight,
                image,
                user_id: user.id

            }),
        }).then(r => r.json())
        .then(i => addItem(i))
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} ></input>
            <label>weight</label>
            <input type ="text" id="weight" value={weight} onChange={e => setWeight(e.target.value)} ></input>
        </form>
        </div>
    )
}

export default ItemForm;

//on change is what happens to the input after hitting submit, it is equal to a arrow function
//that sets the setter function to the target value, e stands for event 
//Pass an Input Value to a Function in a React Component
//Storing an Input Value Inside of State
//onsubmit and onChange are event handlers, they need to be passed a function {}