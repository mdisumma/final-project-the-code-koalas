interface Step {
  step_number: number;
  instruction: string;
}

interface StepsProps {
  recipe_steps: Step[];
}

export default function Steps(recipe: StepsProps) {
  return (
    // <div className="steps-element">
    //  <h1 className="recipie-steps-title">Steps</h1>
    <div className="recipie-steps-container">
      {recipe.recipe_steps.map((step: Step, index: number) => (
        <div className="recipie-step" key={index}>
          <h1 className="recipie-step-number">Step {step.step_number}</h1>
          <p className="recipie-step-instruction">{step.instruction}</p>
        </div>
      ))}
    </div>
    // </div>
  );
}
