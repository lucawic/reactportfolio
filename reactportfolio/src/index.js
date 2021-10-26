import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import components
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

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
    <About />
    <Skills />
    <Projects />
    <Testimonials />
    
  </React.Fragment>,
  document.getElementById('root')
);
