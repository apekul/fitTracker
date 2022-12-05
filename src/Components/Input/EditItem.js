import React from "react";
import {
  AddContainer,
  InputContainer,
  Button,
} from "../../Style/StyledComponents";
import { AddItemInput } from "./AddItemInput";
import { TiDeleteOutline } from "react-icons/ti";

export const EditItem = ({ onEditItem, item, onClose }) => {
  return (
    <AddContainer>
      <div className="add-panel">
        <Button onClick={() => onClose()}>
          <TiDeleteOutline size="40px" color="white" />
        </Button>
        <div>
          <h2>Edit Panel</h2>

          <InputContainer>
            <AddItemInput onAddItem={onEditItem} item={item} />
            <Button className="button-30" type="submit" form="form1">
              Edit
            </Button>
          </InputContainer>
        </div>
      </div>
    </AddContainer>
  );
};

export default EditItem;
