import './App.css'
import { useState } from 'react'
import IngredientsInput from './Components/Ingredients-input/Ingredients-input';

// const [response, setResponse] = useState(""); // State for chat response
const [userInput, setUserInput] = useState("Hi there!"); // State for user input

function App() {

  return (
    <>
      <div>Koalas rule</div>
      <IngredientsInput userInput={userInput} setUserInput={setUserInput} />
    </>
  )
}

export default App
