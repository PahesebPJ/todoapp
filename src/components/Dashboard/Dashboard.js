import React from 'react'
import axios from 'axios';

//styles
import './Dashboard.css'
import { useEffect } from 'react/cjs/react.production.min';

function Dashboard(props) {

    const [users, setUsers] = React.useState([]);



    return (
        <div className="dashboard-container">
            <h1>Hello world!</h1>
        </div>
    )
}

export default Dashboard