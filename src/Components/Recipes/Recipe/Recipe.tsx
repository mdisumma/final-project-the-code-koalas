import { useState, useRef } from "react";
import "./Recipe.css";

import Steps from "./Steps/Steps";
import Details from "./Details/Details";

interface RecipeDetails {
  recipe_name: string;
  recipe_description: string;
  recipe_time: string;
  recipe_difficulty: string;
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
          <h1>{selectedRecipe.recipe_details.recipe_name} <br /></h1>
          <Details
            recipe_description={selectedRecipe.recipe_details.recipe_description}
            recipe_ingredients={selectedRecipe.ingredients}
          /><span className="recipe-details">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 -960 960 960" fill="var(--red)">
                <path d="M384-840q-23.37 0-39.19-16.5Q329-873 329-896t15.81-39q15.82-16 39.19-16h192q23.38 0 39.19 15.81Q631-919.38 631-896q0 23-15.81 39.5T576-840H384Zm96 468q23.38 0 39.19-15.81Q535-403.63 535-427v-133q0-23.38-15.81-39.19Q503.38-615 480-615q-23.37 0-39.19 15.81Q425-583.38 425-560v133q0 23.37 15.81 39.19Q456.63-372 480-372Zm0 353q-82 0-153.51-30.89-71.5-30.89-125-84Q148-187 117-258.5 86-330 86-412t31.09-153.45q31.09-71.46 84.55-124.91 53.45-53.46 124.91-84.55Q398-806 480-806q64 0 125 20t112 59l29-29q17-17 39.5-17t39.5 17q17 17 17 39.5T825-677l-29 29q39 51 58.5 111.5T874-412q0 82-31 153.5t-84.49 124.61q-53.5 53.11-125 84Q562-19 480-19Zm0-126q112 0 190-77.5T748-412q0-112-78-190t-190-78q-112 0-190 78t-78 190q0 112 78 189.5T480-145Zm0-267Z" />
              </svg> {selectedRecipe.recipe_details.recipe_time}m
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 -960 960 960" fill="var(--red)">
                <path d="M418-340q23.52 24 60.76 23.5Q516-317 536-344l250-362-362 250q-27 20-28.5 56.24Q394-363.51 418-340Zm62-494q66 0 130 19.5T724-760l-118 80q-33-15-62-21.5t-64-6.5q-126 0-217 89.99-91 90-91 218.01 0 42 10.5 77.5T212-252h536q23-38 31.5-73t8.5-79q0-30-6.5-61T761-528l79-116q36 51 55 113t19 125q0 60-15.02 116.82Q883.96-232.36 855-181q-17 27-43.41 41-26.4 14-55.59 14H204q-29 0-57-15t-42-40q-27-48-43-103.5T46-400.03Q46-489 80.08-567.9q34.07-78.91 93.03-138.22 58.95-59.32 137.92-93.6Q390-834 480-834Zm26 328Z" />
              </svg> {selectedRecipe.recipe_details.recipe_difficulty}
            </span>
          </span>
        </span>
        <Steps recipe_steps={selectedRecipe.steps} activeIndex={activeIndex} setActiveIndex={setActiveIndex} stepRefs={stepRefs} />
      </div>
      <div className="step-carousel">
        <span className="step-carousel-arrowL"
          onClick={activeIndex === 0 ? () => { } : () => handleCarouselItemClick(activeIndex - 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 -960 960 960" fill="#fff">
            <path d="M472-440h128q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520H472l36-36q11-11 11-28t-11-28q-11-11-28-11t-28 11L348-508q-12 12-12 28t12 28l104 104q11 11 28 11t28-11q11-11 11-28t-11-28l-36-36Zm8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </span>
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
          onClick={activeIndex === (selectedRecipeLength - 1) ? () => { } : () => handleCarouselItemClick(activeIndex + 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 -960 960 960" fill="#fff">
            <path d="m488-440-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L508-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h128Zm-8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </span>
      </div>
    </>
  );
}