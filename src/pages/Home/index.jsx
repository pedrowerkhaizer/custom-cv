import React from 'react';
import '../../App.css'

import { MarkGithubIcon } from '@primer/octicons-react';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="contentContainer">
                    <div className="leftContentContainer">
                        <h1>Be creative in <br />
                            all your solutions</h1>
                        <p className="professionalTitle">Front-end developer</p>
                        <p className="summary">
                            I always try to understand how things works. This way I can create an alternative solution everytime I look at something.
                        </p>

                        <div className="buttonContainer">
                            <div className="imgBtn">
                                <img src="" alt="" />
                                <MarkGithubIcon size={36} fill="#181320" />
                                <a href="https://github.com/pedrowerkhaizer">Github</a>
                            </div>

                            <a href="">Download CV</a>
                        </div>
                    </div>

                    <div className="rightContentContainer">
                        <div className="codingContainer">
                            <div style={{ display: 'flex', flexDirecition: 'row', marginBottom: 16, width: '100%', alignItems: 'center', justifyContent: 'right' }}>
                                <div className="minimizeCircle" />
                                <div className="cascateCircle" />
                                <div className="closeCircle" />
                            </div>
                            <code>
                                <span style={{ color: '#CE88F0' }}>if </span>(problem) <span style={{ color: '#6DCCD8' }}>==</span> <span style={{ color: '#E9AF79' }}>true</span> {' {'} <br />
                                <span style={{ marginLeft: 56 }}>try {' {'}</span>

                            </code>
                        </div>
                    </div>

                </div>
            </div >
        );
    }
}

export default Home;