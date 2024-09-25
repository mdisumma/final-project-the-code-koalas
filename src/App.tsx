import "./App.css";
import { useState } from "react";
import Header from "./Components/header/Header";
import Koala from "./Components/koala/Koala";
import IngredientsInput from "./Components/Ingredients-input/Ingredients-input";
import IngredientsOutput from "./Components/Ingredients-output/Ingredients-output";
import ActionButton from "./Components/action-button/ActionButton";
import Footer from "./Components/footer/Footer";
// const [response, setResponse] = useState(""); // State for chat response

function App() {
  const [userInput, setUserInput] = useState("");
  const [recipeOutput, setRecipeOutput] = useState([]);

  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <>
      <Header />

      <div className="main-container">
        <Koala />
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
      </div>

      <Footer />
    </>
  );
}

export default App;
