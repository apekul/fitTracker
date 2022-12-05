import React, { useState } from "react";
import DisplayItems from "./DisplayItems";
import SlideComponent from "../Display/SlidePanel/SlideComponent";

export const AppDisplay = () => {
  const [itemList, setItemList] = useState([
    {
      name: "test Object",
      weight: 1,
      calories: 2,
      carbs: 3,
      protein: 4,
      fat: 5,
    },
  ]);

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
