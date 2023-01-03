import './App.scss';
import Items from './Items';
import {useEffect, useState} from 'react'
import LoginForm from './LoginForm';

function App() {
  const [items, setItems] = useState([])
  const [user, setUser] = useState(null)

  //This useEffect reloads the current user apon refresh
  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  //fetch Delete request for logout button
  function handleLogout(){
    fetch('/logout', {
      method: 'DELETE'
    })
    .then((r) => setUser(null))
  }

  //function for Create fetch request to add new item, using spread operator to add 
  //already exsisting items and new item into a new array in setItems state function
  function addItem(item) {
    setItems([...items, item])

  }

//if not current user return to loginform
  if (!user) return <LoginForm setUser = {setUser}/>

  return (
    <div className="App">
      <button id="logout" onClick={handleLogout} variant="contained" size="medium"> Logout</button>
    <Items items={items} setItems={setItems} user={user}/>
    <ItemForm addItem={addItem}/>
    </div>
  );
}

export default App;


//render items and itemForm because they are each there own component