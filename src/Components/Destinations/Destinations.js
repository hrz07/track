import React from 'react';
import useTour from '../../Hooks/useTour';
import Tourcard from '../TourCard/TourCard';
import './Destinations.css'

const Destinations = () => {

    const [places, setPlaces] = useTour()
    return (
        <div className='destinations-Container'>
            <h1>DESTINATIONS I GUIDE</h1>
            <div className='destinations'>
            {
                 places.map(place=> <Tourcard id={place.id} place={place}></Tourcard> )
            }
            </div>
        </div>
    );
}

export default Destinations;
