import React, { Component } from 'react';
import About from './components/About';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex flex-column items-center">
          <div className="outline w-60 pv3 mv2">
            <Header
              title="👋 Hello there!"
              subtitle="I'm Phillip Ngo 👨‍💻"
              body="I'm a software developer based in the United States. I love all things
              technology "
            />
          </div>
          <div className="outline w-60">
            <About 
            text="I studied Business and started my career in marketing. 
              I was a full-time analyst before deciding to change career paths. 
              I believe stagnation is a slow death so I'm always looking to better my skills and learn new ones.
              I enjoy solving complicated problems and collaboration"
            />
      </div>
          <div className="outline w-60 pv5 mv3">
            3
      </div>
          <div className="outline w-60 pv5 mv3">
            4
      </div>
        </div>
      </div>
    );
  }
}

export default App;
