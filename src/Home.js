import React from 'react';
import logo from './logo.svg';
import './bootstrap.min.css';
import './Resources.css';
import {Link} from "react-router-dom";

import animate from "animate.css";

function Home() {
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
          <li class="nav-item">
            <Link class="nav-link" to="/quizzes">Quiz</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>



      <body>
        <div class='container'>
          <h1>Welcome to the Chapter 13 Final.</h1>
          <h3> Made to help you go through chapter 13 with a breeze.</h3>
          <h3>Go to the <Link to="/resources">Resources Page</Link> to access notes for Chapter 13 or take the <Link to="/quizzes"> Practice Quizzes here</Link>.</h3>
          <br />
          <br/>
          <img src="https://ebooks.cpm.org/images/pc3.jpg" / >
          <br /> <br /> <br /> <br />
        </div>
      </body>
    </div>
  );
}

export default Home;
