import React from 'react';
import '../App.css'

import photo from '../assets/me_yellowbg.png'

class About extends React.Component {
    render() {
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
            </div>
        )
    }
}

export default About;