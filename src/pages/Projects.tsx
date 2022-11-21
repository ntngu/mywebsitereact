import * as React from "react";

const Projects = () => {
  return (
    <div id="Projects">
      <div id="project">
        <h2>Apartment Inventory Manager</h2>
        <p>Node.js, Express.js, MongoDB, Bootstrap, JavaScript</p>
        <ul>
          <li>Developed a full-stack web application with a MongoDB database and Bootstrap front-end.</li>
          <li>Stores items by name and contains quantity, description, and type.</li>
          <li>Functionality to look up items through querying database.</li>
          <li>Saved roommates time and money by providing easy access to apartment inventory.</li>
        </ul>
        <a href="https://github.com/ntngu/inventory-app" target="_blank">Link</a>
      </div>
      <div id="project">
        <h2>Simple Message Board</h2>
        <p>Node.js, Express.js, MongoDB, HTML, CSS, JavaScript</p>
        <a href="https://github.com" target="_blank">Link</a>
      </div>
      <div id="project">
        <h2>Project Name</h2>
        <p>Project Description</p>
        <a href="https://github.com" target="_blank">Link</a>
      </div>
      <div id="project">
        <h2>Project Name</h2>
        <p>Project Description</p>
        <a href="https://github.com" target="_blank">Link</a>
      </div>
    </div>
  );
};

export default Projects;
