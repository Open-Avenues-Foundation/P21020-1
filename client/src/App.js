// Packages
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from "./components/Layout";

// Components
import HomePage from "./pages/HomePage";
import MessagePage from "./pages/MessagePage";
import ErrorPage from "./pages/ErrorPage";
import MessageLogPage from "./pages/MessageLogPage";
import { Container } from '@mui/material';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/message" component={MessagePage} />
          <Route path="/message-logs" component={MessageLogPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
