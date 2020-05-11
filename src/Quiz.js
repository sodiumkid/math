import React from 'react';
import logo from './logo.svg';
import './Home.css';
import Quizzer from 'react-quiz-component';
import { questions } from './questions.js';
import './bootstrap.min.css';

function Quiz() {
  return (
    <div className="Quiz">

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="/">MATH FINAL</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">Home </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/quiz">Quiz <span class="sr-only">(current)</span> </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>



      <body>
        <div class='quizzer'>
          <Quizzer quiz={questions} continueTillCorrect={true} showInstantFeedback={true} style={'width:100%'}/>
        </div>
      </body>
    </div>
  );
}

export default Quiz;
