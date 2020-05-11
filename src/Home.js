import React from 'react';
import logo from './logo.svg';
import './Home.css';
import './bootstrap.min.css';

function Home() {
  return (
    <div className="Home">

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="/">MATH FINAL</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/quiz">Quiz</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>



      <body>
        <div class='quizzer'>
          <h1>Welcome!</h1>
          <p>go to the quiz tab</p>
        </div>
      </body>
    </div>
  );
}

export default Home;
