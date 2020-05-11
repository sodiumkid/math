import React from 'react';
import './bootstrap.min.css';
import './Resources.css';
import { content } from "./Content.js";
import { Link } from "react-router-dom";

import animate from "animate.css";

function findContent(props) {
  var ans = "";
  var cont = "";
  let finder = content.Notes.filter(l => {
    if (l.index == props) {
      ans = l.Title;
      cont = l.Content;
    }
  });
  return (
    <div>
      <h1 > {ans} </h1>
      <p class="note"> {cont}</p>
    </div>
  );
}

function Note(props) {
  return (
    <div className="Note">

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <img class="App-logo" src="https://res.cloudinary.com/drferrel/image/upload/v1589223893/misc/72061539_530606401005543_5876809008156770304_n_rusckn.png"/>
      <Link class="navbar-brand" to="/" >MATH FINAL</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link class="nav-link" to="/resources">Resources</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/quiz">Quiz</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>



      <body>
        <div class='container'>
          {findContent(props.index)}
        </div>
      </body>
    </div>
  );
}

export default Note;
