import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';

const git = [
  {
    cli: "git version",
    usage: "git --version",
    description: "This command is used to check the git version.",
    id: '1'
  }, {
    cli: "git config --global user.name",
    usage: "git config --global user.name \"Harsh Trivedi\"",
    description: "This command is used define the username of the git user globally.",
    id: '2'
  }, {
    cli: "git config --global user.email",
    usage: "git config --global user.email user@email.com",
    description: "This command is used define the email of the git user globally.",
    id: '3'
  }, {
    cli: "git init",
    usage: "git init",
    description: "This command is used to initialize a directory.",
    id: '4'
  }, {
    cli: "git clone",
    usage: "git clone [/path/to/repository]",
    description: "This command is used to initialize a directory.",
    id: '5'
  }, {
    cli: "git status",
    usage: "git status",
    description: "This command is used to check status.",
    id: '6'
  }, {
    cli: "git add",
    usage: "git add *",
      description: "Add files to staging(index)",
    id: '7'
  }, {
    cli: "git add",
    usage: "git add [file-name.jsx]",
    description: "Add a file to the staging area.",
    id: '8'
  }, {
    cli: "git add -A",
    usage: "git add -A",
    description: "Add all new and changed files to the staging area.",
    id: '9'
  }, {
    cli: "git commit -m",
    usage: "git commit -m [commit message]",
    description: "Commit changes to you repository with a message.",
    id: '10'
  }, {
    cli: "git rm -r",
    usage: "git rm -r [file-name.jsx]",
    description: "Remove a file (or folder) from your repository.",
    id: '11'
  }, {
    cli: "git pull origin",
    usage: "git pull origin [branch-name]",
    description: "To pull a specific branch from github repository.",
    id: '12'
  }, {
    cli: "git push origin",
    usage: "git push origin [branch-name]",
    description: "To push a specific branch from github repository.",
    id: '13'
  }, {
    cli: "git checkout -b",
    usage: "git checkout -b [branchname]",
    description: "Create a new branch and switch to it.",
    id: '14'
  }, {
    cli: "git checkout",
    usage: "git checkout",
    description: "Switch from one branch to another.",
    id: '15'
  }, {
    cli: "git branch",
    usage: "git branch",
    description: "This command lists all the branches in the repo and also tells the current branch.",
    id: '16'
  }, {
    cli: "git branch -d",
    usage: "git branch -d [branchname]",
    description: "This commands deleted the branch",
    id: '17'
  }, {
    cli: "git push all",
    usage: "git push --all origin",
    description: "Pushes all branches to the remote repository",
    id: '18'
  }, {
    cli: "git merge",
    usage: "git merge [branchname]",
    description: "This command merges different branch into the active branch.",
    id: '19'
  }, {
    cli: "git diff",
    usage: "git diff",
    description: "This command shows all the merge conflicts",
    id: '20'
  }, {
    cli: "git diff filename",
    usage: "git diff --base [filename]",
    description: "This command shows all the merge conflicts against the base file.",
    id: '21'
  }, {
    cli: "git diff filename",
    usage: "git diff [source branch] [target branch]",
    description: "This command shows preview before merging.",
    id: '22'
  }, {
    cli: "git tag",
    usage: "git tag 1.0.0 [commit ID]",
    description: "This command marks a significant change-set, such as a release.",
    id: '23'
  }, {
    cli: "git log",
    usage: "git log",
    description: "This command shows the commit logs[history]",
    id: '24'
  }, {
    cli: "git fetch",
    usage: "git fetch origin",
    description: "This command fetch all the latest commits and thus, you don't have to drop all the local changes.",
    id: '25'
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
