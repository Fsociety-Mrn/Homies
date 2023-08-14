import React from 'react'
import { Appbar } from './pages/Appbar';
import { Element} from 'react-scroll';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <Appbar/>

      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <Projects />
      </Element>

      <Element name="projects">
        <About />
      </Element>



      <Element name="contact">
        <Contact />
      </Element>

    </div>
  );
}

export default App;
