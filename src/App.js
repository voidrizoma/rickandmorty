import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./Views/Container";


function App() {
  return (
    <>
      <Router>
        <Switch className="container">
          <Route exact path="/" component={Container} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
