import React from 'react';
import './Home.css'
import MapPhoto from '../../photos/mapping.jpg'

const Home = () => {
    return (
        <div>
            <div className='bannerBox'>
                <h1>
                    Explore Amazing Places With Me
                </h1>
                <button className='aboutBtn'>About Me</button>
            </div>
            <div className='whyMe'>
                <div className='whyMeText'>
                    <h1>Why Me ?</h1>
                    <p>`Well! I have more than 6 years tour guiding experience. I know all tourist places and thousand of history of Bangladesh. I'll explain your all during tour time. I'll care you to being safe`</p>
                </div>
                <div>
                    <img src={MapPhoto}  />
                </div>
            </div>
            <div className='spotsContainer'>
                <h3>Top Places I Guide</h3>
                <div className='spots'>
                    {
                        
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;
