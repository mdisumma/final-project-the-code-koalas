import "./Recipe.css";

import Steps from "./Steps/Steps";
import Details from "./Details/Details";

interface RecipeDetails {
  recipe_name: string;
  recipe_description: string;
}

interface Step {
  step_number: number;
  instruction: string;
}

interface Recipe {
  recipe_details: RecipeDetails;
  steps: Step[];
  ingredients: string[];
}

interface recipeProps {
  selectedRecipe: Recipe;
}

export default function Recipe({ selectedRecipe }: recipeProps) {
  return (
    <div className="recipie-element">
      <h1>{selectedRecipe.recipe_details.recipe_name}</h1>
      <Details
        recipe_description={selectedRecipe.recipe_details.recipe_description}
        recipe_ingredients={selectedRecipe.ingredients}
      />
      <Steps recipe_steps={selectedRecipe.steps} />
    </div>
  );
}
