import React, { useEffect } from 'react'
import axios from 'axios';

//Styles
import './ProjectsComponent.css'

//Icons
import { FaPlus } from "react-icons/fa";


function ProjectsComponent() {

    /* const [toggle, setToggle] = React.useState(false); */
    const [projects, setProjects] = React.useState([]);

    /* const handleClick = () => {
        let icon = document.querySelector('ion-icon');
        toggle ? icon.style.transform = 'rotate(90deg)' : icon.style.transform = 'rotate(180deg)';
        setToggle(!toggle);
    } */

    useEffect(() => {
        axios.get('http://192.168.0.2:4000/api/userprojects/1').then(response => {
            setProjects(response.data);
        });
    }, []);

    const projectCardContaineratDisappear = {
        animation: "movementAtDisappear 0.7s linear",
        animationFillMode: "forwards",
    }

    return (
        <div className='container'>
            {/* <ion-icon name="chevron-forward-outline" onClick={handleClick}></ion-icon> */}
            {
                projects.map(project => (
                    <div className="project__card__container" key={project.id}>
                        <img
                            className="project__card__img"
                            alt=""
                            src={project.picture}
                        /*  style={toggle ? projectCardContaineratDisappear : {}} */
                        />
                    </div>
                ))
            }
            <div className="project__card__container">
                <FaPlus
                    className="project__card__add"
                    alt=""
                /*  style={toggle ? projectCardContaineratDisappear : {}} */
                />
            </div>

        </div>
    )
}

export default ProjectsComponent
