import React from "react";
import styled from "styled-components";
import { EditDeleteContainer, ListBox } from "../styles/StyledComponents";
import { FaEdit, FaTrash } from "react-icons/fa";

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #4b5563;
  padding: 6px;
  border-radius: 6px;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
    color: #111827;
  }
`;

function ToDoItem({ item, onDelete, onEdit }) {
  return (
    <>
      <ListBox done={item.done}>
        <input type="checkbox" checked={item.done} readOnly />
        <span>{item.content}</span>
        <EditDeleteContainer>
          <Button onClick={() => onEdit(item.id, item.content)}>
            <FaEdit />
          </Button>
          <Button onClick={() => onDelete(item.id)}>
            <FaTrash />
          </Button>
        </EditDeleteContainer>
      </ListBox>
    </>
  );
}

export default ToDoItem;
