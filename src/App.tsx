import './App.css'
import { useState } from 'react'
import IngredientsInput from './components/ingredient-input/ingredient-input';

// const [response, setResponse] = useState(""); // State for chat response
// State for user input

function App() {
  const [userInput, setUserInput] = useState("Hi there!");
  return (
    <>
      <div>Koalas rule</div>
      <IngredientsInput userInput={userInput} setUserInput={setUserInput} />
    </>
  )
}

export default App
