import React, { Component } from 'react';



class TopNavigation extends Component {
  render() {
    return (
      <div className="TopNav">
        <header className="TopNav-list">
          <p><a className='main' href='https://news.ycombinator.com/news'>Hacker News</a> | 
          <a href='https://news.ycombinator.com/newcomments'>Comments</a> |
        <a href='https://news.ycombinator.com/show'>Show</a> | 
        <a href='https://news.ycombinator.com/ask'>Ask</a> | 
        <a href='https://news.ycombinator.com/jobs'>Jobs</a>| 
        <a href='https://news.ycombinator.com/submit'>Submit</a> 
        <a className='login' href='https://news.ycombinator.com/login?goto=news'>Login</a></p>
        </header>
        </div>

              );
            }
          }
          
export default TopNavigation;