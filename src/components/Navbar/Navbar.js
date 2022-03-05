import React, { useEffect } from 'react'
import axios from 'axios';
import './Navbar.css'

//Icons
import { FaChevronDown } from 'react-icons/fa';

function Navbar() {

    const [user, setUser] = React.useState([]);
    const baseURL = 'http://localhost:4000/';

    useEffect(() => {
        axios.get(baseURL + 'api/users/1').then(response => {
            const data = response.data;
            console.log(data[0]);
            setUser(data[0]);
        });
    }, []);

    return (
        <div className="Navbar">

            <div className="user-container">
                <img src={user.picture} alt="" className="user-container__img" />
                <div className="user-container__data">
                    <h1>{user.username}</h1>
                    <p>{user.rol}</p>
                </div>
                <FaChevronDown className="user-container__icon" />
            </div>

            <div className="searchBar-container">
                <input type="text" placeholder="Search Task, Projects etc.." className="searchBar-container__input" />
            </div>

            <p className="">To-Do Application</p>
        </div>
    )
}

export default Navbar
