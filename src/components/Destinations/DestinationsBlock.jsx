import React from 'react';
// import destinations from "../../data";

const DestinationsBlock = ({info}) =>  {
    return (

        <div>
            <div className='travelBlock'>
            <div>
            <img className="imgTravel" src={info.image} alt="image" />
            </div>
            <h2 className='titleTravel'>
                {info.name}
            </h2>
            <p className='taglineTravel'>
                {info.tagline}
            </p>

            <p className='lethalTravel'>
            {info.lethal}
            </p>

            <p className='journeyTravel'>
            {info.journey_date}
            </p>

            <p className='descriptionTravel'>
            {/* {destinations.description.paragraph_1}
            {destinations.description.paragraph_2}
            {destinations.description.paragraph_3} */}
            </p>
    
            </div>
        </div>
    );
};

export default DestinationsBlock;