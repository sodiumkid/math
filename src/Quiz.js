import React from 'react';
import logo from './logo.svg';
import './Home.css';
import Quizzer from 'react-quiz-component';
import { questions } from './questions.js';
import './bootstrap.min.css';
import {Link} from "react-router-dom";

function getQuiz(props) {
  if (props=="practice") {
    return (
      <div class='quizzer'>
        <Quizzer quiz={questions} continueTillCorrect={true} showInstantFeedback={true} style={'width:100%'}/>
      </div>
    )
  }
  else if (props=="short"){
    return (
      <div class="container">
        <h1> Short Answer</h1>
        <br />
        <ul>
          <li> What is a derivative? </li>
          <li> Why do limit equations sometimes end up with 0/0? </li>
          <li> Write a general formula for the summation that would be used to calculate the area under the curve of any function using n rectangles and in the interval of a &lt; x &lt; b.</li>

          <li> Write a guide on how to find the tangent line of any chosen function at a chosen point. Put the given point into a point slope form equation. Find the slope, or the derivative, of the point by finding f’(x). Put the slope into m of the function.</li>
          <li> Consider the function  f(x)=(x^2-9)/3. For what x values is it impossible to find the IROC? Describe the simplest way to find f’(4). Find the IROC of f(x) for x = 4.</li>
          <li> Prove the area of the semicircle is A=0.5*r^2 using the area under the curve. </li>
        </ul>
      </div>
    )
  }
  else if (props=="real"){
    return (
      <div class="container">
        <h1> Real World Problems</h1>
        <br />
        <ul>
          <li>  Daniel Fischel wants to buy a new computer. He found a good used HP computer that he wanted. If the computer’s value decreases at a rate of -2t^2+4t-1 from the time that it was new, where p(t) is the price, and t is the time in years after the computer was new. If he bought the computer when it was 5 years old, how fast is the value of the computer decreasing when he buys it?</li>
          <li> Daniel Fischel’s Ball Company’s marginal revenue is p(t), and t which is days after January first R(x)=t^2-1150t-23.  Find the total revenue from January 3rd to January 28th</li>
          <li> World Class Scientist Dr. Daniel Fischel has discovered that the animal zazazoom has babies that grow in a pattern, this pattern can be modeled by M(t)=t^4-23t^2+18t-1 where M(t) is the weight of the zazazoom in pounds, and t is the days after the baby’s birth. When the baby zazazoom is 12 days old, how fast is it growing?</li>
        </ul>
      </div>
    )
  }
}

function Quiz(props) {
  return (
    <div className="Quiz">

    <nav class="navbar navbar-expand-lg navbar-dark">
      <img class="App-logo" src="https://res.cloudinary.com/drferrel/image/upload/v1590253595/misc/juarez/Screen_Shot_2015-09-12_at_8.29.53_AM_eyiler.png"/>
      <Link class="navbar-brand" to="/">MATH FINAL</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link class="nav-link" to="/resources">Resources</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/quizzes">Quiz <span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>



      <body>
        {getQuiz(props.index)}
      </body>
    </div>
  );
}

export default Quiz;
