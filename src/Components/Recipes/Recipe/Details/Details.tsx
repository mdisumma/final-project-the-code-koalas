interface DetailsProps {
    recipe_description: string;
    recipe_ingredients: string[];
}

export default function Details({ recipe_description, recipe_ingredients }: DetailsProps) {
    return (
        <>
            <p>{recipe_description}</p>
            <p>{recipe_ingredients}</p>
        </>
    );
}

