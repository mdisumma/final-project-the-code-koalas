import './App.css'
import { useState } from 'react'
import IngredientsInput from './Components/Ingredients-input/Ingredients-input';

// const [response, setResponse] = useState(""); // State for chat response

function App() {
  const [userInput, setUserInput] = useState("Hi there!");
  const [recipeOutput, setRecipeOutput] = useState("");

  return (
    <>
      <div>Koalas rule</div>
      <IngredientsInput userInput={userInput} setUserInput={setUserInput} recipeOutput={recipeOutput} setRecipeOutput={setRecipeOutput} />
    </>
  )
}

export default App
