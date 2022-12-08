import './App.css';
import Items from './Items';
import {useState} from 'react'
import LoginForm from './LoginForm';

function App() {
  const [items, setItems] = useState([])
  const [user, setUser] = useState(null)

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
    <Items items={items} setItems={setItems}/>
    </div>
  );
}

export default App;
