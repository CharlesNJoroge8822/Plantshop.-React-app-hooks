import React, { useState } from 'react';

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    const newPlant = {
      id: Date.now(), //gnerate ID in real time
      name,
      price,
      image,
      isSoldOut: false, // isSold btn should be not default
    };

    onAddPlant(newPlant); // parent function to add the new plant
    setName(''); 
    setPrice('');  
    setImage('');  
  };

  return (
    <form onSubmit={handleSubmit} className="new-plant-form">
      <h2>Add a New Plant</h2>
      <div>
        <label htmlFor="name">Plant Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Plant Name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name state accordingly 
          required 
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)} // Update price state
          required // Make this input required
        />
      </div>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)} // Update image state
          required // Make this input required
        />
      </div>
      <button type="submit">Add Plant</button> {/*button to add plant*/}
    </form>
  );
}

export default NewPlantForm;