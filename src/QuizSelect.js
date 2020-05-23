import React from 'react';
import './bootstrap.min.css';
import './Resources.css';
import { content } from "./Content.js";
import {Link} from "react-router-dom";

import animate from "animate.css";

function QuizSelect() {
  return (
    <div className="Home">

    <nav class="navbar navbar-expand-lg navbar-dark">
      <img class="App-logo" src="https://res.cloudinary.com/drferrel/image/upload/v1590253595/misc/juarez/Screen_Shot_2015-09-12_at_8.29.53_AM_eyiler.png"/>
      <Link class="navbar-brand" to="/" >MATH FINAL</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link class="nav-link" to="/resources">Resources</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/quizzes">Quiz  <span class="sr-only">(current)</span> </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>



      <body>
        <div class='container'>
          <h1> Quizzes </h1> <br />
          <Link class="links" to="/quiz/practice" > Practice Quiz </Link> <br />
          <Link class="links" to="/quiz/short" > Short Answer </Link> <br/>
          <Link class="links" to="/quiz/real" > Real World Problems </Link>
        </div>
      </body>
    </div>
  );
}

export default QuizSelect;
