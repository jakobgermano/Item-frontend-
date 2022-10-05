import './App.css';
import Items from './Items';
import {useState} from 'react'

function App() {
  
  const [items, setItems] = useState([])


  return (
    <div className="App">
     <Items items={items} setItems={setItems}/>
    </div>
  );
}

export default App;
