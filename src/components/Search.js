import React from "react"; //main libarary for building UI 

function Search({ searchTerm, onSearchChange }) { //Search component has named props
  return (
    <div className="searchbar"> {/*container for the search input */}

        <label htmlFor="search">Search Plants:</label> 

          <input
        type="text" 
        id="search" 
        placeholder="Type a name to search..." 
        value={searchTerm} // Set the current value of the input to the searchTerm we got from props

        onChange={(e) => onSearchChange(e.target.value)} // When user types, call onSearchChange with the new typed text
      />
    </div>
  );
}

export default Search; // Export Search 