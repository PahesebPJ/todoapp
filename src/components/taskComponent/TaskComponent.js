import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

//Styles
import './TaskComponent.css'

function TaskComponent() {

    const [tasks, setTasks] = React.useState([]);

    const params = useParams();

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get("http://192.168.0.2:4000/api/task/" + params.id);
            setTasks(request.data);
            return request;
        }
        fetchData();
    }, [params.id]);

    return (
        <div className='container-task'>
            {tasks[0].name}
        </div>
    )
}

export default TaskComponent
