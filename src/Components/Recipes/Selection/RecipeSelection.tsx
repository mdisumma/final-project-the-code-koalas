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
}

export default function RecipeSelection({ recipe }: outputProps) {
  const defaultRecipe: Recipe = {
    recipe_details: {
      recipe_name: '',
      recipe_description: '',
    },
    ingredients: [],
    steps: [],
  };

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>(defaultRecipe);
  const [currentScreen, setCurrentScreen] = useState(0);

  function handleClick(index: number) {
    console.log('Clicked' + index);
    setCurrentScreen(1);
    setSelectedRecipe(recipe[index]);
  }

  return (
    <section>
      {currentScreen === 0 ? (
        recipe.map((recipeItem, index) => (
          <span onClick={() => handleClick(index)} key={index}>
            <ListItem recipe_name={recipeItem.recipe_details.recipe_name} />
          </span>
        ))
      ) : (
        <Recipe selectedRecipe={selectedRecipe} />
      )}
    </section>
  );
}