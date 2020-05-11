import React from 'react';
import logo from './logo.svg';
import './bootstrap.min.css';
import './Home.css';
import {Link} from "react-router-dom";

import animate from "animate.css";

function Home() {
  return (
    <div className="Home">

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
        <div class='quizzer'>
          <h1>Welcome!</h1>
          <p>go to the quiz tab</p>
          <img class="animate__animated animate__delay-1s animate__infinite animate__wobble" src="https://res.cloudinary.com/drferrel/image/upload/v1589223890/misc/IMG_0591_uxnc2g.png"/>
          <br/>
        </div>
      </body>
    </div>
  );
}

export default Home;
