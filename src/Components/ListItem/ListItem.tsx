// import React from 'react';
// import styles from './ListItem.module.css';

export interface ListItemProps {
  recipe_name: string;
}

export default function ListItem({ recipe_name }: ListItemProps) {
  return (
    <>
      <div className="listItem">
        <h2>{recipe_name ? recipe_name : "Searching for recipe"}</h2>
        {recipe_name ? <span>Cook!</span> : <></>}
      </div>
    </>
  );
}
