import React from 'react';
// set props that will hold data
function PlantCard({ plant, onMarkAsSoldOut }) {
  return (
    <li className="card" data-testid="plant-item">

      {/* toggle the each image property along uaing the prop name */}
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <button
        className="primary"

        onClick={() => onMarkAsSoldOut(plant.id)} // Call the function with plant ID

        // onclick disable the state of the btn to sold out to be true
        disabled={plant.isSoldOut} 
      >
        {plant.isSoldOut ? 'Sold Out' : 'In Stock'} 
      </button>
    </li>
  );
}

export default PlantCard;


