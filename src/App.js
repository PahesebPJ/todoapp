import React from "react";

//Components imports
import Navbar from "./components/Navbar/Navbar";
import ProjectsComponent from "./components/projectsComponent/ProjectsComponent";
import TaskComponent from "./components/taskComponent/TaskComponent";

//Styles
import "./App.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="projects-task-grid">
        <ProjectsComponent />
        <TaskComponent />
      </div>
    </div>
  );
}

export default App;
