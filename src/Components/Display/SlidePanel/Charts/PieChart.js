import React from "react";
import { Pie } from "react-chartjs-2";
import { COLORS } from "../../../../Style/Constant";

export const PieChart = ({ itemList }) => {
  let protein = itemList.reduce(
    (prev, curr) => prev + parseInt(curr.protein),
    0
  );
  let fat = itemList.reduce((prev, curr) => prev + parseInt(curr.fat), 0);
  let carbs = itemList.reduce((prev, curr) => prev + parseInt(curr.carbs), 0);

  return (
    <div>
      <Pie
        data={{
          labels: ["Protein", "Fat", "Carbs"],
          datasets: [
            {
              data: [protein, fat, carbs],
              backgroundColor: [
                COLORS.accentColor2,
                COLORS.accentColor3,
                COLORS.accentColor,
              ],
            },
          ],
        }}
        width={300}
        height={400}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default PieChart;
