import React from "react";

import Home from "./Home.js";
import About from "./About.js";
import Quiz from "./Quiz.js";
import Note from "./Note.js";
import Resources from "./Resources.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";

function Notes() {
  let { number } = useParams();
  return <Note index={number} />
}

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/notes/:number">
            <Notes />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
