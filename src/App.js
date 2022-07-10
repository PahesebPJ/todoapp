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

  //States
  const [user, setUser] = React.useState([]);
  const [userModal, setUserModal] = React.useState(false);
  const [userProfile, setUserProfile] = React.useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("http://192.168.0.3:4000/api/users/1");
      setUser(request.data[0]);
      return request;
    }

    fetchData();
  }, []);


  //Inputs
  let inputs = [
    {
      label: "User Role:",
      id: "rol",
      value: user.rol,
      type: "text",
    },
    {
      label: "Username:",
      id: "username",
      value: user.username,
      type: "text",
    },
    {
      label: "Pasword:",
      id: "password",
      value: user.password,
      type: "password",
    },
    {
      label: "Name:",
      id: "name",
      value: user.name,
      type: "text",
    },
    {
      label: "Lastname:",
      id: "lastname",
      value: user.lastname,
      type: "text",
    },
  ];


  return (
    <div className="App">
      <Navbar
        changeState={setUserModal}
        state={userModal}
        changeUserProfile={setUserProfile}
        userProfile={userProfile}
      />
      <div className="projects-task-grid">
        <ProjectsComponent />
        <Routes>
          <Route path="task/:id" element={<TaskComponent />} />
        </Routes>

        <Modal state={userModal} changeState={setUserModal}>
          <h3>User settings</h3>
          <img src={user.picture} alt={user.username} className="user-options__picture" />
          <div className="user-options-input">
            {
              inputs.map(input => {
                return (
                  <div className="user-options-input" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} id={input.id} defaultValue={input.value} />
                  </div>
                )
              })
            }
          </div>
          <button className="modal-user-options__button">
            Save
          </button>
        </Modal>

        <Modal state={userProfile} changeState={setUserProfile}>
          <h3>User profile</h3>
          <img src={user.picture} alt={user.username} className="user-options__picture" />
          {
            inputs.map(input => {
              return (
                <div className="user-options-input" key={input.id}>
                  <b>{input.label}</b>
                  <p>{input.value}</p>
                </div>
              )
            })
          }
        </Modal>

      </div>
    </div>
  );
}

export default App;
