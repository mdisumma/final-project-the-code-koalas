import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";
import IngredientsInput from "./components/Ingredients-input/Ingredients-input";
import IngredientsOutput from "./components/Ingredients-output/Ingredients-output";
import Footer from "./components/footer/Footer";
// const [response, setResponse] = useState(""); // State for chat response

function App() {
  const [userInput, setUserInput] = useState("Hi there!");
  const [recipeOutput, setRecipeOutput] = useState("");

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
      {/* button */}
      <Footer />
    </>
  );
}

export default App;
