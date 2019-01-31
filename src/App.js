import React, { Component } from 'react';
import Main from './components/Main';
import Contact from './components/Contact'
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="flex flex-column items-center">
            <div className="w-50 pv3 mv2">
              <Main
                title="👋 Hello there!"
                subtitle="I'm Phillip Ngo 👨‍💻"
                body="I'm a software developer based in the United States. I love all things
                technology"
                subhead="About me:"
                text="I studied Business Administration and started my career in marketing. 
                I was a full-time analyst before deciding to change career paths.
                I'm always trying to be a better developer. Whether it's learning new technologies or mastering current ones,
                I enjoy it all. I like collaborating on projects so feel free to contact me if you'd like to work collaborate."
              />
            </div>
            <div className="w-50 pa1 pb5">
              <Contact 
              title="Let's connect"
              email="pngo12@gmail.com"
              github="pngo12"
              linkedIn="Phillip Ngo"
              />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
