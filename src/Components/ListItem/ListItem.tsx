// import React from 'react';
// import styles from './ListItem.module.css';

export interface ListItemProps {
  recipe_name: string;
  recipe_time: string;
}

export default function ListItem({ recipe_name, recipe_time }: ListItemProps) {
  return (
    <>
      <div className="listItem">
        <h2>{recipe_name ? recipe_name : "Searching for recipes..."}</h2>
        {recipe_name ? <span>⏲ {recipe_time}m</span> : <></>}
      </div>
    </>
  );
}
