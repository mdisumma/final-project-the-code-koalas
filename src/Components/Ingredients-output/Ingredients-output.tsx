interface outputProps {
  recipe_name: string;
  ingredients: string[];
  steps: object[];
}

export default function IngredientsOutput({
  recipe_name,
}: outputProps): JSX.Element {
  return (
    <section>
      <h2>{recipe_name}</h2>
    </section>
  );
}
