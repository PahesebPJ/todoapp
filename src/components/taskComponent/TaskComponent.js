import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

//Styles
import './TaskComponent.css'

function TaskComponent() {

    const [tasks, setTasks] = React.useState([]);

    const params = useParams();

    function getTasks() {
        axios.get("http://localhost:4000/api/task/" + params.id).then(response => {
            setTasks(response.data);
        });
    }

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div className='container-task'>
        </div>
    )
}

export default TaskComponent
