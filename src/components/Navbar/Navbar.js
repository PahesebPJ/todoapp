import React, { useEffect } from 'react'
import axios from 'axios';
import './Navbar.css'

//Icons
import { FaChevronDown, FaUserAlt } from 'react-icons/fa';
import { AiFillSetting, AiOutlineLogout } from "react-icons/ai";

function Navbar() {

    //Component states
    const [user, setUser] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);

    const baseURL = 'http://192.168.0.13:4000/';

    useEffect(() => {
        axios.get(baseURL + 'api/users/1').then(response => {
            const data = response.data;
            setUser(data[0]);
        });
    }, []);

    const modalToggle = () => {
        let modal = document.getElementsByClassName("user-container__modal")[0];
        showModal ? modal.style.display = 'none' : modal.style.display = 'block';
        setShowModal(!showModal);
    }

    return (
        <div className="Navbar">

            <div className="user-container">
                <img src={user.picture} alt="" className="user-container__img" />
                <div className="user-container__data">
                    <h1>{user.username}</h1>
                    <p>{user.rol}</p>
                </div>
                <FaChevronDown className="user-container__icon" onClick={modalToggle} />

                <div className="user-container__modal">
                    <ul className="modal-options-container">
                        <li className="modal__options"> <FaUserAlt /> Profile</li>
                        <li className="modal__options"> <AiFillSetting /> Settings</li>
                        <li className="modal__options"> <AiOutlineLogout /> Logout</li>
                    </ul>
                </div>
            </div>

            <div className="searchBar-container">
                <input type="text" placeholder="  Search Task, Projects etc.." className="searchBar-container__input" />
            </div>

            <p className="project-title">ToDo App</p>
        </div>
    )
}

export default Navbar
