import React, {useEffect} from 'react';
import axios from 'axios';

//Styles
import './TaskComponent.css'

function TaskComponent() {

    const [tasks, setTasks] = React.useState([]);

    useEffect(() => {
        
    }, []);
    
    return (
        <div className='container-task'>
            Task Component works!
        </div>
    )
}

export default TaskComponent
