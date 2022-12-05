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
        <Button onClick={() => setShow(false)}>
          <TiDeleteOutline size="40px" color="white" />
        </Button>
        <div>
          <h2>Add Panel</h2>

          <InputContainer>
            <AddItemInput onAddItem={handleAddItem} />
            <Button className="button-30" type="submit" form="form1">
              Add
            </Button>
          </InputContainer>
        </div>
      </div>
    </AddContainer>
  );
};
