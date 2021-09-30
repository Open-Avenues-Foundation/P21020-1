// Packages
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from "./components/Layout";

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
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/message" component={MessagePage} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
