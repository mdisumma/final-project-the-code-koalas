import { ChangeEvent, FormEvent } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const api_key = import.meta.env.VITE_PUBLIC_GOOGLE_API_KEY;

console.log(api_key)

if (!api_key) {
  throw new Error(
    "NEXT_PUBLIC_GOOGLE_API_KEY is not set in environment variables"
  );
}

const genAI = new GoogleGenerativeAI(api_key);
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });



interface formProps {
  userInput: string;
  setUserInput: (input: string) => void;
}

export default function IngredientsInput({ userInput, setUserInput }: formProps) {


  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    (async () => {
      const prompt =
        "Context: Give me a recipe that contains " +
        userInput;
      const result = await model.generateContent(prompt);
      console.log(result.response.text());
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