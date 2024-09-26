import "./Recipe.css";

import Steps from "./Steps/Steps";
import Details from "./Details/Details";

interface RecipeDetails {
  recipe_name: string;
  recipe_description: string;
  recipe_time: string;
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
    <>
      <div className="recipie-element">
        <h1>{selectedRecipe.recipe_details.recipe_name} • ⏲ {selectedRecipe.recipe_details.recipe_time}m</h1>
        <Details
          recipe_description={selectedRecipe.recipe_details.recipe_description}
          recipe_ingredients={selectedRecipe.ingredients}
        />
        <Steps recipe_steps={selectedRecipe.steps} />
      </div>
      <div className="step-carousel">
        <span className="step-carousel-arrowL">⬅️</span>
        <span className="step-carousel-container">
          {selectedRecipe.steps.map((_, index: number) => (
            <span className="step-carousel-item" key={index}></span>
          ))}
        </span>
        <span className="step-carousel-arrowR">➡️</span>
      </div>
    </>
  );
}
