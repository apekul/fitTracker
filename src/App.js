import React, { useState } from "react";
import { Container } from "./Style/StyledComponents";
import { AuthPanel } from "./Components/Authentication/AuthPanel";
import { AppDisplay } from "./Components/Display/AppDisplay";

// ReactRouter
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [user, setUser] = useState();
  // Test Commit
  return (
    <Container>
      <Router>
        <Routes>
          <Route
            // path="/"
            // element={
            //   <PrivateRoute user={user}>
            //     <AppDisplay />
            //   </PrivateRoute>
            // }
            path="/"
            element={<AppDisplay />}
          />
          {/* <Route
            path="/auth"
            element={<AuthPanel setUser={setUser} user={user} />}
          /> */}
          <Route path="*" element={<div>PAGE NOT FOUND</div>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
