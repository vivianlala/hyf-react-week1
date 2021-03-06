import React, { Component } from 'react';


import './App.css';

import data from './hackerNews/data';
import Header from './hackerNews/header2';
import {Articles, Owner} from './hackerNews/Articles';

console.log(data.hn.topStories);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <div>
          <ol className='mine'>{data.hn.topStories.map((item) => {
            return (
              <div id='TitleBlock'>
                <Articles title={item.title} key={item.id} url={item.url} />
                <Owner by={item.by} id={item.by.id} timeISO={item.timeISO} />
              </div>
            )
          })}
          </ol>
          }
        </div>
      </div>

    );
  }
}

export default App;

