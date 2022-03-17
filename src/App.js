import React, { useEffect } from "react";
import { Route, Routes } from 'react-router-dom'
import axios from 'axios';

//Components imports
import Navbar from "./components/Navbar/Navbar";
import ProjectsComponent from "./components/projectsComponent/ProjectsComponent";
import TaskComponent from "./components/taskComponent/TaskComponent";
import Modal from "./components/Modal/Modal";

//Styles
import "./App.css";


function App() {

  const [user, setUser] = React.useState([]);

  //Inputs
  let inputs = [
    {
      label: "User Role:",
      id: "rol",
      type: "text",
    },
    {
      label: "Username:",
      id: "username",
      type: "text",
    },
    {
      label: "Pasword:",
      id: "password",
      type: "password",
    },
    {
      label: "Name:",
      id: "name",
      type: "text",
    },
    {
      label: "Lastname:",
      id: "lastname",
      type: "text",
    },
  ];

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("http://192.168.0.13:4000/api/users/1");
      setUser(request.data[0]);
      return request;
    }

    fetchData();
  }, []);


  return (
    <div className="App">
      <Navbar />
      <div className="projects-task-grid">
        <ProjectsComponent />
        <Routes>
          <Route path="task/:id" element={<TaskComponent />} />
        </Routes>

        <Modal>
          <h3>User settings</h3>
          <img src={user.picture} alt={user.username} className="user-options__picture" />
          <div className="user-options-input">
            {
              inputs.map(input => {
                return (
                  <div className="user-options-input">
                    <label>{input.label}</label>
                    <input type={input.type} id={input.id} />
                  </div>
                )
              })
            }
          </div>
          <button className="modal-user-options__button">
            Save
          </button>
        </Modal>
      </div>
    </div>
  );
}

export default App;
