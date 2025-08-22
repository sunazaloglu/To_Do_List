import React from "react";
import { TextField, Button } from "../styles/StyledComponents";

function InputForm({ newItemContent, setNewItemContent, addItem }) {
  return (
    <>
      <TextField
        type="text"
        value={newItemContent}
        onChange={(e) => {
          setNewItemContent(e.target.value);
        }}
        placeholder="Please add new item..."
      />
      <Button onClick={addItem  }>Add</Button>
    </>
  );
}

export default InputForm;
