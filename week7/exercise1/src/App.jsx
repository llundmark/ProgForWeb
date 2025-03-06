import './App.css'
import Camelid from './Camelid.jsx'
import LlamaPic from './assets/LLAMA.jpg'
import AlpacaPic from './assets/alpaca.jpg'

function App() {
  const llama = {
    image: LlamaPic,
    name: "Llama",
    fact: "Llamas typically weigh from 250 to 450 pounds."
  }

  const alpaca = {
    image: AlpacaPic,
    name: "Alpaca",
    fact: "Alpacas typically weigh from 120 to 200 pounds."
  }

  return (
    <>
    <h1>Camelids</h1>
      <Camelid image={llama.image} name={llama.name} fact={llama.fact}/>
      <Camelid image={alpaca.image} name={alpaca.name} fact={alpaca.fact}/>
    </>
  )
}

export default App
