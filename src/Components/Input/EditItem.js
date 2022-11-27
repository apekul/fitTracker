import React from "react";
import {
  AddContainer,
  InputContainer,
  Button,
} from "../../Style/StyledComponents";
import { AddItemInput } from "./AddItemInput";

export const EditItem = ({ onEditItem, item, onClose }) => {
  return (
    <AddContainer>
      <div className="add-panel">
        <Button onClick={() => onClose()}>X</Button>
        <h2>Edit Item</h2>

        <InputContainer>
          <AddItemInput onAddItem={onEditItem} item={item} />
          <Button background type="submit" form="form1">
            Edit
          </Button>
        </InputContainer>
      </div>
    </AddContainer>
  );
};

export default EditItem;
