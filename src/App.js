import React from "react";
import Home from "./components/Home";
import Library from "./components/Library";
import Player from "./components/Player";
import NotFoundPage from './components/NotFoundPage';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
      <Router>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Player" component={Player} />
        <Route exact path="/Library" component={Library} />
        <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
  
  export default App;