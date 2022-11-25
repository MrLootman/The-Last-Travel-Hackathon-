import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import "../style/Destination.css";
import DestinationsTitle from '../components/Destinations/DestinationsTitle';
import DestinationsBlock from '../components/Destinations/DestinationsBlock';
import destinations from "../data";

const Destinations = () => {
    return (
    <div>
      <Header />
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
        <Footer />
      </div>
    );
};

export default Destinations;