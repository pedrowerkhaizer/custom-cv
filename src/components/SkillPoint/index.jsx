import React from 'react';
import '../../App.css';

//lista {
    // 1: {title: 'X', type: 'skill', 'expertise: 0.8'}
    // 2: {title: 'Y', type: 'skill', 'expertise: 0.97'}
    // foreach item lista { <div display vertical> <div display vertical> <p>{item.title}</p> </div> </div>}

const SkillPoint = (type, expertise) => {
    let color = "#000"
    //If type is equal to "Skill" then show yellow, if not, show blue
    type = 'skill' ? color= '#F4F681' : color = '#73C1ED'
    return (
        <div style={{width: '28vw', height: '0.8rem', borderRadius: '0.5rem', border: '2 solid #353A44'}}>
            <div style={{height: '100%', borderRadius: '1rem', backgroundColor: {color}, width: {expertise}}} />
        </div>
    )
}

export default SkillPoint;