import React, { Component } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Started from './components/Started';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Started />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default App;
