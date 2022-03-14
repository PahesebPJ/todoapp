import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//Styles
import './ProjectsComponent.css'

//Icons
import { FaPlus } from "react-icons/fa";


function ProjectsComponent() {

    const navigate = useNavigate();

    const [projects, setProjects] = React.useState([]);

    function navigateTo(id) {
        navigate('task/' + id);
    }

    useEffect(() => {
        axios.get('http://192.168.0.13:4000/api/userprojects/1').then(response => {
            setProjects(response.data);
        });
    }, []);
    return (
        <div className='container'>
            {
                projects.map(project => (
                    <div className="project__card__container" key={project.id} onClick={() => navigateTo(project.id)}>
                        <img
                            className="project__card__img"
                            alt=""
                            src={project.picture}
                        />
                    </div>
                ))
            }
            <div className="project__card__container">
                <FaPlus
                    className="project__card__add"
                    alt=""
                />
            </div>

        </div>
    )
}

export default ProjectsComponent
