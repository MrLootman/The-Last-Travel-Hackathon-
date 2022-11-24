import React from 'react';
// import "../style/Destinations.css";
import DestinationsTitle from '../components/Destinations/DestinationsTitle';
import DestinationsBlock from '../components/Destinations/DestinationsBlock';
// import destinations from "../../data";
import destinations from "../data";

const Destinations = () => {
    return (
        <div>
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