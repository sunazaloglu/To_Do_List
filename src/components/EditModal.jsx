import React from "react";
import {
  Button,
  ModalBackground,
  ModalContainer,
  TextField,
} from "../styles/StyledComponents";

export function EditModal({ onChange, onClose, onSave, inputEdit }) {
  return (

    
    <>
      <ModalBackground onClick={onClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <TextField type="text" value={inputEdit} onChange={onChange} />
          <Button onClick={onSave}>OK</Button>
        </ModalContainer>
      </ModalBackground>
    </>
  );
}

export default EditModal;
