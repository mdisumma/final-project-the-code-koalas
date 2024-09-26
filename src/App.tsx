import "./App.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Koala from "./Components/Koala/Koala";
import IngredientsInput from "./Components/Ingredients/Input/Input";
import RecipeSelection from "./Components/Recipes/Selection/RecipeSelection";
import ActionButton from "./Components/ActionButton/ActionButton";
import Footer from "./Components/Footer/Footer";
import Leaf from "./Components/Leaf/leaf";
// const [response, setResponse] = useState(""); // State for chat response

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [recipeOutput, setRecipeOutput] = useState([]);
  const [currentScreen, setCurrentScreen] = useState(0);
  const [koalaText, setKoalaText] = useState(`I'm here to help!`);

  function handleClick(i: number) {
    console.log("Button clicked, screen:", i);
    if (currentScreen === 1) {
      setRecipeOutput([]);
    }
    if (i === 0) {
      setKoalaText(`I'm here to help!`);
    } else if (i === 1) {
      setKoalaText(`Choose a recipe for instructions!`)
    }
    setCurrentScreen(i++);
  }

  return (
    <>
      <Header />

      <main className="main-container">
        <Koala koalaText={koalaText} />
        <Leaf />
        {currentScreen === 0 ? (
          <IngredientsInput
            userInput={userInput}
            setUserInput={setUserInput}
            recipeOutput={recipeOutput}
            setRecipeOutput={setRecipeOutput}
            currentScreen={currentScreen}
            setCurrentScreen={setCurrentScreen}
            setKoalaText={setKoalaText}
          />
        ) : (
          <section className="recipe-wrapper">
            <div className="recipe-container">
              <RecipeSelection
                currentScreen={currentScreen}
                setCurrentScreen={setCurrentScreen}
                recipe={recipeOutput}
                setKoalaText={setKoalaText}
              />
            </div>
            {(currentScreen === 1) && (
              <ActionButton text="Go back to ingredients" onClick={() => handleClick(0)} disabled={false} />
            )}
            {(currentScreen === 2) && (
              <ActionButton text="Return to recipe list" onClick={() => handleClick(1)} disabled={false} />
            )}
          </section>
        )}

      </main>

      <Footer />
    </>
  );
}
