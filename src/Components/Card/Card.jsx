import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';

const git = [
  {
    cli: "git init",
    usage: "git init [repository name]",
    description: "This command is used to start a new repository.",
    id: '1'
  }, {
    cli: "git clone",
    usage: "git clone [url] ",
    description: "This command is used to obtain a repository from an existing URL.",
    id: '2'
  }, {
    cli: "git status",
    usage: "git status",
    description: "This command is used to check status.",
    id: '3'
  },{
    cli: "git add",
    usage: "git add [file-name.jsx]",
    description: "Add a file to the staging area.",
    id: '4'
  }, {
    cli: "git add -A",
    usage: "git add -A",
    description: "Add all new and changed files to the staging area.",
    id: '5'
  }, {
    cli: "git commit -m",
    usage: "git commit -m [commit message]",
    description: "Commit changes to you repository.",
    id: '6'
  }, {
    cli: "git rm -r",
    usage: "git rm -r [file-name.jsx]",
    description: "Remove a file (or folder) from your repository.",
    id: '7'
  }, {
    cli: "git push origin",
    usage: "git push origin [branch-name]",
    description: "To push a specific branch from github repository.",
    id: '9'
  },
]

function searchingFor(term) {
  return function(x) {
    return x.cli.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      git: git,
      term: ''
    }

    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    this.setState({term: event.target.value})
  }

  render() {
    const {term, git} = this.state;
    return (
      <div>
        <form>
          <input type="text" name="Search" id="search" placeholder="TYPE GIT COMMANDS HERE" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" onChange={this.searchHandler} value={term}/>
        </form>
      <Row>
      {
        git.filter(searchingFor(term)).map(github => <Col key={github.id} className="card" sm="12" md="6" lg="4">
          <div className="card-body">
            <p className="Clickbutton">{github.cli}</p>
            <code>{github.usage}</code>
            <p className="card-text">{github.description}</p>
          </div>
        </Col>)
      }
    </Row>
  </div>
  );
  }
}

export default Search;
