import React, { useState } from "react";
import DisplayItems from "./DisplayItems";
import SlideComponent from "../Display/SlidePanel/SlideComponent";

export const AppDisplay = () => {
  const [itemList, setItemList] = useState([]);

  return (
    <>
      <DisplayItems itemList={itemList} setItemList={setItemList} />
      <div>
        <SlideComponent itemList={itemList} />
      </div>
    </>
  );
};

export default AppDisplay;
