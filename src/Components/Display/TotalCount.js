import React from "react";
import { Group } from "../../Style/StyledComponents";

export const TotalCount = ({ itemList }) => {
  return (
    <>
      <Group marginTop padding>
        <span>
          kcal{" "}
          {itemList.reduce((prev, curr) => prev + Number(curr.calories), 0)}
        </span>
        <span>
          protein{" "}
          {itemList.reduce((prev, curr) => prev + Number(curr.protein), 0)}
        </span>
        <span>
          fat {itemList.reduce((prev, curr) => prev + Number(curr.fat), 0)}
        </span>
        <span>
          carbs {itemList.reduce((prev, curr) => prev + Number(curr.carbs), 0)}
        </span>
      </Group>
    </>
  );
};

export default TotalCount;
