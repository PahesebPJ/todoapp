import React, { useEffect } from 'react'
import axios from 'axios';
import './userComponent.css'

//Component imports
import TimeComponent from './TimeComponent';

function UserComponent() {

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
        <header className="header">
            <p className="header__user-name">{user.username}</p>
            <img
                src={user.picture}
                alt=""
                className="header__user-image"
            />
            <TimeComponent className="header__time"/>
        </header>
    )
}

export default UserComponent
