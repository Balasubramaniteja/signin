import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import signUp from "./signUp";

function App() {
  // const { signUp } = useContext()

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={signUp} />
        <Route exact path="/" />
      </Router>
    </div>
  );
}
export default App;
