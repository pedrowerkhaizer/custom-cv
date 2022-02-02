import React from 'react';
import '../App.css'

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
                        <iframe src='https://my.spline.design/grogucopy-d159e7871ed7cbb457ac90ca2bfedcb8/' frameborder='0' width='100%' height='100%'></iframe>
                    </div>

                </div>
            </div >
        );
    }
}

export default Home;