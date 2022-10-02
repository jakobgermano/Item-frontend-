import './App.css';
import Items from '/items';
import {useState} from 'react'

function App() {
  [items, setItems] = useState([])

  
  return (
    <div className="App">
     <Items items={items} setItems={setItems}/>
    </div>
  );
}

export default App;
