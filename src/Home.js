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
          <h1>Welcome to the Chapter 13 Final.</h1>
          <h3>Go to the <Link to="/resources">Resources Page</Link> to access notes for Chapter 13 or take the <Link to="/quiz"> Ultimate Quiz here</Link>.</h3>
          <h3> Want a random meme? Go to the <Link to="/quiz"> About Page. </Link> </h3>
          <br />
          <img src="https://ebooks.cpm.org/images/CPM_ebook_banner3.png"/>
          <br/>
          <text>yes Mr. Juarez, I made this from scratch. Yes, it took effot. Please reward.</text>
        </div>
      </body>
    </div>
  );
}

export default Home;
