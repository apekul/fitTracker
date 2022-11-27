import React from "react";
import {
  AddContainer,
  InputContainer,
  Button,
} from "../../Style/StyledComponents";
import { AddItemInput } from "./AddItemInput";
import { TiDeleteOutline } from "react-icons/ti";

export const AddItem = ({ setShow, setItemList }) => {
  // Add item object to ItemList
  const handleAddItem = (query) => {
    setItemList((prev) => [...prev, query]);
    setShow(false);
  };

  return (
    <AddContainer>
      <div className="add-panel">
        <Button className="hover-red" onClick={() => setShow(false)}>
          <TiDeleteOutline size="20px" />
        </Button>
        <h2>Add Item</h2>

        <InputContainer>
          <AddItemInput onAddItem={handleAddItem} />
          <Button background type="submit" form="form1">
            Add
          </Button>
        </InputContainer>
      </div>
    </AddContainer>
  );
};
