import React from "react";
import { List } from "../styles/StyledComponents";
import ToDoItem from "./ToDoItem";

function ToDoList({ items, onDelete, onEdit }) {
  return (
    <>
      <List>
        <h2>To-Do List</h2>
        {items.map((item) => (
          <ToDoItem
            key={item.id}
            item={item}
            onDelete={onDelete}
            onEdit={onEdit}
          />   
        ))}
      </List>
    </>
  ); 
}

export default ToDoList;
