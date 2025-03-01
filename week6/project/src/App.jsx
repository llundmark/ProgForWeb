import './App.css'

function App() {
  let llama = true;
  let llamaFacts = [
    "Llamas typically live between 15 and 20 years.", 
    "Llamas mostly eat grass.",
    "A llama can carry as much as 200 pounds for 12 hours a day, but are not ridden.",
    "Llamas are native to the mountainous region of South America.",
    "When one llama is angry at another llama, they will stick their tongues out to express their dislike.",
    "A llama can spit green, partially digested food 15 feet or more.",
    "Llamas appear to have been bred from guanacos and used as beasts of burden starting about 6,500 years ago.",
    "Llamas are normally sheared every two years, each yielding about 3.5 kg (7.7 pounds) of fibre."
    ];
    let llamaLength = llamaFacts.length;
    let lastFact = (llama) ? llamaFacts[llamaLength - 1] : llamaFacts[llamaLength - 2];
  return (
    <div>
      <h1>Some Facts About Lovely Llamas</h1>
      <ul>
        {llamaFacts.map((fact) => <li>{fact}</li>)}
      </ul>
      <p>Ternary result:</p>
      <p>{lastFact}</p>
    </div>
  )
}

export default App
