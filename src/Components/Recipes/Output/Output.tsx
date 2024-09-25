import ListItem from "./components/ListItem/ListItem";

interface outputProps {
  recipe: any[];
}

export default function IngredientsOutput({ recipe }: outputProps) {
  return (
    <section>
      {recipe.map((recipeItem, index) => (
        <div key={index}>
          <ListItem
            recipe_name={recipeItem.recipe_details.recipe_name}
          // recipe_description={recipeItem.recipe_details.recipe_description}
          />
        </div>
      ))}
    </section>
  );
}

