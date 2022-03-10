import React from "react";
import { Route, Routes } from 'react-router-dom'

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
          <Routes>
            <Route path="task/:id" element={<TaskComponent />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
