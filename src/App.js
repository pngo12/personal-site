import React, { Component } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex flex-column items-center">
          <div className="outline w-60 pv5 mv4">
            <Header
              title="👋 Hello there!"
              subtitle="I'm Phillip Ngo 👨‍💻"
              body="I'm a software developer based in the United States. I love all things
              technology "
            />
          </div>
          <div className="outline w-60 pv5 mv1">
            <About 
            text="Typography has one plain duty before it and that is to convey information
                in writing. No argument or consideration can absolve typography from this
                duty. A printed work which cannot be read becomes a product without
                purpose."
            />
      </div>
          <div className="outline w-60 pv5 mv3">
            3
      </div>
          <div className="outline w-60 pv5 mv3">
            4
      </div>
        </div>
        {/* <Hero />
        <Skills />
        <Projects />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
