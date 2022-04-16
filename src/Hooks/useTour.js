import React, { useEffect, useState } from 'react';

const useTour = () => {
    const [places, setPlaces] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data=> setPlaces(data))
    }, [])
    
    return [places, setPlaces]
}

export default useTour;
