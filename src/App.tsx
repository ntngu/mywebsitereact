import * as React from "react";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import "./App.css";
import Contact from "./pages/Content";

const renderTab = (activeTab: String) => {
  switch (activeTab) {
    case "Home":
      return <Home />;
    case "Blog":
      return <Blog />;
    case "Projects":
      return <Projects />;
    case "Resume":
      return <Resume />;
    case "Contact":
      return <Contact />;
    default:
      break;
  }
};

const Header = () => {
  return (
    <header id="Header">
      <span id="logo">仁</span> | ntngu
    </header>
  );
};

const Footer = () => {
  return <div id="Footer">© Copyright 2022 Nhan Nguyen</div>;
};

const App = () => {
  const [activeTab, setActiveTab] = React.useState("Home");

  return (
    <div id="App">
      <nav id="Menu">
        <Header />
        <ul id="menu-list">
          <li className="menu-item" onClick={() => setActiveTab("Home")}>
            Home
          </li>
          <li className="menu-item" onClick={() => setActiveTab("Blog")}>
            Blog
          </li>
          <li className="menu-item" onClick={() => setActiveTab("Resume")}>
            Resume
          </li>
          <li className="menu-item" onClick={() => setActiveTab("Projects")}>
            Projects
          </li>
          <li
            className="menu-item"
            onClick={() => window.open("https://github.com/ntngu", "")}
          >
            GitHub
          </li>
          <li
            className="menu-item"
            onClick={() => window.open("https://linkedin.com/in/ntngu", "")}
          >
            LinkedIn
          </li>
          <li className="menu-item" onClick={() => setActiveTab("Contact")}>
            Contact
          </li>
        </ul>
        {}
      </nav>
      <div className="content">{renderTab(activeTab)}</div>
      <Footer />
    </div>
  );
};

export default App;
