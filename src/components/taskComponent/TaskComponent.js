import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

//Styles
import './TaskComponent.css'

//Icons
import { FaPen, FaTrash } from "react-icons/fa";

//Components
import Dashboard from '../Dashboard/Dashboard';

function TaskComponent() {

    //States
    const [tasks, setTasks] = React.useState([]);
    const [project, setProject] = React.useState([]);

    const params = useParams();

    //Button array to create buttons automatically
    let buttons = [
        {
            id: 1,
            name: 'All',
        },
        {
            id: 2,
            name: 'In progress',
        },
        {
            id: 3,
            name: 'Done',
        }
    ];

    function filterData(button) {
        console.log(button.id, button.name);
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].state == button.name) {
                console.log(tasks[i].name);
            }
        }
    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get("http://192.168.0.13:4000/api/task/" + params.id);
            const projectRequest = await axios.get("http://localhost:4000/api/project/"+params.id);
            setTasks(request.data);
            setProject(projectRequest.data);
            return request;
        }
        fetchData();
    }, [params.id]);

    return (
        <div className='container-task'>
            <div className="container-task-filter">
                <h1 className="container-task-filter__title">{project[0].name}</h1>
                <div className="container-task-filter__buttons">
                    {
                        buttons.map(button => {
                            return (
                                <button
                                    className="container-task-filter__button"
                                    id={button.id}
                                    onClick={() => filterData(button)}
                                    key={button.id}
                                >{button.name}</button>
                            )
                        })
                    }
                </div>
            </div>

            <button className="task-container-create-task-button">
                Create Task
            </button>

            {
                tasks.map(task => (
                    <div className="task-container" key={task.id}>
                        <div className="task-container__header">
                            <h1 className="task-container__title">{task.name}</h1>
                            <div className="task-container-status-update">
                                <p className="task-container__state">{task.state}</p>
                                <FaPen className="task-container__update-icon" />
                                <FaTrash className="task-container__delete-icon" />
                            </div>
                        </div>

                        <div className="task-container__info">
                            <p className="task-container__description">{task.description}</p>
                            <p className="task-container__date">{task.init_date}</p>
                        </div>
                    </div>

                ))
            }

            <Dashboard projectId={params.id} />

        </div>
    )
}

export default TaskComponent
