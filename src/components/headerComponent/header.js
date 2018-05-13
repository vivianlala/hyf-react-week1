import React, { Component } from 'react';
/* import Img from './img/vivian.jpg'; */

class Header extends Component {
  render() {
    return (
      <header>

        <div className="logo">
          KENYAN IN SWEDEN 
       </div>
       {/* <img className = "vivian" src= {Img} alt="vivian" /> */}
        <nav>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/vivian-lala-omdal-7a4a8328/">About Me</a>
            </li>
            <li>
              <a href="#Hobbies">Programming</a>
            </li>
            <li>
              <a href="#Contacts">Contacts</a>
            </li>
          </ul>
        </nav>
      </header>

    );
  }
}

export default Header;

