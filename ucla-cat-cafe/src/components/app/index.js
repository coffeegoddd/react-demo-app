import React from 'react';
import './app.scss';


// Import React Components for SPA
import Home from '../home';
import About from '../about';
import CurrentCats from '../current-cats';
import Contact from '../contact';

const App = () => (
  // id 'top' set so anchor in the footer links user to top of page
  <div id="top">
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#current-cats">Current Cats</a>
      <a href="#contact">Contact</a>
    </nav>
    <main>
      <Home />
      <About />
      <CurrentCats />
      <Contact />
    </main>
    <footer>
      <a href="#top">Back to top</a>
      <p>Thanks for visiting!</p>
    </footer>
  </div>
);

export default App;
