import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from './Home'; 
import Blog from './Blog';
import './App.css';

const Menu = () => {
  return (
    <menu>
      <button>Home</button>
      <button>Blog</button>
      <button>Projects</button>
      <button>GitHub</button>
      <button>LinkedIn</button>
      <button>Contact</button>
    </menu>
  );
}

const Header = () => {
  return (
    <div>
      <header>Nhan Nguyen</header>
    </div>
  );
}

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Menu/>
      <div className='content'>
        <Home/>
      </div>
    </div>
  );
}

export default App;
