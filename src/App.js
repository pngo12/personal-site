import React, { Component } from 'react';
import Main from './components/Main';
import Contact from './components/Contact';
import Skills from './components/Skills';
import './App.css';

class App extends Component {
  render() {
    const skills =['JavaScript', 'React', 'Redux', 'Node.js', 'Express.js', 'GraphQL', 'C# (ASP.NET Core)'];
    return (
        <div className="App">
          <div className="flex flex-column items-center">
          <div className="w-50 pl3 pv2-ns" id="test">
              <Main
                title="👋 Hey there!"
                subtitle="I'm Phillip Ngo 👨‍💻"
                body="I'm a software developer with a business background based in the United States. I love solving challenging problems,
                and all things technology."
                subhead="About me:"
                text="I studied Business Administration and started my career in marketing. 
                I was a full-time analyst at a SAAS company before deciding to change career paths.
                I'm always trying to be a better developer. Whether it's learning new technologies or mastering current ones,
                I enjoy it all. I like collaborating on projects so feel free to contact me if you'd like to work collaborate."
                text2="Apart from technology, I love staying active. I'm a huge snowboarder and love combat sports. Particularly Muay Thai and Brazillian Jiu Jitsu.
                I'm also a bit of a coffee dork ☕️"
              />
            </div>
          <div className="w-50 pl3 pv2-ns">
              <Skills 
              title="Technical Skills"
              text="I believe in the right tool for the right job. I'm mainly working in the JavaScript environment currently but below are a few technologies that I do use:"
              bullets={skills}
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
