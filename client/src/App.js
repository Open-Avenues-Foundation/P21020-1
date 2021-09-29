// Packages
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

// Components
import HomePage from "./pages/HomePage";
import MessagePage from "./pages/MessagePage";
import NoMatch from "./pages/NoMatch";

// Css
import './css/main.css'

// Main App
function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/message" component={MessagePage} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
