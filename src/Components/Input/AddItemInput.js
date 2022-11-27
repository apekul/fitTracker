import React, { useState } from "react";
import { pattern } from "../../lib/Pattern";

export const AddItemInput = ({ onAddItem, item }) => {
  // Query holds the
  const [query, setQuery] = useState(item === undefined ? pattern : item);

  // onChange event that update query entries values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(query);
  };

  const handleFocusIn = (e) => {
    if (e.target.value === "0") {
      e.target.value = "";
      handleChange(e);
    }
  };

  const handleFocusOut = (e) => {
    if (Number(e.target.value) > 0) {
      return;
    }
    e.target.value = "0";
    handleChange(e);
  };

  return (
    <form onSubmit={handleSubmit} id="form1">
      {Object.entries(query).map((item, index) => (
        <label key={index}>
          {item[0]}:
          <div>
            {index === 0 ? (
              <input
                value={item[1]}
                onChange={handleChange}
                name={item[0]}
                type="text"
                required
              />
            ) : (
              <>
                <input
                  type="number"
                  value={item[1]}
                  onChange={handleChange}
                  name={item[0]}
                  min="0"
                  step="0.5"
                  maxLength="3"
                  onFocus={handleFocusIn}
                  onBlur={handleFocusOut}
                />

                {item[0] === "calories" ? <span>kcal</span> : <span>g</span>}
              </>
            )}
          </div>
        </label>
      ))}
    </form>
  );
};

export default AddItemInput;
