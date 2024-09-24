import React, { useState } from 'react';

  

export default function IngredientsInput() {
    function handleChange(event) { 
        setUserInput(event.target.value);
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