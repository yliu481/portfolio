import React from 'react';

const Skill = ({skill})=>{

    return(
        <div className="skill">
            
            <div className="skill-name">
                <span>{`${skill.name} `}</span><span className="score"> {`(${skill.score}%)`}</span>
            </div>
            <div className="card-info">
                <div className={`progress progress-${skill.score}`}></div>
            </div>
        </div>
    );
}

export default Skill;