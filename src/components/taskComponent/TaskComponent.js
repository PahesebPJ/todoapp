import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

//Styles
import './TaskComponent.css'

function TaskComponent() {

    const [tasks, setTasks] = React.useState([]);

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
            const request = await axios.get("http://192.168.0.12:4000/api/task/" + params.id);
            setTasks(request.data);
            return request;
        }
        fetchData();
    }, [params.id]);

    return (
        <div className='container-task'>
            <div className="container-task-filter">
                <h1 className="container-task-filter__title">Project Tasks</h1>
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
            {
                tasks.map(task => (
                    <div className='task-container' key={task.id}>
                        <div className='task-title'>
                            <h1>{task.name}</h1>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TaskComponent
