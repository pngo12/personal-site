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
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
