import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [colorIndex, setIndex] = useState(0);
  let colors = ["grey", "green", "blue", "black", "orange", "purple"];

  function buttonPress(){
    document.body.style.backgroundColor = colors[colorIndex];
    if(colorIndex < 5){
      setIndex(colorIndex + 1);
    }
    else{
      setIndex (0);
    }
    setCount(count + 1);
  }

  return (
    <>
      <h1>Hello, World</h1>
      <div className="card">
        <button onClick={buttonPress}>
          Times Clicked {count}
        </button>
      </div>
    </>
  )
}

export default App
