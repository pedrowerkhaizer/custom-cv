'esversion: 6;'
import React from 'react';
import '../../App.css';

//lista {
// 1: {title: 'X', type: 'skill', 'expertise: 0.8'}
// 2: {title: 'Y', type: 'skill', 'expertise: 0.97'}
// foreach item lista { <div display vertical> <div display vertical> <p>{item.title}</p> </div> </div>}

const SkillPoint = (props) => {
    return (
        <div>
            <p style={{ fontSize: 16, margin: '0.5rem 0', fontWeight: 500, color: '#DDDDDD' }}>{props.title}</p>
            <div style={{ maxWidth: '20vw', minWidth: 256, height: 16, borderRadius: '0.5rem', border: '2px solid #353A44' }}>
                <div style={{ height: '100%', borderRadius: '1rem', backgroundColor: props.color, width: props.expertise }} />
            </div>
        </div>
    )
}

export default SkillPoint;