import React, { useState } from "react";
import { AddItem } from "./AddItem";
import { Button } from "../../Style/StyledComponents";

function Input({ setItemList }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button className="button-30" onClick={() => setShow(!show)}>
        ADD ITEM
      </Button>
      {show && <AddItem setShow={setShow} setItemList={setItemList} />}
    </>
  );
}

export default Input;
