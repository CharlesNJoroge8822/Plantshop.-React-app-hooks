import React from "react"; 
import PlantCard from "./PlantCard"; // PlantCard to show plants

function PlantList({ plants, onMarkAsSoldOut }) { //  PlantList component has plants and onMarkAsSoldOut as props

      return (
        <ul className="cards"> 

           {plants.map((plant) => ( // Loop through each plant in the plants array
          
            <PlantCard 

            key={plant.id} // each plant willhave a unique ID
            plant={plant} // Pass current plant to PlantCard

            onMarkAsSoldOut={onMarkAsSoldOut} //mark the plants as sold out

        />

      ))}
      
    </ul>
  );
}

export default PlantList; // Export the PlantList component so we can use it in other files