import "./App.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Koala from "./Components/Koala/Koala";
import IngredientsInput from "./Components/Ingredients/Input/Input";
import IngredientsOutput from "./Components/Recipes/Output/Output";
import ActionButton from "./Components/ActionButton/ActionButton";
import Footer from "./Components/Footer/Footer";
// const [response, setResponse] = useState(""); // State for chat response

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [recipeOutput, setRecipeOutput] = useState([]);

  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <>
      <Header />

      <main className="main-container">
        <Koala />
        <IngredientsInput
          userInput={userInput}
          setUserInput={setUserInput}
          recipeOutput={recipeOutput}
          setRecipeOutput={setRecipeOutput}
        />
        <IngredientsOutput recipe={recipeOutput} />
        <ActionButton text="Click me" onClick={handleClick} />
      </main>

      <Footer />
    </>
  );
}
