import "./App.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Koala from "./Components/Koala/Koala";
import IngredientsInput from "./Components/Ingredients/Input/Input";
import RecipeSelection from "./Components/Recipes/Selection/RecipeSelection";
import ActionButton from "./Components/ActionButton/ActionButton";
import Footer from "./Components/Footer/Footer";
// const [response, setResponse] = useState(""); // State for chat response

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [recipeOutput, setRecipeOutput] = useState([]);
  const [currentScreen, setCurrentScreen] = useState(0);

  function handleClick(i: number) {
    console.log("Button clicked, screen:", i);
    setCurrentScreen(i++);
  }

  return (
    <>
      <Header />

      <main className="main-container">
        <Koala text={"how can I help"} />
        {currentScreen === 0 ? (
          <div>
            <IngredientsInput
              userInput={userInput}
              setUserInput={setUserInput}
              recipeOutput={recipeOutput}
              setRecipeOutput={setRecipeOutput}
              currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen}
            />
          </div>
        ) : (
          <div>
            <RecipeSelection
              currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen}
              recipe={recipeOutput}
            />
            <ActionButton text="Click me" onClick={() => handleClick(1)} disabled={false} />
          </div>
        )}

      </main>

      <Footer />
    </>
  );
}
