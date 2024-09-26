import { useState, useRef } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const selectedRecipeLength = selectedRecipe.steps.length;
  const stepRefs = selectedRecipe.steps.map(() => useRef<HTMLDivElement>(null));

  const handleCarouselItemClick = (index: number) => {
    setActiveIndex(index);
    stepRefs[index].current?.scrollIntoView({ behavior: 'smooth' });
    console.log('recipe length: ' + selectedRecipeLength)
  };
  return (
    <>
      <div className="recipie-element">
        <span className="recipe-info">
          <h1>{selectedRecipe.recipe_details.recipe_name} • ⏲ {selectedRecipe.recipe_details.recipe_time}m</h1>
          <Details
            recipe_description={selectedRecipe.recipe_details.recipe_description}
            recipe_ingredients={selectedRecipe.ingredients}
          />
        </span>
        <Steps recipe_steps={selectedRecipe.steps} activeIndex={activeIndex} setActiveIndex={setActiveIndex} stepRefs={stepRefs} />
      </div>
      <div className="step-carousel">
        <span className="step-carousel-arrowL"
          onClick={activeIndex === 0 ? () => {} : () => handleCarouselItemClick(activeIndex - 1)}>⬅️</span>
        <span className="step-carousel-container">
          {selectedRecipe.steps.map((_, index: number) => (
            <span
              className={`step-carousel-item ${index === activeIndex ? 'active' : ''}`}
              key={index}
              onClick={() => handleCarouselItemClick(index)}
            ></span>
          ))}
        </span>
        <span className="step-carousel-arrowR"
          onClick={activeIndex === (selectedRecipeLength - 1) ? () => {} : () => handleCarouselItemClick(activeIndex + 1)}>➡️</span>
      </div>
    </>
  );
}