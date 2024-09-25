import { ChangeEvent, FormEvent } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

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
  recipeOutput: string;
  setRecipeOutput: any;
}

export default function IngredientsInput({
  userInput,
  setUserInput,
  recipeOutput,
  setRecipeOutput,
}: inputProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    (async () => {
      const prompt =
        `Given a list of ingredients, please generate FIVE recipes that includes the following details:
1. The name of the recipe (recipe_name) and a description.
2. A list of the provided ingredients used in the recipe (ingredients).
3. A detailed list of steps to prepare the recipe (steps).
4. Do not include "\`\`\`json" or "\`\`\`" in the output.
5. If given a single ingredient, create the best recipe you can with the fewest additional ingredients.

Each step should have a step number (step_number) indicating its order and a clear instruction (instruction) on what to do in that step.
make sure the output does not include "\`\`\`json" or "\`\`\`"

Please ensure the output matches the following format:

{
  "recipe_1": {
    "recipe_details": [
      {"recipe_name": "Example Recipe Name",
      "recipe_description": "Example recipe description here - keep it brief",
      "recipe_difficulty": "A difficulty rating of 'Easy', 'Medium' or 'Hard'",
      "recipe_time": "A duration for how long the recipe takes to make in total.",
      "recipe_equipment": "A list of equipment the user needs to create the meal, such as a blender."
      }
    ]
    "ingredients": [
      "ingredient1",
      "ingredient2"
      // add more ingredients as needed
    ],
    "steps": [
      {
        "step_number": 1,
        "instruction": "First step instruction."
      },
      {
        "step_number": 2,
        "instruction": "Second step instruction."
      }
      // add more steps as needed
    ]
  }
}

Example Output:

{
  "recipe_name": "Buttered Toast",
  "ingredients": [
    "bread",
    "butter"
  ],
  "steps": [
    {
      "step_number": 1,
      "instruction": "Place a slice of bread in the toaster and toast to your desired level of brownness."
    },
    {
      "step_number": 2,
      "instruction": "Remove the toasted bread from the toaster."
    },
    {
      "step_number": 3,
      "instruction": "While the toast is still warm, spread butter evenly over the surface."
    },
    {
      "step_number": 4,
      "instruction": "Serve immediately and enjoy!"
    }
  ]
}
` +
        userInput +
        `Format the response as if it is a JSON object, with each step nested within another object - Do not include \`\`\`json" or "\`\`\`" in the output.`;
      try {
        const result = await model.generateContent(prompt);
        const responseText = await result.response.text();
        setRecipeOutput(responseText);
        console.log("Recipe output updated:", responseText);
      } catch (error) {
        console.error("Error generating content:", error);
      }
    })();
    console.log("User input = " + userInput);
  }

  return (
    <form className="input-form" onSubmit={handleSubmit}>
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
  );
}
