import React from 'react';
import Skill from './Skill';

const skillList = [
    {
        name:'JavaScript',
        score:90
    },
    {
        name:'HTML/CSS',
        score:85
    },
    {
        name:'React',
        score:90
    },
    {
        name:'MySQL',
        score:85
    },
    {
        name:'Java',
        score:75
    },
    {
        name:'Git',
        score:80
    },
    {
        name:'Python',
        score:75
    },
    {
        name:'NodeJS',
        score:85
    },
]

const Skills = () => {
    return (
        <div className="skills pt-3 pt-md-5"  id="projects">
            <div className="container">
            <h2 className="text-center">Skills</h2>
            <p className="lead"></p>
            <hr/>
                <div className="row">
                    <div className="col-md-6" >
                        {skillList?skillList.slice(0,4).map((item, index)=>{
                            return  <Skill  skill = {item} key={`skill-1-${index}`}/>
                        }):''}
                    </div>
                    <div className="col-md-6">
                        {skillList?skillList.slice(4).map((item, index)=>{
                            return <Skill  skill = {item} key={`skill-2-${index}`}/>
                        }):''}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Skills;