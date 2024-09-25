import { useState } from "react";
import ListItem from "../../ListItem/ListItem";
import Recipe from "../Recipe/Recipe";

interface outputProps {
  recipe: any[];
}

export default function IngredientsOutput({ recipe }: outputProps) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [currentScreen, setCurrentScreen] = useState(0);
  function handleClick(index: number) {
    console.log('Clicked' + index)
    setCurrentScreen(1)
    setSelectedRecipe(recipe[index])
    return
  }

  return (
    <section>
      {currentScreen === 0 ? (
        recipe.map((recipeItem, index) => (
          <span onClick={() => handleClick(index)}
            key={index}>
            <ListItem
              recipe_name={recipeItem.recipe_details.recipe_name}
            // chosen_recipe={recipeItem[index]}
            />
          </span>)
        )
      )
        :
        (<Recipe selectedRecipe={selectedRecipe} />)}
    </section >
  );
}

