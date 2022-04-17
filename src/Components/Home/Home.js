import React from 'react';
import './Home.css'
import MapPhoto from '../../photos/mapping.jpg'
import useTour from '../../Hooks/useTour';
import Tourcard from '../TourCard/TourCard';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {


    const [places, setPlaces] = useTour()

    return (
        <div>
            <div className='bannerBox'>
                <h1>
                    Explore Amazing Places With Me
                </h1>
                <button className='aboutBtn'  >EXPLORE</button>
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
                <marquee behavior="" direction="">
                    <h1>Favorite Places to Visit
                    Popular Destinations</h1>
                </marquee>

                <h3>DESTINATIONS</h3>
    
                <div className='spots'>
                    {
                        places.map(place=> <Tourcard key={place.id} place={place}></Tourcard> )
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;
