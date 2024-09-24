import { ChangeEvent, FormEvent } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const api_key = import.meta.env.VITE_PUBLIC_GOOGLE_API_KEY;

if (!api_key) {
  throw new Error(
    "VITE_PUBLIC_GOOGLE_API_KEY is not set in environment variables"
  );
}

const genAI = new GoogleGenerativeAI(api_key);
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });



interface inputProps {
  userInput: string;
  setUserInput: (input: string) => void;
  recipeOutput: string;
  setRecipeOutput: any;
}


export default function IngredientsInput({ userInput, setUserInput, recipeOutput, setRecipeOutput }: inputProps) {


  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    (async () => {
      const prompt =
        "Context: You will be giving a list of ingredients. You must create a recipe using these ingredients and send it to us. Do not give us a recipe to make one of the ingredients. Try and restrict the recipe to only the ingredients provided. " +
        userInput + "Format the response as if it is a JSON object, with each step nested within another object."
      const result = await model.generateContent(prompt);
      console.log(result.response.text());
      setRecipeOutput(result.response.text());
      console.log("recipe output: " + recipeOutput);
    })();
    console.log("User input = " + userInput);
  }

  return (
    <form className="input-row" onSubmit={handleSubmit}>
      <input
        value={userInput}
        name="query"
        onChange={handleChange}
        placeholder="What ingredients are in your fridge"
        className="user-input"
      />
      <button className="button" type="submit">
        <img src="/arrow.png" alt="Send" />
      </button>
    </form>
  );
}