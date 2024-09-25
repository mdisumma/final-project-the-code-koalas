interface Step {
  step_number: number;
  instruction: string;
}

interface StepsProps {

  recipe_steps: Step[];

}


export default function Steps(recipe: StepsProps) {
  return (
    <>
      <h1>Steps</h1>
      <div>
        {
        recipe.recipe_steps.map((step: Step, index: number) => (
          <div key={index}>
            <h1>{step.step_number}</h1>
            <p>{step.instruction}</p>
          </div>
        ))
      }
      </div>
    </>
  );
}

