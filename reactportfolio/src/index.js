import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import components
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <h1></h1>
    </div>
  )
}

ReactDOM.render(
  <React.Fragment>
    <App />
    <Header />
    <About />
    <Projects />
    <Skills />
    
    
  </React.Fragment>,
  document.getElementById('root')
);
