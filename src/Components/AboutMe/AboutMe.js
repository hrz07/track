import React from 'react';
import me from '../../photos/me.jpg';
import './AboutMe.css'

const Aboutme = () => {
    return (
        <div className='aboutMeContainer'>
            <div className="texts">
                <h2>Hey`</h2>
                <h1>I'm Rashedul Islam Hridoy</h1>
                <p>I'm a junior web developer. I know JavaScript, ReactJS, Bootstrap, Tailwind, Firebase, ExpressJS etc. My focus is getting a job as a junior developer in 2022. Inshallah I'll achive my goal. </p>
                <br />
                <a href="https://github.com/hrz07" className='aboutBtn' target="_blank" >Github</a>
            </div>
            <img src={me} alt="" />
        </div>
    );
}

export default Aboutme;
