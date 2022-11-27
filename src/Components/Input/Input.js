import React, { useState } from "react";
import { AddItem } from "./AddItem";
import { CgAddR } from "react-icons/cg";
import { Button } from "../../Style/StyledComponents";

function Input({ setItemList }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button addButton onClick={() => setShow(!show)}>
        <CgAddR color="white" />
      </Button>
      {show && <AddItem setShow={setShow} setItemList={setItemList} />}
    </>
  );
}

export default Input;
