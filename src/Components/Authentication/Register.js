import React from "react";
import { Group, Button } from "../../Style/StyledComponents";

const Register = () => {
  return (
    <Group column center gap10>
      Register
      <input type="email" placeholder="Email..." />
      <input type="password" placeholder="Password..." />
      <div>
        <Button background onClick={() => console.log("Register new account")}>
          Register
        </Button>
      </div>
    </Group>
  );
};

export default Register;
