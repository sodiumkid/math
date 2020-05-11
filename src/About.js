import React from 'react';
import logo from './logo.svg';
import './Home.css';
import './bootstrap.min.css';
import {Link} from "react-router-dom";

function About() {
  return (
    <div className="About">

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link class="navbar-brand" to="/">MATH FINAL</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/quiz">Quiz</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/about">About <span class="sr-only">(current)</span></Link>
          </li>
        </ul>
      </div>
    </nav>



      <body>
        <div class='quizzer'>
          <p> bruh why would you click on this page i havent made it yet get out of here and stop wasting both of our times</p>
        </div>
      </body>
    </div>
  );
}

export default About;
