import React from 'react';
import './Spinner.css'
import spinner from '../../photos/loading.gif'

const Spinner = () => {
    return (
        <div className='spinnerBox'>
            <img src={spinner} alt="" />
        </div>
    );
}

export default Spinner;
