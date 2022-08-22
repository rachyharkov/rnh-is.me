import React from "react";
import projects from "./projects.json";
import { useParams } from "react-router-dom";

function ProjectDetail() {

    const { id } = useParams();

    const project = projects.find(project => project.id === id);
    if(!project) {
        return <div>project tidak ditemukan, berarti aku harus buat lagi kah?</div>
    }
    return(
        <div style={{textAlign: 'justify'}}>
            <h4>{project.title}</h4>
            <div style={{height: '240px',width: '100%', margin: '16px 0', position: 'relative'}}>
                <img data-src={project.img} alt={project.name} class="lazyload" style={{height: '240px',width: '100%',objectFit: 'cover',margin: '16px 0',display: 'block'}} />
                    <a href={project.title} target="_blank" rel="noopener noreferrer" style={{position: 'absolute',top: '13px',background: '#5b5b5b82',padding: '10px',borderRadius: '5px',right: '13px',color: 'white'}}><i class="fas fa-download"></i></a>
            </div>
            <p>{project.description}</p>
        </div>
    )
        
}

export default ProjectDetail;