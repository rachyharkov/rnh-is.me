import React from "react";
import achivements from "./achievment.json";
import { useParams } from "react-router-dom";

function AchievmentDetail() {

    const { id } = useParams();

    const achivement = achivements.find(achivement => achivement.id === id);
    if(!achivement) {
        return <div>Achievment tidak ditemukan, berarti aku harus belajar lebih!!!</div>
    }
    return(
        <div style={{textAlign: 'justify'}}>
            <h4>{achivement.title}</h4>
            <div style={{height: '240px',width: '100%', margin: '16px 0', position: 'relative'}}>
                <img data-src={achivement.img} alt={achivement.name} class="lazyload" style={{height: '240px',width: '100%',objectFit: 'cover',margin: '16px 0',display: 'block'}} />
                    <a href={achivement.title} target="_blank" rel="noopener noreferrer" style={{position: 'absolute',top: '13px',background: '#5b5b5b82',padding: '10px',borderRadius: '5px',right: '13px',color: 'white'}}><i class="fas fa-download"></i></a>
            </div>
            <p>{achivement.description}</p>
        </div>
    )
        
}

export default AchievmentDetail;