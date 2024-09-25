interface outputProps {
  recipe_name: any[];
  ingredients: string[];
  steps: object[];
}

export default function IngredientsOutput({
  recipe_name,
}: outputProps): JSX.Element {
  return (
    <section>
      <h2>
        {recipe_name.map((recipe, index) => (
          <div key={index}>{recipe.recipe_details.recipe_name}</div>
        ))}
      </h2>
    </section>
  );
}
