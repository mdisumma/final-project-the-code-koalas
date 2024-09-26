import { useState } from "react";
import ListItem from "../../ListItem/ListItem";
import Recipe from "../Recipe/Recipe";

interface RecipeDetails {
  recipe_name: string;
  recipe_description: string;
}

interface Recipe {
  recipe_details: RecipeDetails;
  ingredients: string[];
  steps: any[];
}

interface outputProps {
  recipe: Recipe[];
  currentScreen: number;
  setCurrentScreen: (screen: number) => void;
}

export default function RecipeSelection({ recipe, currentScreen, setCurrentScreen }: outputProps) {
  const defaultRecipe: Recipe = {
    recipe_details: {
      recipe_name: '',
      recipe_description: '',
    },
    ingredients: [],
    steps: [],
  };

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>(defaultRecipe);

  function handleClick(index: number) {
    console.log('Clicked' + index);
    setCurrentScreen((currentScreen === 0 ? 1 : 2));
    setSelectedRecipe(recipe[index]);
  }

  return (
    <section>
      {currentScreen === 1 ? (
        Array.isArray(recipe) && recipe.length > 0 ? (
          recipe.map((recipeItem, index) => (
            <span onClick={() => handleClick(index)} key={index}>
              <ListItem recipe_name={recipeItem.recipe_details.recipe_name} />
            </span>
          ))
        ) : (
          <>
            <span><ListItem recipe_name="" /></span>
            <span><ListItem recipe_name="" /></span>
            <span><ListItem recipe_name="" /></span>
            <span><ListItem recipe_name="" /></span>
            <span><ListItem recipe_name="" /></span>
          </>
        )
      ) : (currentScreen === 2 ? (
        <Recipe selectedRecipe={selectedRecipe} />
      ) : "Whoops")}
    </section>
  );
}