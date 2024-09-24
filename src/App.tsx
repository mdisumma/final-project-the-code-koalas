import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";
import IngredientsInput from "./components/Ingredients-input/Ingredients-input";
import IngredientsOutput from "./components/Ingredients-output/Ingredients-output";
import ActionButton from "./components/ActionButton";
import Footer from "./components/footer/Footer";
// const [response, setResponse] = useState(""); // State for chat response

function App() {
  const [userInput, setUserInput] = useState("Hi there!");
  const [recipeOutput, setRecipeOutput] = useState("");

  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <>
      <Header />
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
      <ActionButton text="Click me" onClick={handleClick} />
      <Footer />
    </>
  );
}

export default App;
