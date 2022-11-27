import React from "react";
import { PieChart } from "./Charts/PieChart";
import { Group } from "../../../Style/StyledComponents";

const SlideComponent = ({ itemList }) => {
  return (
    <div>
      <Group>
        <PieChart itemList={itemList} />
      </Group>
    </div>
  );
};

export default SlideComponent;
