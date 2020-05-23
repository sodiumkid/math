import React from 'react';
import './bootstrap.min.css';
import './Resources.css';
import {Link} from "react-router-dom";
import snekfetch from "snekfetch";



class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: "https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif"};
  }

  componentDidMount() {
    this.getReddit();
  }

  getReddit = async() => {
    const url = 'https://www.reddit.com/r/mathmemes.json?sort=top&t=week';
    try {
        const { body } = await snekfetch
            .get(url)
            .query({ limit: 800 });
        const allowed = body.data.children
        const randomnumber = Math.floor(Math.random() * allowed.length)
        console.log(allowed[randomnumber].data.url);
        this.setState({
          image : allowed[randomnumber].data.url
        });
    } catch (err) {
        return console.log(err);
    }
  }
  render() {
    return (
      <div className="About">

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
            <li class="nav-item">
              <Link class="nav-link" to="/quizzes">Quiz</Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/about">About <span class="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div>
      </nav>



        <body>
          <div class='container'>
            <h1> About </h1>
            <h3> Website made for a Math final in Mr. Juarez's class by Daniel Na, Brian Lin, Seojun Yu, and Daniel Fischel. Coded from scratch using react.js (except react-quiz-component). Here's a meme gen from r/mathmemes</h3>
            <br />
            <img class="meme" src={this.state.image} />
          </div>
        </body>
      </div>
    );
  }
}

export default About;
