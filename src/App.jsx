import './App.css';
import samosaIMG from './assets/samosa.png'; 
import {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);
  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  }
  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  }
  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10);
      setCount(count - 1000);
    }
  }
  const buyFiestaSize = () => {
    if (count >= 10000) {
      setMultiplier(multiplier * 100);
      setCount(count - 10000);
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src={samosaIMG} onClick={updateCount} />
      </div>
      <div className="container">
        <div className ="topRow">
          <div className="upgrade">
            <h3>Double Stuffed 👯</h3>
            <p>2x per click</p>
            <button onClick={buyDoubleStuffed}>💰10 samosas</button>
          </div>
          <div className="upgrade">
            <h3>Party Pack 🎉</h3>
            <p>5x per click</p>
            <button onClick={buyPartyPack}>💰100 samosas</button>
          </div>
          <div className="upgrade">
            <h3>Full Feast 🍗</h3>
            <p>10x per click</p>
            <button onClick={buyFullFeast}>💰1000 samosas</button>
          </div>
          <div className="upgrade">
            <h3>Fiesta Size 💥</h3>
            <p>100x per click</p>
            <button onClick={buyFiestaSize}>💰10000 samosas</button>
          </div>
        </div>
        <div className="resetWrapper">  
          <button className="resetCount" onClick={() => {
            setCount(0);
            setMultiplier(1);
          }}>Reset</button>
        </div>
      </div>  
    </div>  
  )
}

export default App;