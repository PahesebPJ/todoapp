import React, { useEffect } from 'react';
import axios from 'axios';

//styles
import './Dashboard.css'

//Icons
import { FaPlus } from "react-icons/fa";

function Dashboard(props) {

    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get("http://192.168.0.13:4000/api/userproject/" + props.projectId);
            setUsers(request.data);
            return request;
        }

        fetchData();
    }, [props.projectId]);

    return (
        <div className="dashboard-container">
            {
                users.map(user => {
                    return <div className="dashboard-container-user" key={user.id}>
                        <img className="dashboard-container-user__img" src={user.picture} alt={user.username} />
                    </div>
                })
            }
            <div className="dashboard-container-user-icon">
                <FaPlus className="dashboard-container-user-add-icon" />
            </div>
        </div>
    )
}

export default Dashboard