import React, { useState } from "react";
import { Group, Button } from "../../Style/StyledComponents";
import Register from "./Register";
// import methods for Anonymous login
import { auth } from "../../firebase-config";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";

export function AuthPanel({ user, setUser }) {
  const [show, setShow] = useState(true);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const GuestLogin = () => {
    signInAnonymously(auth)
      .then(() => {
        console.log("Signed as a Guest");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Group center gap20>
      <Button background onClick={GuestLogin}>
        Guest
      </Button>
      {show ? <Register /> : <></>}
    </Group>
  );
}

export default AuthPanel;
