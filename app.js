import React, { useEffect, useState } from 'react';
// import all components required

function Application () {

    const [getFetched, setFetchedData]= useState([])

    const [error, setError] = useState ('');

    // do fetch using useEffect
    useEffect (() => {

        // set function to fetch data
        const fetchData = asychrounous => {

            //set function to make request
            const makeRequest = ('pass the url of the API/backend');

            // recieve the request

            // check fro any errors
            // use conditional statement
            if (!makeRequest.ok) throw error ('Failed to fetch')

                // convert fetched data into JSON
                const data = response.json();
                setFetchedData (data)

                fetchData();
        }
    });
};