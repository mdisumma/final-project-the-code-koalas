import Steps from "../Steps/Steps";
import Details from "../Details/Details";

interface recipeProps {
    selectedRecipe: object,
}

export default function Recipe({ selectedRecipe }: recipeProps) {
    return (
        <>
            <Details />
            <Steps />
            <p>{JSON.stringify(selectedRecipe)}</p>
        </>
    );
}

