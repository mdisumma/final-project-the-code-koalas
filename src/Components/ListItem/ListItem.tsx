// import React from 'react';
// import styles from './ListItem.module.css';

export interface ListItemProps {
  recipe_name: string;
}

export default function ListItem({ recipe_name }: ListItemProps) {

  return (
    <>
      <span>
        <h2>{recipe_name}</h2>
        <span>Cook!</span>
      </span >
    </>
  )
}
