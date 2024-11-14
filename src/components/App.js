import React, { useState, useEffect } from 'react'; // main library for building the UI
import Header from './Header'; 
import PlantPage from './PlantPage'; // import all the components for my app
import NewPlantForm from './NewPlantForm';

function App() {
  // state that will hold fetched data
  const [plants, setPlants] = useState([]);

  // state that will hold any error
  const [catchError, setError] = useState('');

  // fetch data using useEffect(hook) 
  useEffect(() => { // pass an arrow function to useEffect
    const fetchPlants = async () => { // asynchronous function will fetch data from the API
      try {
        const requestBackendData = await fetch('https://plantshop-react-app-hooks.onrender.com/plants'); // this makes a network request to the specified URL

        if (!requestBackendData.ok) throw new Error('Failed to fetch plants'); // if fetch is not successful, an error will be printed

        const data = await requestBackendData.json(); // successful fetch is converted  
        setPlants(data); // setPlants updates the array with the fetched data
      } catch (err) {
        setError(err.message); // catch error block takes updates the error message 
      }
    };

    fetchPlants();
  }, []);

  // handle the addPlant button
  // spread Operator creates a new array for each plant and leaves the original array unchanged for use of other elements
  const handleAddPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, { ...newPlant, isSoldOut: false }]); // comes with default of unsold (in stock i.e)
  };

  // handle the status for plants in stock and be sold out
  const handleMarkAsSoldOut = (plantId) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        // strict equality to ensure that both operands are truthy
        plant.id === plantId ? { ...plant, isSoldOut: true } : plant // Spread the existing plant properties
      )
    );
  };

  return (
    <div className="app">
      {/* return the required dependencies */}
      <Header />
      {/* conditional rendering an error using the AND operator */}
      {catchError && <p>Error: {catchError}</p>}  {/* expression catchError will render the p if it's not an empty value */}
      <NewPlantForm onAddPlant={handleAddPlant} /> {/* render form and pass the function of the button */}
      <PlantPage plants={plants} onMarkAsSoldOut={handleMarkAsSoldOut} />
      {/* render the plantPage and toggle the handling of the button */}
    </div>
  );
}


export default App;