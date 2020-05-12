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
    const url = 'https://www.reddit.com/r/memes.json?sort=top&t=week';
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

      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <img class="App-logo" src="https://res.cloudinary.com/drferrel/image/upload/v1589223893/misc/72061539_530606401005543_5876809008156770304_n_rusckn.png"/>
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
              <Link class="nav-link" to="/quiz">Quiz</Link>
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
            <h3> I don't know what to write so here's a randomly scraped image from r/memes</h3>
            <br />
            <img class="meme" src={this.state.image} />
          </div>
        </body>
      </div>
    );
  }
}

export default About;
