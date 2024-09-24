import "./App.css";
import { useState } from "react";
import IngredientsInput from "./components/Ingredients-input/Ingredients-input";
import IngredientsOutput from "./components/Ingredients-output/Ingredients-output";
// const [response, setResponse] = useState(""); // State for chat response

function App() {
  const [userInput, setUserInput] = useState("Hi there!");
  const [recipeOutput, setRecipeOutput] = useState("");

  return (
    <>
      <div>Koalas rule</div>
      <IngredientsInput
        userInput={userInput}
        setUserInput={setUserInput}
        recipeOutput={recipeOutput}
        setRecipeOutput={setRecipeOutput}
      />
      <IngredientsOutput
        recipe_name={recipeOutput}
        ingredients={[]}
        steps={[]}
      />
    </>
  );
}

export default App;
