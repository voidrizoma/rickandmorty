import React from "react";
import GlobalStyles from "./Styles/Global";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./Views/Container";


function App() {
  return (
    <>
      <Router>
        <Switch className="container">
          <Route exact path="/" component={Container} />
        </Switch>
        <GlobalStyles/>
      </Router>
    </>
  );
}

export default App;
