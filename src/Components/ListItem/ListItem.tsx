// import React from 'react';

// import styles from './ListItem.module.css';

export interface ListItemProps {
  recipe_name: string;
  // recipe_description: string;
}

export default function ListItem({ recipe_name }: ListItemProps) {
  return (
    <>
      <h2>{recipe_name}</h2>
      {/* <p>{recipe_description}</p> */}
      <br />
    </>
  )
}
