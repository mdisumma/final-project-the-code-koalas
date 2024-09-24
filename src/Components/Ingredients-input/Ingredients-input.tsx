import { ChangeEvent, FormEvent } from 'react';

interface formProps {
  userInput: string
  setUserInput: (input: string) => void;
}


export default function IngredientsInput({ userInput, setUserInput }: formProps) {

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(userInput)
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
  )
}