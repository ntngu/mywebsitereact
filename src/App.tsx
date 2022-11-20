import * as React from "react";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import "./App.css";

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
    default:
      break;
  }
};

const Header = () => {
  return (
    <div>
      <header>Nhan Nguyen</header>
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = React.useState("Home");

  return (
    <div className="App">
      <Header />
      <menu>
        <button type="button" onClick={() => setActiveTab("Home")}>
          Home
        </button>
        <button type="button" onClick={() => setActiveTab("Blog")}>
          Blog
        </button>
        <button type="button" onClick={() => setActiveTab("Resume")}>
          Resume
        </button>
        <button type="button" onClick={() => setActiveTab("Projects")}>
          Projects
        </button>
        <button
          type="button"
          onClick={() => window.open("https://github.com/ntngu", "")}
        >
          GitHub
        </button>
        <button
          type="button"
          onClick={() => window.open("https://linkedin.com/in/ntngu")}
        >
          LinkedIn
        </button>
        <button type="button" onClick={() => setActiveTab("Contact")}>
          Contact
        </button>
      </menu>
      <div className="content">{renderTab(activeTab)}</div>
    </div>
  );
};

export default App;
