interface Step {
  step_number: number;
  instruction: string;
}

interface StepsProps {
  recipe_steps: Step[];
  activeIndex: number;
  setActiveIndex: any;
  stepRefs: React.RefObject<HTMLDivElement>[];
}

export default function Steps({ recipe_steps, stepRefs }: StepsProps) {
  return (
    <div className="recipie-steps-container">
      {recipe_steps.map((step: Step, index: number) => (
        <div className="recipie-step" key={index} id={`#${index}`} ref={stepRefs[index]}>
          <h1 className="recipie-step-number">Step {step.step_number}</h1>
          <p className="recipie-step-instruction">{step.instruction}</p>
        </div>
      ))}
    </div>
  );
}