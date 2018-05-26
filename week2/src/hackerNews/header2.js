import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
      <p><a className='maintitle' href='https://news.ycombinator.com/news'>Hacker News</a> | <a href='https://news.ycombinator.com/newcomments'>Comments</a> |
    <a href='https://news.ycombinator.com/show'>Show</a> | <a href='https://news.ycombinator.com/ask'>Ask</a> | <a href='https://news.ycombinator.com/jobs'>Jobs</a>
        | <a href='https://news.ycombinator.com/submit'>Submit</a> <a className='login' href='https://news.ycombinator.com/login?goto=news'>Login</a></p>
    </header>

    );
  }
}

export default Header;

