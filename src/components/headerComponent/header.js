import React, { Component } from 'react';
import img from '../Img/vivian.jpg';

class Header extends Component {
  render() {
    return (
      <header>

        <div className="logo">
          VIVIAN OMDAL
       </div>
        <img className="vivian" src={img} alt="vivian" />
        <nav>
          <ul>
            <li>
              <a href="#About Me">About Me</a>
            </li>
            <li>
              <a href="#programming">Programming</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vivian-lala-omdal-7a4a8328/">Linkedin</a>
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

