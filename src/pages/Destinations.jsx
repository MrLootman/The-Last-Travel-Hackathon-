import React from 'react';
import "../style/Destination.css";
import DestinationsTitle from '../components/Destinations/DestinationsTitle';
import DestinationsBlock from '../components/Destinations/DestinationsBlock';
import destinations from "../data";
import "../style/App.css";

const Destinations = () => {
    return (
        <div className='destinationForTravel'>
            <div>
                <DestinationsTitle />
            </div>
          
            {destinations.map((info) => (
                <div>
                    <DestinationsBlock 
                    key = {info.id}
                    info = {info}
                    />   
                </div>          
        ))}
        </div>
    );
};

export default Destinations;