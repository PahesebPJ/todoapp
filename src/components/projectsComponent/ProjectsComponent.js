import React, { useEffect } from 'react'
import axios from 'axios';

//Styles
import './ProjectsComponent.css'

function ProjectsComponent() {

    const [toggle, setToggle] = React.useState(false);
    const [projects, setProjects] = React.useState([]);

    const handleClick = () => {
        let icon = document.querySelector('ion-icon');
        toggle ? icon.style.transform = 'rotate(90deg)' : icon.style.transform = 'rotate(180deg)';
        setToggle(!toggle);
    }

    useEffect(() => {
        axios.get('http://localhost:4000/api/userprojects/1').then(response => {
            setProjects(response.data);
        });
    }, []);

    const projectCardContaineratDisappear = {
        animation: "movementAtDisappear 0.7s linear",
        animationFillMode: "forwards",
    }

    return (
        <div className='container'>
            <ion-icon name="chevron-forward-outline" onClick={handleClick}></ion-icon>
            {
                projects.map(project => (
                    <div className="project__card__container" key={project.id}>
                        <img
                            className="project__card__img"
                            alt="Hola mami que quieres quMe la voy a jalar equis de kqajaj"
                            src={project.picture}
                            style={toggle ? projectCardContaineratDisappear : {}}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default ProjectsComponent
