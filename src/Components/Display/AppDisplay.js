import React, { useState } from "react";
import DisplayItems from "./DisplayItems";
import { list } from "../../lib/Pattern";
import SlideComponent from "../Display/SlidePanel/SlideComponent";
import FastAddItem from "../Input/FastAddItem";

export const AppDisplay = () => {
  const [itemList, setItemList] = useState([]);

  return (
    <>
      <DisplayItems itemList={itemList} setItemList={setItemList} />
      <div>
        <FastAddItem itemList={itemList} setItemList={setItemList} />
        <SlideComponent itemList={itemList} />
      </div>
    </>
  );
};

export default AppDisplay;
