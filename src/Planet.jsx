import React from 'react';

const Planet = ({ planet }) => {
  return (
    <div className=" card">
        
      <h3 className='text-xl text-gray-400'>{ planet.name }</h3>
      <p className='text-lg text-gray-300 font-semibold'>Population - { planet.population }</p>
      <p className='text-md text-gray-300 font-semibold'>Terrain - { planet.terrain }</p>
      
    </div>
  );
}
 
export default Planet;