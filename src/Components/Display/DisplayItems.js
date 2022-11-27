import React, { useState } from "react";
import { Group, Button } from "../../Style/StyledComponents";
import { EditItem } from "../Input/EditItem";
import { MdDeleteForever, MdModeEditOutline } from "react-icons/md";
import { COLORS } from "../../Style/Constant";
import TotalCount from "./TotalCount";
import Input from "../Input/Input";

const DisplayItems = ({ setItemList, itemList }) => {
  // stores index of focused item in itemList
  const [queryIndex, setQueryIndex] = useState();

  // Remove item from itemList
  const removeItem = (indexToRemove) => {
    const removed = itemList.filter((value, index) => indexToRemove !== index);
    setItemList(removed);
  };

  // Function handling editing existing item
  // Iterate through array of item objects and if index of items is equal to query Index, change object to query
  const handleEditItem = (query) => {
    setItemList((curr) =>
      curr.map((obj, index) => {
        if (index === queryIndex) {
          return (obj = query);
        }
        return obj;
      })
    );
    // Sets queryIndex to undefined to close edit panel
    setQueryIndex(undefined);
  };

  return (
    <div className="container-margin">
      <Group center>
        <p>Add Item</p>
        <Input setItemList={setItemList} />
      </Group>

      <Group margin>
        <span style={{ color: COLORS.accentColor2 }}>P</span>
        <span style={{ color: COLORS.accentColor3 }}>F</span>
        <span style={{ color: COLORS.accentColor }}>C</span>
      </Group>

      <ul className="scroll-bar">
        {itemList.length > 0 ? (
          itemList.map((item, index) => (
            <li key={index} className="list-group">
              <Group column>
                <div className="list-group-button">
                  <span>{item.name}</span>
                  <Button
                    className="hover-red"
                    onClick={() => removeItem(index)}
                  >
                    <MdDeleteForever />
                  </Button>
                </div>
              </Group>

              <Group>
                <span>{item.weight}g</span>
                <Button
                  className="hover-red"
                  onClick={() => setQueryIndex(index)}
                >
                  <MdModeEditOutline />
                </Button>
              </Group>
              <Group marginRight>
                {Object.values(item)
                  .map((v, i) => (
                    <div key={i} className="list-group-details">
                      <span>{v}</span>
                    </div>
                  ))
                  .slice(2)}
              </Group>
            </li>
          ))
        ) : (
          <Group>
            <div className="list-empty">No items...</div>
          </Group>
        )}
      </ul>

      {/* Edit Item Component */}
      {queryIndex !== undefined && (
        <EditItem
          onEditItem={handleEditItem}
          item={itemList[queryIndex]}
          onClose={() => setQueryIndex(undefined)}
        />
      )}
      <TotalCount itemList={itemList} />
    </div>
  );
};

export default DisplayItems;
