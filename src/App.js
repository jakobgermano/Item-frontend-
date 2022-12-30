import './App.scss';
import Items from './Items';
import {useEffect, useState} from 'react'
import LoginForm from './LoginForm';

function App() {
  const [items, setItems] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  function handleLogout(){
    fetch('/logout', {
      method: 'DELETE'
    })
    .then((r) => setUser(null))
  }


  if (!user) return <LoginForm setUser = {setUser}/>

  return (
    <div className="App">
      <button id="logout" onClick={handleLogout} variant="contained" size="medium"> Logout</button>
    <Items items={items} setItems={setItems} user={user}/>
    <ItemForm/>
    </div>
  );
}

export default App;
