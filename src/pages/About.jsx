import React from 'react';
import '../App.css'

import photo from '../assets/me_yellowbg.png'
import SkillPoint from '../components/SkillPoint';

class About extends React.Component {
    render() {
        const skillList = [
            { title: 'JavaScript', expertise: "95%" },
            { title: 'ReactJS', expertise: "88%" },
            { title: 'ReactNative', expertise: "85%" },
            { title: 'Java', expertise: "82%" },
            { title: 'Python', expertise: "80%" },
            { title: 'Photoshop', expertise: "80%" },
            { title: 'Figma', expertise: "80%" },
            { title: 'HTML 5', expertise: "95%" },
            { title: 'MySQL', expertise: "80%" },
            { title: 'noSQL', expertise: "80%" },
            { title: 'Node.js', expertise: "75%" },
            { title: 'C#', expertise: "85%" },
            { title: 'Illustrator', expertise: "70%" },
            { title: 'PHP', expertise: "70%" },
            { title: 'Agile Scrum', expertise: "78%" },
        ]

        const languagesList = [
            { title: 'Portuguese', expertise: "100%" },
            { title: 'English', expertise: "88%" },
            { title: 'Spanish', expertise: "65%" },
        ]
        return (
            <div className="contentContainer" style={{ alignItems: 'start', marginTop: '3rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={photo} alt="Me in a yellow background" style={{ width: 96, height: 96, objectFit: 'cover', borderRadius: 64 }} />
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 16 }}>
                        <h3 style={{ margin: 0, letterSpacing: 0.2 }}>Pedro Werkhaizer</h3>
                        <p style={{ margin: '0.4rem 0 0', color: '#9BA4CD' }}>Front-end developer</p>
                    </div>
                </div>
                <h6 style={{ letterSpacing: 2, margin: '1.5rem 0 1rem 0', color: '#9BA4CD' }}>ABOUT ME</h6>
                <p style={{ margin: 0, color: '#DDDDDD', padding: '0 1rem', lineHeight: 1.5 }}>
                    <h3 style={{ margin: 0 }}>Hello! </h3>
                    My name is Pedro, I'm 21 years old, and I'm a self-taught developer from Rio de Janeiro, Brazil.
                    I have always been very curious and therefore always wanted to know how things worked...
                    When I was a child, every time I saw a game I wondered how it worked. This curiosity moved me and at the age of 14, 2 years after some freelance experiences in Graphic Design, I decided to create my first mobile game using C# and JavaScript technology through the Unity Engine and ended up falling in love with this world. (Although I realized I didn't come to this world to create games lol)
                </p>

                <h6 style={{ letterSpacing: 2, margin: '1.5rem 0 0.5rem 0', color: '#9BA4CD' }}>SKILLS</h6>
                <div className="skillContainer">
                    {skillList.map(({ title, expertise }, index) => (
                        <SkillPoint
                            key={index}
                            color="#e0af1c"
                            title={title}
                            expertise={expertise} />
                    ))}
                </div>

                <h6 style={{ letterSpacing: 2, margin: '1.5rem 0 0.5rem 0', color: '#9BA4CD' }}>LANGUAGES</h6>
                <div className="skillContainer">
                    {languagesList.map(({ title, expertise }, index) => (
                        <SkillPoint
                            key={index}
                            color="#3BACEC"
                            title={title}
                            expertise={expertise} />
                    ))}
                </div>

                <div className="historicalContainer">
                    <h6 style={{ letterSpacing: 2, margin: '1.5rem 0 0.5rem 0', color: '#9BA4CD' }}>ACADEMIC HISTORY</h6>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <h3 style={{ marginRight: 18 }}>2023</h3>
                        <p>Bachelor in Business Administration | Duale Hoschule</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <h3 style={{ marginRight: 18 }}>2024</h3>
                        <p>System Analysis and Development</p>
                    </div>
                </div>

                <div className="historicalContainer">
                    <h6 style={{ letterSpacing: 2, margin: '1.5rem 0 0.5rem 0', color: '#9BA4CD' }}>PROFESSIONAL HISTORY</h6>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <h3 style={{ marginRight: 18 }}>2020</h3>
                        <p>Logistics Intern at Volkswagen Trucks and Buses</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <h3 style={{ marginRight: 18 }}>2021</h3>
                        <p>Product Planning Administrative Technician at Volkswagen Trucks and Buses</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: 36 }}>
                        <h3 style={{ marginRight: 18 }}>2022</h3>
                        <p>Human Resources Administrative Technician at Volkswagen Trucks and Buses</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default About;