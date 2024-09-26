interface DetailsProps {
  recipe_description: string;
  recipe_ingredients: string[];
}

export default function Details({
  recipe_description,
  recipe_ingredients,
}: DetailsProps) {
  return (
    <div className="details-element">
      <p>{recipe_description}</p>

      <p>
        {recipe_ingredients.map((ingredient, index) => (
          <span key={index}>
            <span>{ingredient}</span>
            {index < recipe_ingredients.length - 1 && <span> • </span>}
          </span>
        ))}
      </p>
    </div>
  );
}
