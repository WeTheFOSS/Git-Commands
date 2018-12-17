import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';

// style
import './Credits.scss';

const people = [
  {
    name: "Naveen Kharwar",
    url: "https://naveenkharwar.com",
    description: "A freelance React Developer, Web/WordPress developer and a geek.",
    image: require("./images/naveen.jpeg"),
    twitter: "https://www.twitter.com/naveenkharwar0",
    github: "https://github.com/naveenkharwar",
    email: "naveen9198@gmail.com",
    id: '1'
  },
  {
    name: "Sneha Omer",
    url: "https://twitter.com/thesassycoder",
    description: "An emotionless nerd, who loves to get involved in most of the techie stuff.",
    image: require("./images/sneha.jpeg"),
    twitter: "https://www.twitter.com/thesassycoder",
    github: "https://github.com/sassyec0der",
    email: "omersneha@gmail.com",
    id: '2'
  },
  {
    name: "Harsh Trivedi",
    url: "https://harsh98trivedi.github.io",
    description: "A Tech Lover, Inspired by Imagination, Jack of all trades, master of none.",
    image: require("./images/harsh.jpeg"),
    twitter: "https://twitter.com/techetarian",
    github: "https://www.github.com/harsh98trivedi",
    email: "harsh98trivedi@gmail.com",
    id: '3'
  },
]

class Credits extends Component{
  render() {
    return (
      <div >
        <h5 className="credits">CREDITS FOR THIS PROJECT</h5>
        <Container>
        <Row>
        {
          people.map( person =>
              <Col key={person.id} sm="12" md="6" lg="4" id="image" className="text-center">
                <a href={person.url}><img className="img" src={person.image} alt="Git Commands" /></a>
                <hr />
                <h3>{person.name}</h3>
                 <p>{person.description}</p>
                   <p>
                       <a target="_blank" rel="noopener noreferrer" href={person.twitter}><i className="icons fab fa-twitter"></i></a>
                       <a target="_blank" rel="noopener noreferrer" href={person.github}><i className="icons fab fa-github"></i></a>
                       <a target="_blank" rel="noopener noreferrer" href={"mailto:" + person.email}><i className="icons fas fa-envelope"></i></a>
                   </p>
                   <hr />
              </Col>
          )
        }
      </Row>
    </Container>
      </div>
    );
  }
}

export default Credits;
