import React, { useState } from "react";
import Search from "./Search";        //import all the dependencies and the main libarary for UI
import PlantList from "./PlantList";

// props, plants will recieve the plants
// onmarkAsSoldOut will update the status 
function PlantPage({ plants, onMarkAsSoldOut }) {

  // search input will be empty 
  // searchTerm will receive the search name typed
  const [searchTerm, setSearchTerm] = useState("");

  //handle serach and update search empty state to the input value
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };
// filter plants when values are inputed in the field
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="plant-page">
      <h2>Plant Collection</h2>
      <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <PlantList plants={filteredPlants} onMarkAsSoldOut={onMarkAsSoldOut} />
    </div>
  );
}

export default PlantPage;