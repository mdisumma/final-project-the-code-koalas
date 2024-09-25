import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ActionButton from "../../ActionButton/ActionButton";

const api_key = import.meta.env.VITE_PUBLIC_GOOGLE_API_KEY;

if (!api_key) {
  throw new Error(
    "VITE_PUBLIC_GOOGLE_API_KEY is not set in environment variables"
  );
}

const genAI = new GoogleGenerativeAI(api_key);
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

interface inputProps {
  userInput: string;
  setUserInput: (input: string) => void;
  recipeOutput: any[];
  setRecipeOutput: any;
  currentScreen: number;
  setCurrentScreen: any;
}

export default function IngredientsInput({ userInput, setUserInput, recipeOutput, setRecipeOutput, currentScreen, setCurrentScreen }: inputProps) {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const koala: any = document.getElementById('koala');

  useEffect(() => {
    const storedIngredients = localStorage.getItem("ingredients");
    if (storedIngredients) {
      setIngredients(JSON.parse(storedIngredients));
    }
  }, []);

  function updateIngredients(i: string) {
    if (i !== '') {
      (async () => {
        const prompt = `
        You will be given a userInput value, to be compiled into an array of recipe ingredients. Respond with a JSON Object in the following pattern:
        {
          "pass": true/false,
          "response": []
        }
        
        If any ingredient in the userInput exists in this array (${ingredients.join(', ')}), then you should exclude it from the response. If all inputs are duplicates, then the response should fail.
        
        If the userInput value contains valid ingredients, capitalize each word, correct any spelling or grammatical errors, and then provide 'true' for the 'pass' property. The 'response' property should be an array of the corrected ingredients, excluding any ingredients that are already in the provided array.
        
        If there are multiple valid ingredients in the userInput, process all of them into the 'response' array.
        
        If the userInput value is invalid, then respond with 'false' for the 'pass' property and provide a reason why it was rejected under 'response'.
        
        Avoid the use of any formatting syntax such as \`\`\`json\`\`\`.
        
        This is the userInput value: ${i}
        `;
        try {
          const result = await model.generateContent(prompt);
          const responseText = await result.response.text();
          const responseJson = JSON.parse(responseText);
          setRecipeOutput(responseJson);

          if (responseJson.pass === true) {
            const correctedIngredients = responseJson.response;
            const newIngredients = [...ingredients, ...correctedIngredients];
            setIngredients(newIngredients);
            localStorage.setItem("ingredients", JSON.stringify(newIngredients));
            console.log('Ingredients: ' + newIngredients);
          } else {
            console.log('Invalid ingredient: ' + responseJson.response);
          }

          console.log("Recipe JSON:", responseJson);
        } catch (error) {
          console.error("Error generating content:", error);
        }
      })();
    }
  }

  function removeIngredient(value: string) {
    const newIngredients = ingredients.filter(ingredient => ingredient !== value);
    setIngredients(newIngredients);
    localStorage.setItem("ingredients", JSON.stringify(newIngredients));
    console.log('Ingredients: ' + newIngredients);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  }

  function handleSubmit() {
    koala.classList.add('spin');
    setCurrentScreen(1);
    console.log('Current screen: ' + currentScreen);
    (async () => {
      const prompt =
        `Generate FIVE recipes based on the provided ingredients with the following details:
1. Recipe name (recipe_name), a brief description (recipe_description), difficulty level (recipe_difficulty), total time to prepare (recipe_time), and required equipment (recipe_equipment).
2. A list of the provided ingredients used in each recipe.
3. Detailed preparation steps, each including a step number (step_number) and clear instruction (instruction).

Constraints:
- Avoid the use of any formatting syntax such as \`\`\`json\`\`\`.
- If only one ingredient is given, generate the best recipe possible using minimal additional ingredients.
- Ensure the response is in the format of an array of objects, where each object represents a recipe with the following structure:

[
  {
    "recipe_details": {
      "recipe_name": "Example Recipe Name",
      "recipe_description": "A brief description of the recipe.",
      "recipe_difficulty": "Easy/Medium/Hard",
      "recipe_time": "Total preparation time.",
      "recipe_equipment": "Required kitchen equipment."
    },
    "ingredients": [
      "ingredient1",
      "ingredient2"
    ],
    "steps": [
      {
        "step_number": 1,
        "instruction": "Step 1 description."
      },
      {
        "step_number": 2,
        "instruction": "Step 2 description."
      }
    ]
  }
]

Please use the following ingredients: ${ingredients}.
Remember to format the response as an array of objects.`;

      try {
        const result = await model.generateContent(prompt);
        const responseText = await result.response.text();
        // console.log('Response = ' + result.response.text())
        const responseJson = JSON.parse(responseText);
        setRecipeOutput(responseJson);
        koala.classList.remove('spin');

        console.log("Recipe JSON:", responseJson);
        console.log("Recipe output updated:", recipeOutput);
      } catch (error) {
        console.error("Error generating content:", error);
      }
    })();
  }

  function handleAddIngredient(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateIngredients(userInput);
    setUserInput('');
  }

  return (
    <>
      <form className="input-form" onSubmit={handleAddIngredient}>
        <label className="label-input" htmlFor="query">
          Ingredients:
        </label>
        <input
          value={userInput}
          name="query"
          onChange={handleChange}
          placeholder="What ingredients are in your fridge"
          className="user-input"
        />
        <button className="input-button" type="submit">
          Add
        </button>
      </form>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <span>{ingredient}</span>
          <span onClick={() => removeIngredient(ingredient)}>❌</span>
        </div>
      ))}
      < ActionButton text={ingredients.length !== 0 ? 'Find me a recipe' : 'Add an ingredient'} onClick={handleSubmit} disabled={ingredients.length === 0} />
    </>
  );
}
